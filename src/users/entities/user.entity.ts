import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    username: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @CreateDateColumn()
    created_at: string;
}
