import { Reservation } from '@entities';
import BaseRepository from './BaseRepository';


class ReservationRepository extends BaseRepository<Reservation> {
    public constructor () {
        super(Reservation);
    }
}

export default ReservationRepository;
