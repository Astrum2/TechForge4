type TaskItem = {
    name: string;
    category: string;
};

abstract class TaskManager {
    protected tasks: TaskItem[] = [];

    abstract addTask(task: string): void;
    abstract listTasks(): string[];

    protected normalize(name: string): string {
        return name.trim();
    }

    protected hasTask(name: string, category: string): boolean {
        const n = this.normalize(name).toLowerCase();
        return this.tasks.some(t => t.name.toLowerCase() === n && t.category === category);
    }
}

export class Project extends TaskManager {
    private readonly category: string;

    constructor(public projectName: string) {
        super();
        this.category = `project:${projectName}`;
    }

    addTask(task: string): void {
        const name = this.normalize(task);
        if (!name) return;
        if (this.hasTask(name, this.category)) return;
        this.tasks.push({ name, category: this.category });
    }

    listTasks(): string[] {
        return this.tasks
            .filter(t => t.category === this.category)
            .map(t => t.name);
    }
}

export class DailyTasks extends TaskManager {
    private readonly category = 'daily';

    addTask(task: string): void {
        const name = this.normalize(task);
        if (!name) return;
        if (this.hasTask(name, this.category)) return;
        this.tasks.push({ name, category: this.category });
    }

    listTasks(): string[] {
        return this.tasks
            .filter(t => t.category === this.category)
            .map(t => t.name);
    }
}
