import { ICourse } from './interfaces/icourse';

export class Course implements ICourse {
    id: number;    
    title: string;
    creationDate: Date;
    duration: number;
    description: string;

    constructor(id: number, title: string, creationDate: Date, duration: number, description: string) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.duration = duration;
        this.description = description;
    }
}
