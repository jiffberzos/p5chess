let pieces = [];
let dragging = false;
let dragged;
let occupied_list = [];

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
    if(dragging){
        dragged.x = mouseX + offsetX;
        dragged.y = mouseY + offsetY;
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
        pieces[i] = new Pawn(i,1,whitePawnImg);
    }
    for(let i = 16; i<24; i++){
        pieces[i] = new Pawn(i-16,6,blackPawnImg);
    }

    pieces[8] = new Rook(0,0,whiteRookImg);
    pieces[9] = new Rook(7,0,whiteRookImg);
    pieces[24] = new Rook(0,7, blackRookImg);
    pieces[25] = new Rook(7,7,blackRookImg);


    pieces[10] = new Knight(1,0,whiteKnightImg);
    pieces[11] = new Knight(6,0,whiteKnightImg);
    pieces[26] = new Knight(1,7,blackKnightImg);
    pieces[27] = new Knight(6,7,blackKnightImg);


    pieces[12] = new Bishop(2,0,whiteBishopImg);
    pieces[13] = new Bishop(5,0,whiteBishopImg);
    pieces[28] = new Bishop(2,7,blackBishopImg);
    pieces[29] = new Bishop(5,7,blackBishopImg);

    pieces[14] = new Queen(3,0,whiteQueenImg);
    pieces[15] = new King(4,0,whiteKingImg);
    pieces[30] = new Queen(4,7,blackQueenImg);
    pieces[31] = new King(3,7,blackKingImg);

    }


function mousePressed() {
    // Did I click on the rectangle?
    for (let i = 0; i < pieces.length; i ++){
        if (mouseX > pieces[i].x*width/8 && mouseX < pieces[i].x*width/8 + width/8 &&
            mouseY > pieces[i].y*height/8 && mouseY < pieces[i].y*height/8 + height/8) {
            dragging = true;
            dragged_index = i;
            dragged = new Piece(pieces[i].x, pieces[i].y, pieces[i].img);
            // If so, keep track of relative location of click to corner of rectangle
            offsetX = dragged.x*width/8-mouseX;
            offsetY = dragged.y*height/8-mouseY;
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
    }
    dragging = false;

}

function checkCollision(new_x, new_y, old_x, old_y){
    if(new_x<old_x){
        let x =new_x-1;
        if(new_y<old_y){
            for(let y = new_y+1; y<old_y; y++){
                for(let j = 0; j<occupied.length; j++){
                    if (createVector(x, y) == occupied[j]){
                        return false;
                    }
                x--;
                }
            }
        }
        if(new_y>old_y){
            for(let y = old_y+1; y<new_y; y++){
                for(let j = 0; j<occupied.length; j++){
                    if (createVector(x, y) == occupied[j]){
                        return false;
                    }
                }
                x--;
            }
        }else{
            let x =new_x;
            for(let y = old_y+1; y<new_y; y++){
                for(let j = 0; j<occupied.length; j++){
                    if (createVector(x, y) == occupied[j]){
                        return false;
                    }
                }
            }

        }
    }
    if(new_x>old_x){
        let x =old_x+1;
        if(new_y<old_y){
            for(let y = new_y+1; y<old_y; y++){
                for(let j = 0; j<occupied.length; j++){
                    if (createVector(x, y) == occupied[j]){
                        return false;
                    }
                }
                x++

            }
        }
        if(new_y>old_y){
            for(let y = old_y+1; y<new_y; y++){
                for(let j = 0; j<occupied.length; j++){
                    if (createVector(x, y) == occupied[j]){
                        return false;
                    }
                }
                x++;
            }
        }else{
            let x =old_x;
            for(let y = old_y+1; y<new_y; y++){
                for(let j = 0; j<occupied.length; j++){
                    if (createVector(x, y) == occupied[j]){
                        return false;
                    }
                }
            }

        }
    
    }else{
        let x =old_x;
        for(let y = old_y+1; y<new_y; y++){
            for(let j = 0; j<occupied.length; j++){
                if (createVector(x, y) == occupied[j]){
                    return false;
                }
            }
        }

    }
    return true;
}