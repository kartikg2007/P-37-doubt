class Quiz{
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("h2")
    }
    hideElements(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }



display(){

    var title = createElement('h1')
    title.html("Car Racing Game")
    title.position(130, 0)
     
    
    this.input.position(130, 160)
    this.button.position(250, 200)
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.updateCount(playerCount);
        player.update();

        this.greeting.html("Hello "+name)
        this.greeting.position(130, 160);

    }
    )


    
}
}