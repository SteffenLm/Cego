import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";
import { User } from "../user/user.entity";
import { Game } from "../games/game.entity";


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

    @ManyToOne(() => User, user => user.id)
    player: User;

    @ManyToOne(() => Game, game => game.id)
    game: Game;
}
