import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { TicketCreateDto } from "tools/dtos/ticket.dto";
import { TicketsModel } from "tools/models/ticket.model";
import { TicketService } from "./ticket.service";

@ApiTags('ticket')
@Controller('ticket')
export class TicketController{
    constructor(private readonly ticketService: TicketService){

    }

    @Post()
    async createTicket(@Body() body: TicketCreateDto): Promise<TicketsModel>{
        return await this.ticketService.create(body);
    }

    @Get()
    async getAllTickets(): Promise<TicketsModel[]>{
        return await this.ticketService.findAll();
    }

    @Get(':id')
    async getTicket(@Param() params):Promise<TicketsModel>{
        return await this.ticketService.findOne(params.id);
    }

    @Put(':id')
    async updateTicket(@Param('id') id:string, @Body() ticketUpdateDto: TicketCreateDto): Promise<TicketsModel>{
        return await this.ticketService.update(id, ticketUpdateDto);
    }

    @Delete(':id')
    async removeTicket(@Param('id') id: string) :Promise<TicketsModel>{
        return await this.ticketService.delete(id);
    }
}