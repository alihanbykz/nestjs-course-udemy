import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActivityTypeSchema } from 'tools/models/activity-type.model';
import { ActivitySchema } from 'tools/models/activity.model';
import { GroupSchema } from 'tools/models/group.model';
import { InventoryTypeSchema } from 'tools/models/inventory-type.model';
import { InventorySchema } from 'tools/models/inventory.model';
import { ProductTypeSchema } from 'tools/models/product-type.model';
import { ProductSchema } from 'tools/models/product.model';
import { RoleSchema } from 'tools/models/role.model';
import { TicketTypeSchema } from 'tools/models/ticket-type.model';
import { TicketSchema } from 'tools/models/ticket.model';
import { UserSchema } from 'tools/models/user.model';
import { TotalController } from './total.controller';
import { TotalService } from './total.service';

@Module({
  imports: [MongooseModule.forFeature([
    {name:'User', schema:UserSchema},
    {name:'Role', schema:RoleSchema},
    {name:'Ticket', schema:TicketSchema},
    {name:'TicketType', schema:TicketTypeSchema},
    {name:'Product', schema:ProductSchema},
    {name:'ProductType', schema:ProductTypeSchema},
    {name:'Inventory', schema:InventorySchema},
    {name:'InventoryType', schema:InventoryTypeSchema},
    {name:'Group', schema:GroupSchema},
    {name:'Activity', schema:ActivitySchema},
    {name:'ActivityType', schema:ActivityTypeSchema},

])],
  controllers: [TotalController],
  providers: [TotalService],
})
export class TotalModule {}
