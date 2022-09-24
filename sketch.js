const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas;
var database, gameState;
var form, player, playerCount;
var allPlayers, robot1, robot2, robot3, robot4, robot5, robot6, robot7, robot8, robot9, robot10, robot11, robot12, robot13, robot14, robot15, robot16, robot17, robot18;
var middleMapImg;
var robots = [];
var backgroundImage
var test

function preload() {
middleMapImg = loadImage("./assets/MiddleMap.png");
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    database = firebase.database();
    game = new Game();
    game.start();
    var map_options={
      isStatic : true,
    }
    middleMap = Bodies.rectangle(400,400,0,0, map_options);
    World.add(world, middleMap);
    
  
  }
  
function draw() {
 background(backgroundImage);
 Engine.update(engine); 
 drawSprites();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
