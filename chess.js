let pieces = [];
let dragging = false;
let dragged;
let occupied_list = [];
var turn = 1;

function preload(){
    blackPawnImg = loadImage("media/blackPawn.png");
    blackBishopImg = loadImage("media/blackBishop.png");
    blackRookImg = loadImage("media/blackRook.png");
    blackKnightImg = loadImage("media/blackKnight.png");
    blackKingImg = loadImage("media/blackKing.png");
    blackQueenImg = loadImage("media/blackQueen.png");
    whitePawnImg = loadImage("media/whitePawn.png");
    whiteKingImg = loadImage("media/whiteKing.png");
    whiteQueenImg = loadImage("media/whiteQueen.png");
    whiteBishopImg = loadImage("media/whiteBishop.png");
    whiteKnightImg = loadImage("media/whiteKnight.png");
    whiteRookImg = loadImage("media/whiteRook.png");
}

function setup() {
    createCanvas(600, 600);
    piecesSetup();
}

function draw() {
    occupied();
    background(255);
    squares();
    show();

}

function show(){
  if(dragging){
      dragged.x = constrain(mouseX + offsetX, 0, 7*width/8);
      dragged.y = constrain(mouseY + offsetY, 0, 7*height/8);

      for(let i = 0; i<pieces.length; i++){
          if(dragged_index == i){
          }
          else{
              image(pieces[i].img, pieces[i].x*width/8,pieces[i].y*height/8, width/8, height/8);
          }
      }
      image(dragged.img, dragged.x, dragged.y, width/8, height/8)
  }
  else{
      for(let i = 0; i<pieces.length; i++){
          image(pieces[i].img, pieces[i].x*width/8,pieces[i].y*height/8, width/8, height/8);
       }
  }
}

function squares(){
    for(var i = 0; i < 8; i++){
        for(var j = 0; j < 8; j++){
            stroke(125, 135, 150);
            fill(232, 235, 239);
            if(i % 2 == 0 && j % 2 ==0 || i % 2 == 1 && j % 2 ==1){
                fill(125, 135, 150);
            }
        rect(i*width/8, j*height/8, width/8, height/8);
        }
    }
}

function occupied(){
    occupied_list = [];
    for(let i = 0; i < pieces.length; i++){
        occupied_list[i] = createVector(pieces[i].x, pieces[i].y)
    }
}

function piecesSetup(){
    for(let i = 0; i<8; i++){
        pieces[i] = new Pawn(i,1,"white");
    }
    for(let i = 16; i<24; i++){
        pieces[i] = new Pawn(i-16,6,"black");
    }

    pieces[8] = new Rook(0,0,"white");
    pieces[9] = new Rook(7,0,"white");
    pieces[24] = new Rook(0,7, "black");
    pieces[25] = new Rook(7,7,"black");


    pieces[10] = new Knight(1,0,"white");
    pieces[11] = new Knight(6,0,"white");
    pieces[26] = new Knight(1,7,"black");
    pieces[27] = new Knight(6,7,"black");


    pieces[12] = new Bishop(2,0,"white");
    pieces[13] = new Bishop(5,0,"white");
    pieces[28] = new Bishop(2,7,"black");
    pieces[29] = new Bishop(5,7,"black");

    pieces[14] = new Queen(3,0,"white");
    pieces[15] = new King(4,0,"white");
    pieces[30] = new Queen(4,7,"black");
    pieces[31] = new King(3,7,"black");

    }

function mousePressed() {
    // Did I click on the rectangle?
    for (let i = 0; i < pieces.length; i ++){
        if (mouseX > pieces[i].x*width/8 && mouseX < pieces[i].x*width/8 + width/8 &&
            mouseY > pieces[i].y*height/8 && mouseY < pieces[i].y*height/8 + height/8) {
            if (turn % 2 == 0 && pieces[i].color == "black" || turn % 2 == 1 && pieces[i].color == "white"){
              dragging = true;
              dragged_index = i;
              dragged = new Piece(pieces[i].x, pieces[i].y, pieces[i].img);
              // If so, keep track of relative location of click to corner of rectangle
              offsetX = dragged.x*width/8-mouseX;
              offsetY = dragged.y*height/8-mouseY;
              }
            }

    }
}

function mouseReleased() {
    // Quit dragging
    new_x = floor((dragged.x + width/16)*8/width);
    new_y = floor((dragged.y + height/16)*8/height);
    if(pieces[dragged_index].allowedMove(new_x, new_y)){
        pieces[dragged_index].x = new_x;
        pieces[dragged_index].y = new_y;
        turn += 1;
    }
    dragging = false;

}
