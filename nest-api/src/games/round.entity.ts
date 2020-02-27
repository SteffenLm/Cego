import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../user/user.entity";
import { Game } from "./game.entity";


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

    @ManyToOne(() => User)
    player: User;

    @ManyToOne(() => Game)
    game: Game;
}
