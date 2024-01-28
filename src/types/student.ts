export interface IEvent {
    id?: number;
    type: any;
    name: string;
    status: any;
    result: any;
    points: number;
}

export interface IRequest {
    id?: number;
    date: string;
    type: string;
    name: string;
    status: string;
    result: string;
    status_expertise: string;
}
