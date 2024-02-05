export interface IEvent {
    id?: number;
    type: string;
    name: string;
    status: string;
    date: string;
    result: string;
    award: string;
    isApprove?: boolean;
    points?: number;
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
