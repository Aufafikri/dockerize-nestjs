import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('/')
  public getBooks() {
    return this.booksService.getBooks()
  }

  @Get('/id')
  public getBookById() {
    return this.booksService.getBookById()
  }
}
