var bg,bgi,cat, mouse,mouse1,mouse2,cat1,cat2
function preload() {

    bgi = loadImage("images/garden.png");
    mouse1 = loadImage("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    cat1 = loadImage("images/cat1.png");  
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");  
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite(500,400,10,10);
    bg.addImage(bgi);

    cat = createSprite(100,800,20,20);
    cat.addImage(cat1);
    

    mouse = createeSprite(200,800,20,20);
    mouse.addImage(mouse1);

    
}

function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat.velocityX =-5;
        cat.addAnimation("catruning",cat2);
        
        cat.changeAnimation("catruning");
        
        mouse.addAnimation("teasing",mouse2);
      
        mouse.changeAnimation("teasing");
      }
    
  
//CHECK NOW 

}
