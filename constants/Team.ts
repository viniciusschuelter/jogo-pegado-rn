import { TeamInterface, TeamPlayerInterface } from '../interfaces/team.interface';



export const initialTeamPlayer: TeamPlayerInterface = {
    name: '',
    rating: 50,
    confirmed: true,
    goalkeeper: false
}

export const initialTeam: TeamInterface = {
    name: '',
    players: [initialTeamPlayer]
}
