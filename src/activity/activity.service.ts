import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ResourceService } from "libs/services/resource.service";
import { Model } from "mongoose";
import { ActivityDto } from "tools/dtos/activity.dto";
import { ActivityModel } from "tools/models/activity.model";

@Injectable()
export class ActivityService extends ResourceService<ActivityModel,ActivityDto,ActivityDto>{
    constructor(
        @InjectModel('Activity') private readonly activityMongo: Model<ActivityModel>,
    ) {
        super(activityMongo)
    }
}