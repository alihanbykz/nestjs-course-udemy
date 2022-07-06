import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ResourceService } from "libs/services/resource.service";
import { Model } from "mongoose";
import { InventoryDto } from "tools/dtos/inventory.dto";
import { InventoryModel } from "tools/models/inventory.model";

@Injectable()
export class InventoryService extends ResourceService<InventoryModel,InventoryDto,InventoryDto>{
    constructor(
        @InjectModel('Inventory') private readonly inventoryMongo: Model<InventoryModel>,
    ) {
        super(inventoryMongo)
    }
}