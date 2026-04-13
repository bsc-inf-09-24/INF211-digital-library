import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('USERS')
export class User {
    @PrimaryGeneratedColumn({ name: 'ID' })
    id: number;

    @Column({ name: 'NAME', length: 255 })
    name: string;

    @Column({ name: 'EMAIL', unique: true, length: 255 })
    email: string;

    @Column({ name: 'ROLE', length: 50, default: 'member' })
    role: string;

    @CreateDateColumn({ name: 'CREATED_AT' })
    createdAt: Date;
}