function Pawn(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    if(this.color == "white"){
      this.img = whitePawnImg;
    }else{
      this.img = blackPawnImg;
    }
    if(this.color == "white"){
      this.direction = -1;
    }else{
      this.direction = 1;
    }

    this.allowedMove = function(new_x, new_y){
        if (checkCollision(new_x, new_y, this.x, this.y)){
            if(new_y - this.y == this.direction && new_x == this.x ||
              this.color == "white" && this.y == 6 && new_y - this.y == 2*this.direction && new_x == this.x ||
              this.color == "black" && this.y == 1 && new_y - this.y == 2*this.direction && new_x == this.x){
              if(checkOccupied(new_x,new_y)){
                return true;
              }
            }
        }if(new_y - this.y == this.direction && Math.abs(new_x-this.x)){
          if(checkPawnOccupied(new_x,new_y)){
            return true;
          }
        }
        return false;

    }
}
function Rook(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    if(this.color == "white"){
      this.img = whiteRookImg;
    }else{
      this.img = blackRookImg;
    }

    this.allowedMove = function(new_x, new_y){
        if (checkCollision(new_x, new_y, this.x, this.y)){
            if(new_x - this.x == 0 || new_y - this.y == 0){
              if(checkOccupied(new_x,new_y)){
                return true;
              }
            }
        }
        return false;

    }
}
function Knight(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    if(this.color == "white"){
      this.img = whiteKnightImg;
    }else{
      this.img = blackKnightImg;
    }

    this.allowedMove = function(new_x, new_y){
        if((Math.abs(new_x - this.x) == 2 && Math.abs(new_y - this.y) == 1) ||
        (Math.abs(new_x - this.x) == 1 && Math.abs(new_y - this.y) == 2)){
          if(checkOccupied(new_x,new_y)){
            return true;
          }
        }
        return false;

    }
}

function Bishop(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    if(this.color == "white"){
      this.img = whiteBishopImg;
    }else{
      this.img = blackBishopImg;
    }

    this.allowedMove = function(new_x, new_y){
        if (checkCollision(new_x, new_y, this.x, this.y)){
            if(Math.abs(new_y - this.y) == Math.abs(new_x - this.x)){
              if(checkOccupied(new_x,new_y)){
                return true;
              }
            }
        }
        return false;

    }
}

function Queen(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    if(this.color == "white"){
      this.img = whiteQueenImg;
    }else{
      this.img = blackQueenImg;
    }

    this.allowedMove = function(new_x, new_y){
        if (checkCollision(new_x, new_y, this.x, this.y)){
            if((Math.abs(new_y - this.y) == Math.abs(new_x - this.x)) ||
            (new_x - this.x == 0 || new_y - this.y == 0)){
              if(checkOccupied(new_x,new_y)){
                return true;
              }
            }
        }
        return false;

    }
}

function King(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    if(this.color == "white"){
      this.img = whiteKingImg;
    }else{
      this.img = blackKingImg;
    }

    this.allowedMove = function(new_x, new_y){
        if(Math.abs(new_y - this.y) <= 1 && Math.abs(new_x - this.x) <= 1){
          if(checkOccupied(new_x,new_y)){
            return true;
          }
        }
        return false;

    }
}

function Piece(x, y, img){
    this.x = x;
    this.y = y;
    this.img = img;
}
