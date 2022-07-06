import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { TicketTypeDto } from "tools/dtos/ticket-type.dto";
import { TicketTypeModel } from "tools/models/ticket-type.model";
import { TicketTypeService } from "./ticket-type.service";

@ApiTags('ticket-type')
@Controller('ticket-type')
export class TicketTypeController {

    constructor(private readonly ticketTypeServise: TicketTypeService){

    }
    @Post()
    async createTicketType(@Body() body: TicketTypeDto):Promise<TicketTypeModel>{
        return await this.ticketTypeServise.create(body);
    }

    @Get()
    async getAllTicketTypes(): Promise<TicketTypeModel[]>{
        return await this.ticketTypeServise.findAll();
    }

    @Get(':id')
    async getTicketTypes(@Param() params): Promise<TicketTypeModel>{
        return await this.ticketTypeServise.findOne(params.id);
    }

    @Put(':id')
    async updateTicketType(@Param('id') id:string, @Body() ticketTypeDto: TicketTypeDto): Promise<TicketTypeModel>{
        return await this.ticketTypeServise.update(id, ticketTypeDto);
    }

    @Delete(':id')
    async deleteTicketType(@Param('id') id:string): Promise<TicketTypeModel>{
        return await this.ticketTypeServise.delete(id);
    }
}