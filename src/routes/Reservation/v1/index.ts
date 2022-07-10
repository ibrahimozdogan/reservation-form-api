import { Router } from 'express';
import { Request, Response } from 'express';
import { ReservationRepository } from '@repositories';


export default function (route: Router) {
     const reservationRepository = new ReservationRepository();

    route.post('/save-reservation', async (req: Request, res: Response) => {
        const result = await reservationRepository.insert(req.body);

        if (result === -1) {
            res.status(400).send({ status: false, message: 'validation error' });
        } else if (result === 0) {
            res.status(500).send({ status: false, message: 'unexpected error' });
        } else {
            res.status(200).send({ status: true, message: 'success' });
        }
    });

    route.get('/reservations', async (req: Request, res: Response) => {
        try {
            const reservations = await reservationRepository.find();

            res.status(200).send({ status: true, reservations });
        } catch (e) {
            res.status(500).send({ status: false, message: 'unexpected error' });
        }
    });
}
