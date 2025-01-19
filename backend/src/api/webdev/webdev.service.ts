import { Injectable, Logger } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { MessageDto } from '../../agents/dto/message.dto';
import { PublishDto } from '../../agents/dto/publish.dto';
import { ListDto } from '../../agents/dto/list.dto';
import { DetailDto } from '../../agents/dto/detail.dto';

import { Webdev } from './entities/webdev.entity';
import { WebdevTemp } from './entities/webdev-temp.entity';

import { WebAgentService } from '../../agents/web-agent/web-agent.service';

@Injectable()
export class WebdevService {
  private readonly logger = new Logger(WebdevService.name);

  constructor(
    @InjectRepository(Webdev, 'mysql')
    private webdevRepository: Repository<Webdev>,

    @InjectRepository(WebdevTemp, 'mongodb')
    private webdevTempRepository: Repository<WebdevTemp>,

    private readonly webAgentService: WebAgentService,
  ) {}

  async message(messageDto: MessageDto) {
    try {
      let { threadId, content } = messageDto;
      let webdevTemp: WebdevTemp;

      if (!threadId) {
        const newThread = await this.webAgentService.newThread();
        if (!newThread.success) {
          throw new Error(newThread.error);
        }

        threadId = newThread.threadId;

        webdevTemp = new WebdevTemp();
        webdevTemp.threadId = threadId;
        webdevTemp.talks = 1;
        webdevTemp.published = false;
      } else {
        webdevTemp = await this.webdevTempRepository.findOneBy({ threadId });
        if (!webdevTemp) {
          throw new Error('Invalid threadId');
        }

        if (webdevTemp.talks >= 10) {
          throw new Error('Max talk number reached');
        }

        if (webdevTemp.createdAt.getTime() < Date.now() - 60 * 60 * 1000) {
          throw new Error('Thread timeout');
        }

        if (webdevTemp.published) {
          throw new Error('Thread already published');
        }

        webdevTemp.talks += 1;
      }

      const newMsg = await this.webAgentService.newMsg(threadId, content);
      if (!newMsg.success) {
        throw new Error(newMsg.error);
      }

      webdevTemp.data = newMsg.data;
      let result = await this.webdevTempRepository.save(webdevTemp);
      if (!result) {
        throw new Error('Save data failed');
      }

      return { success: true, threadId, talks: webdevTemp.talks, data: webdevTemp.data };
    } catch (err) {
      this.logger.error(err);
      return { success: false, error: String(err) };
    }
  }

  async publish(publishDto: PublishDto) {
    try {
      const { threadId } = publishDto;

      const webdevTemp = await this.webdevTempRepository.findOneBy({
        threadId,
      });
      if (!webdevTemp) {
        throw new Error('Invalid threadId');
      }

      if (webdevTemp.published) {
        throw new Error('Thread already published');
      }

      webdevTemp.published = true;
      let result: any = await this.webdevTempRepository.save(webdevTemp);
      if (!result) {
        throw new Error('Update published failed');
      }

      let webdev = new Webdev();
      webdev.data = webdevTemp.data;
      if (webdev.data.talk) {
        delete webdev.data.talk;
      }
      result = await this.webdevRepository.save(webdev);
      if (!result) {
        throw new Error('Save published failed');
      }

      return { success: true, data: webdev.data };
    } catch (err) {
      this.logger.error(err);
      return { success: false, error: String(err) };
    }
  }

  async list(listDto: ListDto) {
    try {
      let { page, limit } = listDto;
      page = page === null || page === undefined ? 1 : page;
      limit = limit === null || limit === undefined ? 10 : limit;

      const [data, total] = await this.webdevRepository.findAndCount({
        order: { createdAt: 'DESC' },
        skip: (page - 1) * limit,
        take: limit,
      });

      return { success: true, data: { result: data, total } };
    } catch (err) {
      this.logger.error(err);
      return { success: false, error: String(err) };
    }
  }

  async detail(detailDto: DetailDto) {
    try {
      let { id } = detailDto;

      const data = await this.webdevRepository.findOneBy({ id });
      if (!data) {
        throw new Error('Invalid ID');
      }

      return { success: true, data };
    } catch (err) {
      this.logger.error(err);
      return { success: false, error: String(err) };
    }
  }

  async suggest() {
    try {
      const newSuggest = await this.webAgentService.newSuggest();
      if (!newSuggest.success) {
        throw new Error(newSuggest.error);
      }

      return { success: true, data: newSuggest.data };
    } catch (err) {
      this.logger.error(err);
      return { success: false, error: String(err) };
    }
  }

  async count() {
    try {
      const data = await this.webdevRepository.count();
      return { success: true, data };
    } catch (err) {
      this.logger.error(err);
      return { success: false, error: String(err) };
    }
  }

}
