import mongoose from "mongoose";
import { AuditModel } from "./audit.model";

export class TicketTypeModel{
    id: string;
    name: string;
    audit: AuditModel;
}

export const TicketTypeSchema = new mongoose.Schema({
    name: String,
    audit: Object,
})