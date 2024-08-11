import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { User } from "./User";

@Entity()
export class Setting {

    @PrimaryGeneratedColumn()
    id: number
  
    @Column({ default: true })
    isNotificationEnabled: boolean;
  
    @Column({ default: false })
    isNewDashboardEnabled: boolean;
  
    @Column()
    timezone: string;

    @OneToOne(() => User, user => user.settings)
    user: User;
    
}
