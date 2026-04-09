import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    getBooks(): string {
        return this.booksService.getBooks();
    }

    @Get('/author/:author')
    getBooksByAuthor(@Param('author') author: string): string{
        return this.booksService.getBooksByAuthor(author);
    }
    
    @Get('/:id')
    getBookById(@Param('id') id: number): string {
        return this.booksService.getBookById(Number(id));
    }
}
