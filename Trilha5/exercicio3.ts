export abstract class FavoriteManager {
    protected items: string[] = [];

    protected normalize(item: string): string {
        return item.trim();
    }

    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

export class MoviesFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        const name = this.normalize(item);
        if (!name) return;
        const exists = this.items.some(i => i.toLowerCase() === name.toLowerCase());
        if (exists) return;
        this.items.push(name);
    }

    getFavorites(): string[] {
        return [...this.items].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    }
}

export class BooksFavoriteManager extends FavoriteManager {
    addFavorite(item: string): void {
        const name = this.normalize(item);
        if (!name) return;
        this.items.unshift(name);
    }

    getFavorites(): string[] {
        return [...this.items];
    }
}