class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/TitleImage.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(width/2 - 180, 20);
    this.input.position(width/2 - 105, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.titleImg.hide();
  }

  handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello! Welcome to Robot WAR. 
      </br>${this.input.value()}
      </br>Press Space to Move On
      `
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.updateCount(playerCount);
    });
    
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    if(keyDown("SPACE")){
      console.log("hide");
      form.hide();
    }
  }
}
