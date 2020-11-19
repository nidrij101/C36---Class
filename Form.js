class Form{
    constructor(){
        this.input = createInput("NAME: ");
        this.button = createButton('PLAY!');
        this.greeting = createElement('h3');
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME!")
        title.position(475,100);
        
        this.input.position(475,200);

        this.button.position(525,250);
        
        this.button.mousePressed( ()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("HELLO " + player.name);
            this.greeting.position(475,200);
        })
    }   
}