import superagent from 'superagent';

const BASE_URL = 'http://localhost:3333';

const payload = {
    'firstName': (Math.random() + 1).toString(36).substring(7),
    'lastName': 'asdasd',
    'billingAddress': 'test',
    'billingCountry': 'az',
    'postalCode': '123',
    'city': 'berlin',
    'email': 'ibo@gmail.com',
    'phoneNumber': '15752626747',
    'checkInDate': '2022-07-08',
    'checkOutDate': '2022-09-11',
    'numberOfGuests': 5,
};

describe('POST /save-reservation', () => {
    it('should insert reservation successfully if given payload is correct',  (done) => {
        superagent.post(`${BASE_URL}/v1/save-reservation`).
            send(payload).end(function (err, res) {
                expect(res.status).toBe(201);
                expect(res.body.status).toBe(true);
                expect(res.body.message).toBe('SUCCESS');
                done();
            });
    });

    it('should detect duplication if a reservation already exists',   (done) => {
        superagent.post(`${BASE_URL}/v1/save-reservation`).send(payload).end(function (err, res) {
            expect(res.status).toBe(200);
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe('RESERVATION_EXISTS');
            done();
        });
    });

    it('should return 400 if given payload is not valid request',  (done) => {
        superagent.post(`${BASE_URL}/v1/save-reservation`).send({
            'firstName': 'ibrahim',
        }).end(function (err, res) {
            expect(res.status).toBe(400);
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe('VALIDATION_ERROR');
            done();
        });
    });
});

describe('GET /reservations', () => {
    it('should return reservations', function (done) {
        superagent.get(`${BASE_URL}/v1/reservations/1`).end(function (err, res) {
            expect(res.status).toBe(200);
            expect(res.body.status).toBe(true);
            expect(res.body.reservations.length).toBe(1);
            //expect(res.body.reservations.length).toBe();
            done();
        });
    });
});
