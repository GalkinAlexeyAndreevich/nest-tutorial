import { Module } from "@nestjs/common";

import { databaseProviders } from "./database/database.providers";
import { UsersModule } from './users/users.module';
import { Sequelize } from "sequelize";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from "./database/database.module";


@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
        UsersModule
    ],
})
export class AppModule{

}