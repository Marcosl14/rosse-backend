import { Injectable } from '@nestjs/common';
import { Public } from './auth/skip_auth.decorator';

@Public()
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
