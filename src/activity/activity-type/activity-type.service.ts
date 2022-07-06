import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ResourceService } from "libs/services/resource.service";
import { Model } from "mongoose";
import { ActivityTypeDto } from "tools/dtos/activity-type.dto";
import { ActivityTypeModel } from "tools/models/activity-type.model";

@Injectable()
export class ActivityTypeService extends ResourceService<ActivityTypeModel,ActivityTypeDto,ActivityTypeDto>{
    constructor(@InjectModel('ActivityType') private readonly activityTypeMongo: Model<ActivityTypeModel>,
    ) {
        super(activityTypeMongo)
    }
}