import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Game } from "./Game";


@Entity()
export class Round {

    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number;

    @Column({
        type: "int",
        nullable: false,
    })
    value: number;

    @ManyToOne(type => User)
    player: User;

    @ManyToOne(type => Game)
    game: Game;
}
