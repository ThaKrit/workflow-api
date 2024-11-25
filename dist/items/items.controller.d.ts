import { ItemsService } from './items.service';
import { Item } from './entities/item.entity';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    create(itemData: Partial<Item>): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: number): Promise<Item>;
    update(id: number, itemData: Partial<Item>): Promise<Item>;
    partialUpdate(id: number, itemData: Partial<Item>): Promise<Item>;
    remove(id: number): Promise<void>;
}
