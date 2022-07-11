import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDateString, IsEmail, Length, Max, Min } from 'class-validator';

@Entity()
class Reservation {
    @PrimaryGeneratedColumn({
        type: 'integer',
        unsigned: true,
    })
    public id: number;

    @Column({
        type: 'varchar',
        length: 50,
    })
    @Length(1, 50)
    public firstName: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    @Length(1, 50)
    public lastName: string;

    @Column({
        type: 'varchar',
        length: 1000,
    })
    @Length(1, 1000)
    public billingAddress: string;

    @Column({
        type: 'varchar',
        length: 2,
    })
    @Length(2)
    public billingCountry: string;

    @Column({
        type: 'varchar',
        length: 10,
    })
    @Length(1, 10)
    public postalCode: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    @Length(1, 50)
    public city: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    @IsEmail()
    public email: string;


    @Column({
        type: 'varchar',
        length: 11,
    })
    @Length(11)
    public phoneNumber: string;

    @Column({
        type: 'tinyint',
        unsigned: true,
    })
    @Min(1)
    public numberOfGuests: number;


    @Column({
        type: 'date',
    })
    @IsDateString()
    public checkInDate: Date;

    @Column({
        type: 'date',
    })
    @IsDateString()
    public checkOutDate: Date;

    @CreateDateColumn({
        type: 'datetime',
    })
    public createdAt: Date;
}

export default Reservation;
