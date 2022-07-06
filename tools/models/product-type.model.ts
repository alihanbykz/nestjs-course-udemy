import mongoose from "mongoose";
import { AuditModel } from "./audit.model";

export class ProductTypeModel{
    id: string;
    name: string;
    audit: AuditModel;
}

export const ProductTypeSchema = new mongoose.Schema({
    name: String,
    audit: Object,
});