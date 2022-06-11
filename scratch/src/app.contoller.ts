import { Controller, Get } from '@nestjs/common'


@Controller('/app')
export class AppController {
    @Get('/helloworld')
    getRootRoute(){
        return 'Hello World!';
    }
}
