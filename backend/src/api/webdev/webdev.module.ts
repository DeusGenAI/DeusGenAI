import { Module } from '@nestjs/common';
import { WebdevService } from './webdev.service';
import { WebdevController } from './webdev.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Webdev } from './entities/webdev.entity';
import { WebdevTemp } from './entities/webdev-temp.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Webdev], 'mysql'),
    TypeOrmModule.forFeature([WebdevTemp], 'mongodb'),
  ],
  controllers: [WebdevController],
  providers: [WebdevService],
})
export class WebdevModule {}
