import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RoleSchema } from "tools/models/role.model";
import { RoleController } from "./role.controller";
import { RoleService } from "./role.service";

@Module({
    imports: [MongooseModule.forFeature([{name:'Role', schema:RoleSchema}])],
    controllers: [RoleController],
    providers: [RoleService],
})
export class RoleModule{}