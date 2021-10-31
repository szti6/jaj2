let font,
  fontsize = 20;
function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('Kolby-Bold.otf');
}
    
let v = [12,45,64,122,377,540];
let f = [451,-45,135,288,2,-67];

function setup() {
  createCanvas(windowWidth, windowHeight);
   textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  let darab=50;


  }


function draw() {
  background(0,0,255);
  noStroke();
    

   for (let i = 0; i < 6; i++) {
    fill(255,60,0)
    ellipse(v[i]+mouseY,f[i]+mouseX,60,50);
     fill(0,0,150)
    text('jaj', v[i]+mouseY,f[i]+mouseX);  

  }  
  
     for (let i = 0; i < 6; i++) {
    fill(255,60,0)
    ellipse(v[i]+mouseY,f[i]+mouseY,60,50);
     fill(0,0,150)
    text('jaj', v[i]+mouseY,f[i]+mouseY);  

  }  
  
     for (let i = 0; i < 6; i++) {
    fill(255,60,0)
    ellipse(v[i]+mouseX,f[i]+mouseY,60,50);
     fill(0,0,150)
    text('jaj', v[i]+mouseX,f[i]+mouseY);  

  }  
  
     for (let i = 0; i < 6; i++) {
    fill(255,60,0)
    ellipse(v[i]+mouseX,f[i]+mouseX,60,50);
     fill(0,0,150)
    text('jaj', v[i]+mouseX,f[i]+mouseX);  

  }  
}
  
  

