import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckSizeModule } from './check-size/check-size.module';

@Module({
  imports: [CheckSizeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
