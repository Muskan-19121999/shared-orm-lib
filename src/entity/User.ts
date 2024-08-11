import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Setting } from "./Settings"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToOne(() => Setting, settings => settings.user, { cascade: true })
    
    @JoinColumn() // This creates a foreign key column in the `users` table
    settings: Setting;

}
