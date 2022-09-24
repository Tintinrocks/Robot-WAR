class Game {
    constructor() {}
  
    start() {
      form = new Form();
      form.display();
      player = new Player();
    }

    play(){
      form.hide();
    }
}
  