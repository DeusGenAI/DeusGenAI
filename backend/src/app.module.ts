import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import configuration from './config/configuration';

import { TypeOrmModule } from '@nestjs/typeorm';
import { WebdevModule } from './api/webdev/webdev.module';
import { GamedevModule } from './api/gamedev/gamedev.module';
import { EvmdevModule } from './api/evmdev/evmdev.module';
import { SoldevModule } from './api/soldev/soldev.module';

import { SolAgentService } from './agents/sol-agent/sol-agent.service';
import { EvmAgentService } from './agents/evm-agent/evm-agent.service';
import { WebAgentService } from './agents/web-agent/web-agent.service';
import { GameAgentService } from './agents/game-agent/game-agent.service';
import { OpenAIService } from './agents/openai/openai.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    TypeOrmModule.forRootAsync({
      name: 'mysql',
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return configService.get('datasources.mysql');
      },
      inject: [ConfigService],
    }),

    TypeOrmModule.forRootAsync({
      name: 'mongodb',
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return configService.get('datasources.mongodb');
      },
      inject: [ConfigService],
    }),

    WebdevModule,
    GamedevModule,
    EvmdevModule,
    SoldevModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    WebAgentService,
    GameAgentService,
    OpenAIService,
    SolAgentService,
    EvmAgentService,
  ],
  exports: [
    WebAgentService,
    GameAgentService,
    OpenAIService,
    SolAgentService,
    EvmAgentService,
  ],
})
export class AppModule {}
