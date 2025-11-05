export abstract class VoteSystem {
    protected votes: Record<string, number> = {};

    protected normalize(candidate: string): string {
        return candidate.trim().toLowerCase();
    }

    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

export class Election extends VoteSystem {
    voteFor(candidate: string): void {
        const name = this.normalize(candidate);
        if (!name) return;
        this.votes[name] = (this.votes[name] || 0) + 1;
    }

    getResults(): object {
        return { ...this.votes };
    }
}

export class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        const name = this.normalize(candidate);
        if (!name) return;
        this.votes[name] = (this.votes[name] || 0) + 1;
    }

    getResults(): object {
        return Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .map(([name]) => name);
    }
}