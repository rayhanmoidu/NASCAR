var WhiteX = 200;
var ypos = 25;
var xpos;
var counter = 0;
var gamestatus = -1;
var timer = 0;
var score = 0;

var RandomGenerator = function() {
    
    xpos = (Math.random() * 101) + 150;
    ypos = 0;
    
};

var road = function() {
    
    noStroke();
    background(106, 191, 222);
    
    fill(122, 115, 122);
    rect(125, 0, 150, 400); //road
    
    fill(255, 242, 0);
    rect(175, 0, 1, 400); //lines on road
    rect(225, 0, 1, 400);
    
    fill(5, 5, 5);
    rect(115, 0, 10, 400); //road edges
    rect(275, 0, 10, 400);
    
};

var obstacle = function(xpos, ypos) {
    
    fill(255, 0, 255);
    ellipse(xpos, ypos, 30, 30);

};


var white = function(WhiteX) {
    
    fill(255, 255, 255);
    ellipse(WhiteX, 370, 30, 30);

};

var collision = function( xpos, ypos, WhiteX ) {
  var dx = xpos - WhiteX;
  var dy = ypos - 370;
  var distance = Math.sqrt(dx * dx + dy * dy);

  return distance;
};

RandomGenerator();

var draw = function() {
    
    if(gamestatus===-1) {
        
        road();
        white(WhiteX);
        
        fill(255, 234, 0);
        rect(55, 136, 290, 90);
        
        fill(214, 47, 181);
        textSize(60);
        text("NASCAR", 75, 202);
        
        fill(214, 47, 181);
        rect(140, 233, 120, 37);
        
        fill(255, 234, 0);
        textSize(20);
        text("START", 169, 259);
        
        if(mouseIsPressed && mouseX>140 && mouseX<260 && mouseY>233 && mouseY<270){
            gamestatus = 1;
            
        }
        
    }
    
    if(gamestatus===1) {
    
        road();
        white(WhiteX);
        
        fill(255, 234, 0);
        rect(135, 320, 130, 27);
        
        textSize(12);
        fill(138, 45, 121);
        text("PRESS ANY KEY", 153, 337);
        
        if(keyIsPressed) {
            
            gamestatus = 2;
            
        }
    
    }
    
    if(gamestatus===2) {
        
        road();
        white(WhiteX);
        obstacle(xpos, ypos);
        
        if(score<=20) {
        
        if(keyIsPressed && keyCode===LEFT) {WhiteX-=2;}
    if(keyIsPressed && keyCode===RIGHT) {WhiteX+=2;}
    
        }
        
        else{
            
            if(keyIsPressed && keyCode===LEFT) {WhiteX-=score/10;}
    if(keyIsPressed && keyCode===RIGHT) {WhiteX+=score/10;}
            
        }
        
        textSize(15);
        text(score, 19, 30);
        
        ypos += (score+25)/8;
        
        if(WhiteX>=260) {WhiteX=260;}
        if(WhiteX<=140) {WhiteX=140;}
        
        if(collision(xpos, ypos, WhiteX)<=30) {gamestatus = 3;}
        if(ypos>=400) {
            
            score+=1;
            gamestatus = 0;
            
            
        }

    }
    
    if(gamestatus===0) {
        
        RandomGenerator();
        gamestatus = 2;
        
    }
    
    if(gamestatus===3) {
        
        var color = (Math.random() * 255) + 1;
        
        background(0, 0, 0);
        fill(color, color, color);
        textSize(50);
        text("GAME OVER",49, 187);
        fill(163, 163, 163);
        textSize(21);
        text("SCORE: ", 154, 218);
        text(score, 239, 218);
        fill(132, 0, 255);
        textSize(16);
        text("HIGHSCORE: 71 (JAKE)", 116, 250);
        
        
    }
    
     
};


