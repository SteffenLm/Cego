import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { Round } from "./Round";

@Entity()
export class Game {

    @PrimaryGeneratedColumn({
        type: "int"
    })
    id: number;

    @Column({
        type: "varchar",
        length: 30,
        nullable: false
    })
    name: string;

    @CreateDateColumn()
    created: string;

    @OneToMany(type => Round, round => round.game)
    rounds: Round[];

    @ManyToOne(type => User, user => user.games)
    creator: User;

    @ManyToMany(type => User,{
        nullable: false
    })
    @JoinTable()
    players: User[];
}
