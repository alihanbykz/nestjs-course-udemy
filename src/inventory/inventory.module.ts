import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { InventorySchema } from "tools/models/inventory.model";
import { InventoryController } from "./inventory.controller";
import { InventoryService } from "./inventory.service";

@Module({
    imports: [MongooseModule.forFeature([{name:'Inventory', schema:InventorySchema}])],
    controllers: [InventoryController],
    providers: [InventoryService],
})
export class InventoryModule{}