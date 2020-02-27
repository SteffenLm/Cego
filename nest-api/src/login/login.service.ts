import { Injectable } from '@nestjs/common';
import { CreateTokenDTO, Token } from './login.dto';
import { User } from 'src/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, genSalt } from 'bcrypt';
import { sign } from 'jsonwebtoken';

@Injectable()
export class LoginService {

    constructor(@InjectRepository(User) private readonly userRepository) { }

    public createToken(createTokenRequest: CreateTokenDTO): Promise<Token> {
        return new Promise(async (resolve, reject) => {
            try {
                const user = new User();
                user.username = createTokenRequest.username;
                const queriedUser = await this.userRepository.findOneOrFail(user, {
                    select: ['id', 'jwtkey', 'password', 'username']
                });
                const isCorrect = await compare(createTokenRequest.password, queriedUser.password);
                if (isCorrect) {
                    const salt = await genSalt(10);
                    sign({ "uid": queriedUser.id }, salt, (err, token) => {
                        if (err) {
                            reject()
                        } else {
                            this.userRepository.update({ username: queriedUser.username }, { jwtkey: salt });
                            resolve({ jwt: token });
                        }
                    });
                } else {
                    reject();
                }
            } catch (error) {
                reject();
            }
        });
    }
}