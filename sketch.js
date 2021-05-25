const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var maxdrops = 100
var drops = []
var thunderbolt1,thunderbolt2,thunderbolt3,thunderbolt4;
var man
var manImg1,manImg2,manImg3,manImg4,manImg5,manImg6,manImg7,manImg8;
var thunderFrameCount


function preload(){
  thunderbolt1 = loadImage("images/thunderbolt/1.png")
  thunderbolt2 = loadImage("images/thunderbolt/2.png")
  thunderbolt3 = loadImage("images/thunderbolt/3.png")
  thunderbolt4 = loadImage("images/thunderbolt/4.png")
  manImg1 = loadImage("images/Walking Frame/walking_1.png")
}

function setup(){
   createCanvas(400,800)
   engine = Engine.create()
   world = engine.world

for(var i= 0;i<maxdrops;i++){
 drops.push(new drop(random(0,400),random(0,400)));
}

  man = createSprite(200,450)
  man.addImage(manImg1) 
  man.scale = 0.5

}

function draw(){
    background(0);
Engine.update(engine);
    for(var i=0;i<maxdrops;i++){
        drops[i].display();
        drops[i].updateY();
    }

    var rand = Math.round(random(1,4))
    if(frameCount%80 === 0){
        thunderFrameCount= frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
            case 1:thunder.addImage(thunderbolt1)
            break;
            case 2:thunder.addImage(thunderbolt2)
            break;
            case 3:thunder.addImage(thunderbolt3)
            break;
            case 4:thunder.addImage(thunderbolt4)
            break;
            default : break;
        }
    thunder.scale = random(0.3,0.6)  
    }
    if(thunderFrameCount+10 === frameCount){
        thunder.destroy();
        }
    drawSprites();
}   

