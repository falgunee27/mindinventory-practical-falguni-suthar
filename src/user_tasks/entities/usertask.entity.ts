import { StatusEnum } from "src/utils/task_status.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserTasks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    task_title: string;

    @Column({nullable: false})
    task_description: string;

    @Column({type: "enum", enum: StatusEnum, nullable: false})
    status: StatusEnum;

    @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
