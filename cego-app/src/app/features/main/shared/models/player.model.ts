export interface ReadPlayerResponse {
    id: number;
    username: string;
}

export class Player {

    public id: number;
    public username: string;

    private rawPlayer: ReadPlayerResponse;

    public constructor(jsonPlayer: ReadPlayerResponse) {
        this.id = jsonPlayer.id;
        this.username = jsonPlayer.username;
    }

}
