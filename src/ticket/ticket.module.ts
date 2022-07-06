import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketService } from './ticket.service';
import { TicketSchema } from 'tools/models/ticket.model';
import { TicketController } from './ticket.controller';

@Module({
  imports: [MongooseModule.forFeature([{name:'Ticket', schema:TicketSchema}])],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
