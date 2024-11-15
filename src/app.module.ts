import { Module } from '@nestjs/common';
import { HelloWorldController } from './hello-world/hello-world.controller';
import { HelloWorldModule } from './hello-world/hello-world.module';



@Module({
  imports: [HelloWorldModule],
  controllers: [HelloWorldController],
  providers: [],
})
export class AppModule {}
