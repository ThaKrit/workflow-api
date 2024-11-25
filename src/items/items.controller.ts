import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './entities/item.entity'; 

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  async create(@Body() itemData: Partial<Item>) {
    return this.itemsService.create(itemData);
  }

  @Get()
  async findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.itemsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() itemData: Partial<Item>) {
    return this.itemsService.update(id, itemData);
  }

  @Patch(':id')
  async partialUpdate(@Param('id') id: number, @Body() itemData: Partial<Item>) {
    return this.itemsService.update(id, itemData); 
  }

  @Delete(':id') 
  async remove(@Param('id') id: number) {
    return this.itemsService.remove(id);
  }
}
