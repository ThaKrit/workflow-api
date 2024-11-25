import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
export declare class ItemsService {
    private readonly itemRepository;
    constructor(itemRepository: Repository<Item>);
    create(itemData: Partial<Item>): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: number): Promise<Item>;
    update(id: number, itemData: Partial<Item>): Promise<Item>;
    remove(id: number): Promise<void>;
}
