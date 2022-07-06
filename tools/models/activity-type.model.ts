import mongoose from "mongoose";
import { AuditModel } from "./audit.model";

export class ActivityTypeModel {
    id: string;
    name: string;
    audit: AuditModel;
}

export const ActivityTypeSchema = new mongoose.Schema({
    name: String,
    audit: Object,
});