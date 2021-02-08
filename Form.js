class Form{
    constructor(){
        this.title = createElement('h1')
        this.input = createInput('name')
        this.button = createButton('play')
        this.greeting = createElement('h4')
    }

    display(){
        this.title.html('Car Racing Game')
        this.title.position(250, 50)

        this.input.position(250, 150);

        this.button.position(250, 200);

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()

            player.name = this.input.value();

            this.greeting.html('Hello '+ player.name)
            this.greeting.position(250, 250);
            playerCount++;
            player.index = playerCount;
            player.updatePlayerCount(player.index);
            player.updatePlayerInfo();
        })
    }

    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}