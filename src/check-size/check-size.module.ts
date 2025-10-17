import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CheckSizeService } from './check-size.service';
import { CheckSizeController } from './check-size.controller';

@Module({
  imports: [HttpModule],
  controllers: [CheckSizeController],
  providers: [CheckSizeService],
})
export class CheckSizeModule {}
