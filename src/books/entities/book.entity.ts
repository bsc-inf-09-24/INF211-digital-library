import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('BOOKS')
export class Book {
    @PrimaryGeneratedColumn({ name: 'ID' })
    id: number;

    @Column({ name: 'TITLE', length: 255 })
    title: string;

    @Column({ name: 'AUTHOR', length: 255 })
    author: string;

    @Column({ name: 'YEAR' })
    year: number;

    @Column({ name: 'GENRE', length: 100, nullable: true })
    genre: string;

    @CreateDateColumn({ name: 'CREATED_AT' })
    createdAt: Date;
}