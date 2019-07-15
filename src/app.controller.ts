import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // no arguments = root route handling. using 'products' would handle root.com/products
export class AppController {
  constructor(private readonly appService: AppService) {} // dependency injection! yay!

  @Get() // passing a 'products' param would also respond to root.com/products
  getHello(): string {
    return this.appService.getHello();
  }
}
