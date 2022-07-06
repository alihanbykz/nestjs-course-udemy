import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ResourceService } from "libs/services/resource.service";
import { Model } from "mongoose";
import { TicketTypeDto } from "tools/dtos/ticket-type.dto";
import { TicketTypeModel } from "tools/models/ticket-type.model";

@Injectable()
export class TicketTypeService extends ResourceService<TicketTypeModel,TicketTypeDto,TicketTypeDto>{
    constructor(
        @InjectModel('TicketType') private readonly ticketTypeMongo: Model<TicketTypeModel>,
    ){
        super(ticketTypeMongo)
    }
}