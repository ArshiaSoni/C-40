class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = 0;
    }

    getPlayerCount(){
        database.ref('playerCount').on ('value', function(data){
            playerCount = data.val()
            console.log(playerCount)
        })
    }

    updatePlayerCount(count){
        database.ref('/').update({playerCount: count})
    }

    updatePlayerInfo(){
        database.ref('players/player'+ this.index).update({name: this.name, 
            distance: this.distance, 
            index: this.index,
            rank: this.rank
        })
    
    }

    static getPlayerInfo(){
        database.ref('players').on('value', function(data){
            allPlayers = data.val();
            console.log(allPlayers);
        })
    }

   static getCarsAtEnd(){
        database.ref('carsAtEnd').on('value', function(data){
            carsAtEnd = data.val();
            this.rank = carsAtEnd;
        })
    }

    updateCarsAtEnd(rank){
        database.ref('/').update({carsAtEnd: rank})
    }
}