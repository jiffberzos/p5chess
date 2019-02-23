function Pawn(x, y, img){
    this.x = x;
    this.y = y;
    this.img = img;
    if(img == blackPawnImg){
        this.color = -1
    }
    if(img == whitePawnImg){
        this.color = 1
    }

    this.allowedMove = function(new_x, new_y){
        if (checkCollision(new_x, new_y, this.x, this.y)){
            if(new_y - this.y == this.color && new_x == this.x){
                return true;
            }
        }
        return false;

    }
}
function Rook(x, y, img){
    this.x = x;
    this.y = y;
    this.img = img;

    this.allowedMove = function(new_x, new_y){
        if (checkCollision(new_x, new_y, this.x, this.y)){
            if(new_x - this.x == 0 || new_y - this.y == 0){
                return true;
            }
        }
        return false;

    }
}
function Knight(x, y, img){
    this.x = x;
    this.y = y;
    this.img = img;

    this.allowedMove = function(new_x, new_y){
        if((Math.abs(new_x - this.x) == 2 && Math.abs(new_y - this.y) == 1) || 
        (Math.abs(new_x - this.x) == 1 && Math.abs(new_y - this.y) == 2)){
            return true;
        }
        return false;

    }
}

function Bishop(x, y, img){
    this.x = x;
    this.y = y;
    this.img = img;

    this.allowedMove = function(new_x, new_y){
        if (checkCollision(new_x, new_y, this.x, this.y)){
            if(Math.abs(new_y - this.y) == Math.abs(new_x - this.x)){
                return true;
            }
        }
        return false;

    }
}

function Queen(x, y, img){
    this.x = x;
    this.y = y;
    this.img = img;

    this.allowedMove = function(new_x, new_y){
        if (checkCollision(new_x, new_y, this.x, this.y)){
            if((Math.abs(new_y - this.y) == Math.abs(new_x - this.x)) ||
            (new_x - this.x == 0 || new_y - this.y == 0)){
                return true;
            }
        }   
        return false;

    }
}

function King(x, y, img){
    this.x = x;
    this.y = y;
    this.img = img;

    this.allowedMove = function(new_x, new_y){
        if(Math.abs(new_y - this.y) <= 1 && Math.abs(new_x - this.x) <= 1){
            return true;
        }
        return false;

    }
}

function Piece(x, y, img){
    this.x = x;
    this.y = y;
    this.img = img;
}