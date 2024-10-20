import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    public getBooks(): string {
        return "get all books"
    } 

    public getBookById(): string {
        return "get books by id"
    }
}
