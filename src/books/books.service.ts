import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    private books = [
        {id:1, title:'The Hobbit', author:'J.R.R. Tolkien', year:1937},
        {id:2, title:'1984', author:'George Orwell', year:1949},
        {id:3, title:'Harry Potter', author:'J.K. Rowling', year:1997},
        {id:4, title:'The Alchemist', author:'Paulo Coelho', year:1988}
    ]

    getBooks(): string {
        return JSON.stringify(this.books);
    }

    getBookById(id: number): string {
        const book = this.books.find(a => a.id === id);
        return JSON.stringify(book)=="[]" ? JSON.stringify({message: "Book not found"}):JSON.stringify(book);
    }   

    getBooksByAuthor(author: string): string{
        const books = this.books.filter(a => a.author.toLocaleLowerCase() === author.toLocaleLowerCase());
        return JSON.stringify(books) == "[]" ? JSON.stringify({message: "No books found for this author"}):JSON.stringify(books);
    }
}
