import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ServeStaticModule} from "@nestjs/serve-static";
import { join } from 'path';
import { ServerModule } from './server/server.module';
import { MemberModule } from './member/member.module';
import { ProfileModule } from './profile/profile.module';


@Module({
  imports: [
        ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
    }),
        ServerModule,
        MemberModule,
        ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
