import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ActivityDto } from "tools/dtos/activity.dto";
import { ActivityModel } from "tools/models/activity.model";
import { ActivityService } from "./activity.service";

@ApiTags('activity')
@Controller('activity')
export class ActivityController {

    constructor(private readonly activityService:ActivityService){
        
    }

    @Post()  // Yeni bir kayıt oluşturmak için kullanılır
    async createActivity(@Body() body: ActivityDto): Promise<ActivityModel>{
        return await this.activityService.create(body);
    }

    @Get()   // API endpoint get ile  istek alıyorsa bu endpoint ile veri okunabilir
    async getAllActivitys(): Promise<ActivityModel[]>{
        return await this.activityService.findAll();
    }

    @Get(':id')
    async getActivity(@Param() params):Promise<ActivityModel>{
        return await this.activityService.findOne(params.id);
    }

    @Put(':id')
    async updateActivity(@Param('id') id:string, @Body() activityUpdateDto: ActivityDto) :Promise<ActivityModel> {
        return await this.activityService.update(id, activityUpdateDto);
    }

    @Delete(':id')
    async removeActivity(@Param('id') id: string) :Promise<ActivityModel>{
        return await this.activityService.delete(id);
    }
     
}
