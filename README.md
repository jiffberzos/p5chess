# p5chess

Chess client using p5 and images from Wikipedia.

Basis for an AI to play chess.

## Todo/Bugs:
* Check/Checkmate - requires a list of all possible moves and if the king can be taken in one of those, check is initiated. Then, for all theoretical moves, it is calculated if the game is still in check. Only these moves are allowed. If no moves are possible, checkmate occurs.
* Castling - simple additional rule.
* En Passant (gonna be tricky) - requires a saved state of the previous move - if it was a double movement by a pawn, will add an additional check to the pawn occupied function
* Pawn Promotion - simple redefining of the Pawn class.
