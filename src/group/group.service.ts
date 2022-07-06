import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ResourceService } from "libs/services/resource.service";
import { Model } from "mongoose";
import { GroupCreateDto } from "tools/dtos/group.dto";
import { GroupModel } from "tools/models/group.model";

@Injectable()
export class GroupService extends ResourceService<GroupModel,GroupCreateDto,GroupCreateDto>{
    constructor(
        @InjectModel('Group') private readonly groupMongo: Model<GroupModel>,
    ) {
        super(groupMongo)
    }
}