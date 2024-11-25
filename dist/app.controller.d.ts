import { ItemsService } from '../src/items/items.service';
import { Item } from '../src/items/entities/item.entity';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    getItem(id: string): Promise<Item>;
}
