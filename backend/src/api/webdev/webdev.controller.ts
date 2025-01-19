import { Controller, Body, All } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { WebdevService } from './webdev.service';

import { MessageDto } from '../../agents/dto/message.dto';
import { PublishDto } from '../../agents/dto/publish.dto';
import { ListDto } from '../../agents/dto/list.dto';
import { DetailDto } from '../../agents/dto/detail.dto';
import { ResultDto } from '../../agents/dto/result.dto';

@Controller('webdev')
export class WebdevController {
  constructor(private readonly webdevService: WebdevService) {}

  @All('message')
  async message(@Body() messageDto: MessageDto) {
    const result = await this.webdevService.message(messageDto);
    const resultDto = new ResultDto();

    resultDto.success = result.success;
    if (result.success) {
      resultDto.data = result.data;
      resultDto.data.threadId = result.threadId;
      resultDto.data.talks = result.talks;
    } else {
      resultDto.error = result.error;
    }

    return resultDto;
  }

  @All('publish')
  async publish(@Body() publishDto: PublishDto) {
    const result = await this.webdevService.publish(publishDto);
    const resultDto = plainToInstance(ResultDto, result);
    return resultDto;
  }

  @All('list')
  async list(@Body() listDto: ListDto) {
    const result = await this.webdevService.list(listDto);
    const resultDto = plainToInstance(ResultDto, result);
    return resultDto;
  }

  @All('detail')
  async detail(@Body() detailDto: DetailDto) {
    const result = await this.webdevService.detail(detailDto);
    const resultDto = plainToInstance(ResultDto, result);
    return resultDto;
  }

  @All('suggest')
  async suggest() {
    const result = await this.webdevService.suggest();
    const resultDto = plainToInstance(ResultDto, result);
    return resultDto;
  }

  @All('intro')
  async intro() {
    let name: string,
      title: string,
      avatar: string,
      description: string,
      skills: string,
      perks: string;
    const result = await this.webdevService.count();
    const published = result.success ? result.data : 0;

    return {
      success: true,
      data: { name, title, avatar, description, skills, perks, published },
    };
  }

}
