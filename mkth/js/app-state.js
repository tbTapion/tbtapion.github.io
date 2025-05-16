const STORAGE_KEY = "MKTH:TOURNAMENTS"

class AppState {
    tournament = undefined;
    oldTournament = undefined;
    
    constructor() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if(saved) {
            try{
                const parsedSaved = JSON.parse(saved);
                this.tournament = parsedSaved.tournament;
                this.oldTournament = parsedSaved.oldTournament;
            } finally {
                console.log("Finished trying to parse.")
            }
        }
    }
}

window.appState = new AppState();