import mongoose from "mongoose";
import { AuditModel } from "./audit.model";

export class InventoryTypeModel{
    id: string;
    name: string;
    audit: AuditModel;
}

export const InventoryTypeSchema = new mongoose.Schema({
    name: String,
    audit: Object,
});