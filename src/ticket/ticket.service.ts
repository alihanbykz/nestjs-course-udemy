import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createSecureServer } from 'http2';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { TicketCreateDto } from 'tools/dtos/ticket.dto';
import { AuditModel } from 'tools/models/audit.model';
import { TicketsModel } from 'tools/models/ticket.model';



@Injectable()
export class TicketService extends ResourceService<TicketsModel,TicketCreateDto,TicketCreateDto>{
    constructor(
        @InjectModel('Ticket') private readonly ticketMongo: Model<TicketsModel>,
    ) {
        super(ticketMongo)
    }
}
