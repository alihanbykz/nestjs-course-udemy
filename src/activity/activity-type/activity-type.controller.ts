import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ActivityTypeDto } from "tools/dtos/activity-type.dto";
import { ActivityTypeModel } from "tools/models/activity-type.model";
import { ActivityTypeService } from "./activity-type.service";

@ApiTags('activity-type')
@Controller('activity-type')
export class ActivityTypeController {

    constructor(private readonly activityTypeService:ActivityTypeService){
        
    }

    @Post()  // Yeni bir kayıt oluşturmak için kullanılır
    async createActivityType(@Body() body: ActivityTypeDto): Promise<ActivityTypeModel>{
        return await this.activityTypeService.create(body);
    }

    @Get()   // API endpoint get ile  istek alıyorsa bu endpoint ile veri okunabilir
    async getAllActivityType(): Promise<ActivityTypeModel[]>{
        return await this.activityTypeService.findAll();
    }

    @Get(':id')
    async getActivityType(@Param() params):Promise<ActivityTypeModel>{
        return await this.activityTypeService.findOne(params.id);
    }

    @Put(':id')
    async updateActivityType(@Param('id') id:string, @Body() activityTypeUpdateDto: ActivityTypeDto) :Promise<ActivityTypeModel> {
        return await this.activityTypeService.update(id, activityTypeUpdateDto);
    }

    @Delete(':id')
    async removeActivityType(@Param('id') id: string) :Promise<ActivityTypeModel>{
        return await this.activityTypeService.delete(id);
    }
     
}
