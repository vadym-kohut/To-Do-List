export interface Task {
    id: number;
    title: string;
    description: string;
    tags: string[];
    priority?: number;
}
