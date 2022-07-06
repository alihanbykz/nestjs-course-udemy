import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { AuthGuard } from 'libs/guards/auth.guard';
import { LibsModule } from 'libs/libs.module';
import { TokenMiddleware } from 'libs/middlewares/token.middleware';
import environment from 'tools/environment/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupModule } from './group/group.module';
import { InventoryTypeModule } from './inventory/inventory-type/inventory-type.module';
import { InventoryModule } from './inventory/inventory.module';
import { LoginModule } from './login/login.module';
import { ProductTypeModule } from './product/product-type/product-type.module';
import { ProductModule } from './product/product.module';
import { RoleModule } from './role/role.module';
import { TicketTypeModule } from './ticket/ticket-type/ticket-type.module';
import { TicketModule } from './ticket/ticket.module';
import { TotalModule } from './total/total.module';
import { UploadModule } from './upload/upload.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule,
    TicketModule,
    TicketTypeModule,
    RoleModule,
    ProductModule,
    ProductTypeModule,
    InventoryModule,
    InventoryTypeModule,
    GroupModule,
    LoginModule,
    TotalModule,
    LibsModule,
    UploadModule,
    MulterModule.register({
      dest: './uploads',
    }),
    MongooseModule.forRoot(environment.mongoUrl)],
  controllers: [AppController],
  providers: [AppService,
      {
        provide: APP_GUARD,
        useClass: AuthGuard,
      },
    ]

})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(TokenMiddleware)
    .forRoutes({path: '*', method: RequestMethod.ALL }); // Hangi routelerde ve hangi metodlarda (çalışsın) aktif olacağını belirledik
  }                                                                                  // get post put gibi                
}

