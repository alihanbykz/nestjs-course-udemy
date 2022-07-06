import { AuditModel } from "./audit.model";
import { GroupModel } from "./group.model";
import { RoleModel } from "./role.model";
import * as mongoose from 'mongoose';

export class UserModel {
    id : string;
    name: string;
    surname: string;
    image: string;
    email: string;
    birthDay: Date;
    password: string;
    audit: AuditModel;
    roles: RoleModel[];
    groups: GroupModel[];
}

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'User name is required'] },
    surname: { type: String, required: [true, 'User surname is required'] },
    image: { type: String },
    email: String,
    password: { type: String, required: [true, 'User password is required'] },
    birthDay: { type: Date, required: [true, 'User birthDay is required'] },
    audit: { type: Object },
    roles: { type: Array },
    groups: { type: Array },
});
