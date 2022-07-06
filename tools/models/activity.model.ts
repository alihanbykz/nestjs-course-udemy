import mongoose from "mongoose";
import { ActivityTypeModel } from "./activity-type.model";
import { AuditModel } from "./audit.model";

export class ActivityModel {
    id: string;
    name: string;
    audit: AuditModel;
    type: ActivityTypeModel;
}

export const ActivitySchema = new mongoose.Schema({
    name: String,
    audit: Object,
    type: Object,
});