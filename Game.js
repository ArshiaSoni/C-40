class Game{
    constructor(){

    }

    getGameState(){
        database.ref('gameState').on('value', function(data){
            gameState = data.val()
            console.log(gameState); 
            if (gameState==0){
                player = new Player();
                player.getPlayerCount();
                form = new Form();
                form.display();
            }       
        })

        car1 = createSprite (350, 700);
        car2 = createSprite(550, 700);
        car3 = createSprite(750, 700);
        car4 = createSprite(950, 700);

        car1.addImage(car1_img);
        car2.addImage(car2_img);
        car3.addImage(car3_img);
        car4.addImage(car4_img);

        cars=[car1,car2, car3,car4];
    }

    updateGameState(state){
        database.ref('/').update({gameState: state})
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        Player.getCarsAtEnd();

        imageMode (CENTER);
        image (track_img, width/2, height/2, width);

        var index = 0;
        var x= 350;

        var ySpacing = 100
        for(var plr in allPlayers){
            cars[index].x = x;
            cars[index].y = height - allPlayers[plr].distance;
            if(index+1 == player.index){
                camera .position.y = cars[index].y
                fill('red');
                circle(cars[index].x, cars[index].y, 69);
            }
            index++
            x+=200
            // text (allPlayers[plr].name + ":" + allPlayers[plr].distance, 200, ySpacing)
            // ySpacing+= 50;
            
        }

        if(keyWentDown(UP_ARROW)){
            player.distance+=50;
            player.updatePlayerInfo();
        }

        if(player.distance>= 100){
            gameState=2
            player.rank = player.rank + 1;
            player.updateCarsAtEnd(player.rank);
            player.updayePlayerInfo();
        }

    }

    end(){
        textSize (20);
        fill ('white')
        // alert('Game Over');
        alert('Your rank is: '+ player.rank);
        // text('Game Over', width/2, height-player.distance)
    }
}