import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Game } from "../games/game.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number;

    @Column({
        type: "varchar",
        length: 30,
        nullable: false,
        unique: true
    })
    username: string;

    @Column({
        type: "varchar",
        length: 64,
        nullable: false,
        select: false
    })
    password: string;

    @Column({
        type: "varchar",
        length: 60,
        unique: true,
        nullable: true,
        select: false
    })
    email: number;

    @Column({
        type: "varchar",
        length: 32,
        nullable: true,
        select: false
    })
    jwtkey: string;

    @OneToMany(() => Game, game => game.creator)
    games: Game[];
}