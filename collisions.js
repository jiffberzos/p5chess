function checkCollision(new_x, new_y, old_x, old_y){
  if(Math.abs(new_x-old_x)==1 || Math.abs(new_y-old_y)==1){
    return true;
  }
  if(new_x<old_x){
      let x =new_x+1;
      if(new_y<old_y){
          for(let y = new_y+1; y<old_y; y++){
              for(let j = 0; j<occupied_list.length; j++){
                  if (x == occupied_list[j].x && y == occupied_list[j].y){
                    return false;
                  }
              x++;
              }
          }
      }
      else if(new_y>old_y){
          for(let y = new_y-1; y<old_y; y++){
              for(let j = 0; j<occupied_list.length; j++){
                  if (x == occupied_list[j].x && y == occupied_list[j].y){
                      return false;
                  }
              }
              x++;
          }
      }else{
          let y =new_y;
          for(let x = new_x+1; x<old_x; x++){
              for(let j = 0; j<occupied_list.length; j++){
                  if (x == occupied_list[j].x && y == occupied_list[j].y){
                      return false;
                  }
              }
          }

      }
  }else if(new_x>old_x){
      let x =old_x+1;
      if(new_y<old_y){
          for(let y = old_y-1; y<new_y; y++){
              for(let j = 0; j<occupied_list.length; j++){
                  if (x == occupied_list[j].x && y == occupied_list[j].y){
                      return false;
                  }
              x++;
              }
          }
      }
      else if(new_y>old_y){
          for(let y = old_y+1; y<new_y; y++){
              for(let j = 0; j<occupied_list.length; j++){
                  if (x == occupied_list[j].x && y == occupied_list[j].y){
                      return false;
                  }
              }
              x++;
          }
      }else{
          let y =new_y;
          for(let x = old_x+1; x<new_x; x++){
              for(let j = 0; j<occupied_list.length; j++){
                  if (x == occupied_list[j].x && y == occupied_list[j].y){
                      return false;
                  }
              }
          }

      }

  }else if(new_x==old_x){
      let x =old_x;
      if(new_y<old_y){
          for(let y = new_y+1; y<old_y; y++){
              for(let j = 0; j<occupied_list.length; j++){
                  if (x == occupied_list[j].x && y == occupied_list[j].y){
                      return false;
                  }
              }
          }
      }
      if(new_y>old_y){
          for(let y = old_y+1; y<new_y; y++){
              for(let j = 0; j<occupied_list.length; j++){
                  if (x == occupied_list[j].x && y == occupied_list[j].y){
                      return false;
                  }
              }
          }
      }
  }
  return true;
}

function checkOccupied(x,y){
  for(let i = 0; i < occupied_list.length; i++){
    if(x == occupied_list[i].x && y == occupied_list[i].y){
      if(pieces[i].color != pieces[dragged_index].color){
        if(pieces[dragged_index] instanceof Pawn == false ){
          pieces[i].x = 100;
          return true;
          }else{
            return false;
        }
      }
      else{
        return false;
      }
    }
  }
  return true;
}

function checkPawnOccupied(x,y){
  for(let i = 0; i < occupied_list.length; i++){
    if(x == occupied_list[i].x && y == occupied_list[i].y){
      if(pieces[i].color != pieces[dragged_index].color){
        pieces[i].x = 100;
        return true;
      }
      else{
        return false;
      }
    }
  }
  return false;
}
