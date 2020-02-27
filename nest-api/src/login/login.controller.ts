import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { CreateTokenDTO } from './login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService) { }

    @Post()
    public async createToken(@Body() createTokenRequest: CreateTokenDTO) {
        return await this.loginService.createToken(createTokenRequest)
            .catch(() => { throw new BadRequestException() });
    }
}
