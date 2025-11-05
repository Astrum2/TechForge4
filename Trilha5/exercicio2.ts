export abstract class Inventory {
    protected items: Record<string, number> = {};

    protected normalize(item: string): string {
        return item.trim().toLowerCase();
    }

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

export class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        if (!item || quantity <= 0) return;
        const key = this.normalize(item);
        this.items[key] = (this.items[key] || 0) + quantity;
    }

    removeItem(item: string): void {
        const key = this.normalize(item);
        delete this.items[key];
    }

    getInventory(): Record<string, number> {
        return { ...this.items };
    }
}

export class StoreInventory extends Inventory {
    private readonly LIMIT = 10;

    addItem(item: string, quantity: number): void {
        if (!item || quantity <= 0) return;
        const key = this.normalize(item);
        const current = this.items[key] || 0;
        const space = Math.max(0, this.LIMIT - current);
        const toAdd = Math.min(quantity, space);
        if (toAdd <= 0) return;
        this.items[key] = current + toAdd;
    }

    removeItem(item: string): void {
        const key = this.normalize(item);
        delete this.items[key];
    }

    getInventory(): Record<string, number> {
        return { ...this.items };
    }
}