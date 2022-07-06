import mongoose from "mongoose";
import { AuditModel } from "./audit.model";

export class RoleModel{
    _id: string;
    name: string;
    audit: AuditModel;
}

export const RoleSchema = new mongoose.Schema({
    name: String,
    audit: Object,
});