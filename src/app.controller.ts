import { Controller, Get, Param } from '@nestjs/common';
import { ItemsService } from '../src/items/items.service';
import { Item } from '../src/items/entities/item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get(':id')
  async getItem(@Param('id') id: string): Promise<Item> {
    return await this.itemsService.findOne(+id); // แปลง id เป็นตัวเลข
  }
}
