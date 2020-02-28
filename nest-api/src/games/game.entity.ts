import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import { User } from "../user/user.entity";
import { Round } from "../round/round.entity";

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

    @OneToMany(() => Round, round => round.game)
    rounds: Round[];

    @ManyToOne(() => User, user => user.games)
    creator: User;

    @ManyToMany(() => User, {
        nullable: false
    })
    @JoinTable()
    players: User[];
}
