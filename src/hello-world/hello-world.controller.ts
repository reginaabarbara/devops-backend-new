import { Controller, Get } from '@nestjs/common';

@Controller('v1')
export class HelloWorldController {

@Get('helloworld')
async getHelloWorld() {
  return JSON.stringify({test: 'abc'});  
}
}