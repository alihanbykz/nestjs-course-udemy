import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ResourceService } from "libs/services/resource.service";
import { Model } from "mongoose";
import { RoleDto } from "tools/dtos/role.dto";
import { RoleModel } from "tools/models/role.model";

@Injectable()
export class RoleService extends ResourceService<RoleModel,RoleDto,RoleDto>{
    constructor(
        @InjectModel('Role') private readonly roleMongo: Model<RoleModel>,
    ){
        super(roleMongo)
    }
}