import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { ItemsModule } from './items/items.module'; 
import { UsersModule } from './users/users.module'; 
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    DbModule, 
    ItemsModule, 
    UsersModule, 
    AuthModule, 
  ],
})
export class AppModule {}
