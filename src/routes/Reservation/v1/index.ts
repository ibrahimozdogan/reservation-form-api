import { Router } from 'express';
import { Request, Response } from 'express';
import { ReservationRepository } from '@repositories';


export default function (route: Router) {
    const reservationRepository = new ReservationRepository();

    route.post('/v1/save-reservation', async (req: Request, res: Response) => {
        try {
            const result = await reservationRepository.insertIfNotExists(req.body, {
                where: {
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    phoneNumber: req.body.phoneNumber,
                    checkInDate: req.body.checkInDate,
                    checkOutDate: req.body.checkOutDate
                }
            });

            if (result === -1) {
                res.status(400).send({ status: false, message: 'VALIDATION_ERROR' });
            } else if (result === 0) {
                res.status(500).send({ status: false, message: 'SOMETHING_WENT_WRONG' });
            } else if (result === -2) {
                res.status(200).send({ status: false, message: 'RESERVATION_EXISTS' });
            } else {
                res.status(200).send({ status: true, message: 'SUCCESS' });
            }
        } catch (e) {
            res.status(500).send({ status: false, message: 'SOMETHING_WENT_WRONG' });
        }

    });

    const ITEM_PER_PAGE = 10;
    route.get('/v1/reservations/:page', async (req: Request<{ page: number }>, res: Response) => {

        try {
            const reservations = await reservationRepository.find({
                skip: ITEM_PER_PAGE * (req.params.page - 1),
                take: ITEM_PER_PAGE,
            });

            res.status(200).send({ status: true, reservations });
        } catch (e) {
            res.status(500).send({ status: false, message: 'SOMETHING_WENT_WRONG' });
        }
    });
}
