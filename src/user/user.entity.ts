import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 60})
    email: string;

    @Column({length : 255})
    password: string;

    @Column({length : 60})
    name: string;

    @Column({length: 60})
    surname: string;

    @Column()
    age: number;

    @Column()
    locationId: number;

}
