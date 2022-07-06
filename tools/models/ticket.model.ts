import mongoose from "mongoose";
import { ActivityModel } from "./activity.model";
import { AuditModel } from "./audit.model";
import { InventoryModel } from "./inventory.model";
import { TicketTypeModel } from "./ticket-type.model";
import { UserModel } from "./user.model";

export class TicketsModel{
    id: string;
    name: string;
    description: string;
    type: TicketTypeModel;
    responsible: UserModel;
    audit: AuditModel;
    activities: ActivityModel[];
    inventories: InventoryModel[];
}

export const TicketSchema = new mongoose.Schema({
    name: String,
    description: String,
    audit: Object,
    type: Object,
    responsible: Object,
    activities: Array,
    inventories: Array,
})