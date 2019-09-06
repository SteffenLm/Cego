import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { User } from "./User";

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

    @ManyToOne(type => User, user => user.games)
    creator: User;

    @ManyToMany(type => User,{
        nullable: false
    })
    @JoinTable()
    players: User[];
}
