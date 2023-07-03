import { RRule } from 'rrule';


export interface TeamInterface {
    name: string;
    players: TeamPlayerInterface[];
    matchRrule?: RRule;
}

export interface TeamPlayerInterface {
    name: string;
    rating: number;
    confirmed: boolean;
    goalkeeper: boolean;
}
