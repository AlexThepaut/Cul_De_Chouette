export class Joueur {
    constructor(
        public id: number,
        public nom: string,
        public points: number = 0,
        public boucliette: boolean = true,
        public grelottine: boolean = false,
        public civet: number = 0
    ) { }
}