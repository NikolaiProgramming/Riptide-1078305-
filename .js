// var 'varName' document.getElementsByClassName("'htmlClass'")
var pieces = document.getElementsByClassName("piece");
var selecteds = document.getElementsByClassName("selected");
var squares = document.getElementsByClassName("square");
var takens = document.getElementsByClassName("taken")
var capturedWhites = document.getElementsByClassName("capturedWhite")
var capturedBlacks = document.getElementsByClassName("capturedBlack")
var whites = document.getElementsByClassName("white")
var blacks = document.getElementsByClassName("black")
var indicators = document.getElementsByClassName("indicator")
var blackKings = document.getElementsByClassName("blackKing")
var whiteKings = document.getElementsByClassName("whiteKing")
var highlightAvailables = document.getElementsByClassName("highlightAvailable")

function removeHighlightAvailable () {
  [...highlightAvailables].forEach((highlightAvailable) => {//Removes all the selected
    highlightAvailables[0].classList.remove("highlightAvailable");
});
}
function availableWhiteKingMoves (event) {
  let clickedId = event.target.parentElement.id
  if (parseInt(clickedId)-10 > 10){
    if(parseInt(clickedId)-10 < 89){
        if (selecteds[0]){
          let move1 = parseInt(clickedId)-10;
          let move1s = document.getElementById(`${move1}`)
          if (!move1s.querySelector(".whiteType")){
            move1s.classList.add("highlightAvailable")
          }
        }
      }
    }

  if (parseInt(clickedId)-9 > 10){
    if (parseInt(clickedId)-9 < 89){
      if (selecteds[0]){
        let move2 = parseInt(clickedId)-9
        let move2s = document.getElementById(`${move2}`)
          if (!move2s.querySelector(".whiteType")){
            move2s.classList.add("highlightAvailable")
          }
        }
      }
    }

  if (parseInt(clickedId)+1 > 10){
    if (parseInt(clickedId)+1 < 89){
      if (selecteds[0]){
        let move3 = parseInt(clickedId)+1;
        let move3s = document.getElementById(`${move3}`)
        if (!move3s.querySelector(".whiteType")){
          move3s.classList.add("highlightAvailable")
        }
      }
    }
  }
  if (parseInt(clickedId)+11 > 10){
    if (parseInt(clickedId)+11 < 89){
      if (selecteds[0]){
        let move4 = parseInt(clickedId)+11
        let move4s = document.getElementById(`${move4}`)
        if (!move4s.querySelector(".whiteType")){
          move4s.classList.add("highlightAvailable")
        }
      }
    }
  }
  if (parseInt(clickedId)+10 > 10){
    if (parseInt(clickedId)+10 < 89){
      if (selecteds[0]){
        let move5 = parseInt(clickedId)+10;
        let move5s = document.getElementById(`${move5}`)
        if (!move5s.querySelector(".whiteType")){
          move5s.classList.add("highlightAvailable")
        }
      }
    }
  }

  if (parseInt(clickedId)+9 > 10){
    if (parseInt(clickedId)+9 < 89){
      if (selecteds[0]){
        let move6 = parseInt(clickedId)+9
        let move6s = document.getElementById(`${move6}`)
        if (!move6s.querySelector(".whiteType")){
          move6s.classList.add("highlightAvailable")
        }
      }
    }
  }

  if (parseInt(clickedId)-1 > 10){
    if (parseInt(clickedId)-1 < 89){
      if (selecteds[0]){
        let move7 = parseInt(clickedId)-1;
        let move7s = document.getElementById(`${move7}`)
        if (!move7s.querySelector(".whiteType")){
          move7s.classList.add("highlightAvailable")
        }
      }
    }
  }

  if (parseInt(clickedId)-11 > 10){
    if (parseInt(clickedId)-11 < 89){
      if (selecteds[0]){
        let move8 = parseInt(clickedId)-11;
        let move8s = document.getElementById(`${move8}`)
        if (!move8s.querySelector(".whiteType")){
          move8s.classList.add("highlightAvailable")
        }      
      }
    }
  }
}

function availableWhitePawnMoves (event){
  let clickedId = event.target.parentElement.id
  if (parseInt(clickedId)+1 > 10){
    if(parseInt(clickedId)+1 < 89){
        if (selecteds[0]){
          let move1 = parseInt(clickedId)+1;
          let move1s = document.getElementById(`${move1}`)
          if (!move1s.querySelector(".whiteType")){
            move1s.classList.add("highlightAvailable")
        }
      }
    }
  }
}

function availableWhiteKnightMoves (event){
  let clickedId = event.target.parentElement.id
  if (parseInt(clickedId)-8 > 10){
    if(parseInt(clickedId)-8 < 89){
        if (selecteds[0]){
          let move1 = parseInt(clickedId)-8;
          let move1s = document.getElementById(`${move1}`)
          if (!move1s.querySelector(".whiteType")){
            move1s.classList.add("highlightAvailable")
        }
      }
    }
  }

  if (parseInt(clickedId)+8 > 10){
    if (parseInt(clickedId)+8 < 89){
      if (selecteds[0]){
        let move2 = parseInt(clickedId)+8
        let move2s = document.getElementById(`${move2}`)
          if (!move2s.querySelector(".whiteType")){
            move2s.classList.add("highlightAvailable")
        }
      }
    } 
  }

  if (parseInt(clickedId)+12 > 10){
    if (parseInt(clickedId)+12 < 89){
      if (selecteds[0]){
        let move3 = parseInt(clickedId)+12;
        let move3s = document.getElementById(`${move3}`)
        if (!move3s.querySelector(".whiteType")){
          move3s.classList.add("highlightAvailable")
        }
      }
    }
  }

  if (parseInt(clickedId)-12 > 10){
    if (parseInt(clickedId)-12 < 89){
      if (selecteds[0]){
        let move4 = parseInt(clickedId)-12
        let move4s = document.getElementById(`${move4}`)
        if (!move4s.querySelector(".whiteType")){
          move4s.classList.add("highlightAvailable")
        }      
      }
    }
  }

  if (parseInt(clickedId)-19 > 10){
    if (parseInt(clickedId)-19 < 89){
      if (selecteds[0]){
        let move5 = parseInt(clickedId)-19;
        let move5s = document.getElementById(`${move5}`)
        if (!move5s.querySelector(".whiteType")){
          move5s.classList.add("highlightAvailable")
        }      
      }
    }
  }

  if (parseInt(clickedId)+19 > 10){
    if (parseInt(clickedId)+19 < 89){
      if (selecteds[0]){
        let move6 = parseInt(clickedId)+19
        let move6s = document.getElementById(`${move6}`)
        if (!move6s.querySelector(".whiteType")){
          move6s.classList.add("highlightAvailable")
        }      
      }
    }
  }

  if (parseInt(clickedId)-21 > 10){
    if (parseInt(clickedId)-21 < 89){
      if (selecteds[0]){
        let move7 = parseInt(clickedId)-21;
        let move7s = document.getElementById(`${move7}`)
        if (!move7s.querySelector(".whiteType")){
          move7s.classList.add("highlightAvailable")
        }      
      }
    }
  }

  if (parseInt(clickedId)+21 > 10){
    if (parseInt(clickedId)+21 < 89){
      if (selecteds[0]){
        let move8 = parseInt(clickedId)+21;
        let move8s = document.getElementById(`${move8}`)
        if (!move8s.querySelector(".whiteType")){
          move8s.classList.add("highlightAvailable")
        }      
      }
    }
  
    }
}

function availableWhiteRookMoves(event){
  let clickedId = event.target.parentElement.id
  if (parseInt(clickedId)+1 > 10){
    if(parseInt(clickedId)+1 < 89){
        if (selecteds[0]){
          let move1 = parseInt(clickedId)+1;
          let move1s = document.getElementById(`${move1}`)
          if (!move1s.querySelector(".whiteType")){
            if(Math.floor(move1/10) === Math.floor(parseInt(clickedId)/10)){
              move1s.classList.add("highlightAvailable")
          }
        }
      }
    }
  }
  if (parseInt(clickedId)+2 > 10){
    if (parseInt(clickedId)+2 < 89){
      if (selecteds[0]){
        let move2 = parseInt(clickedId)+2
        let move2s = document.getElementById(`${move2}`)
          if (!move2s.querySelector(".whiteType")){
            if(Math.floor(move2/10) === Math.floor(parseInt(clickedId)/10)){
            move2s.classList.add("highlightAvailable")
          }
        }
      }
    }
  }

  if (parseInt(clickedId)+3 > 10){
    if (parseInt(clickedId)+3 < 89){
      if (selecteds[0]){
        let move3 = parseInt(clickedId)+3;
        let move3s = document.getElementById(`${move3}`)
        if (!move3s.querySelector(".whiteType")){
          if(Math.floor(move3/10) === Math.floor(parseInt(clickedId)/10)){
          move3s.classList.add("highlightAvailable")
          }
        }
      }
    }
  }

  if (parseInt(clickedId)+4 > 10){
    if (parseInt(clickedId)+4 < 89){
      if (selecteds[0]){
        let move4 = parseInt(clickedId)+4
        let move4s = document.getElementById(`${move4}`)
        if (!move4s.querySelector(".whiteType")){
          if(Math.floor(move4/10) === Math.floor(parseInt(clickedId)/10)){
          move4s.classList.add("highlightAvailable")
          }
        }
      }
    }
  }

  if (parseInt(clickedId)+5 > 10){
    if (parseInt(clickedId)+5 < 89){
      if (selecteds[0]){
        let move5 = parseInt(clickedId)+5;
        let move5s = document.getElementById(`${move5}`)
        if (!move5s.querySelector(".whiteType")){
          if(Math.floor(move5/10) === Math.floor(parseInt(clickedId)/10)){
          move5s.classList.add("highlightAvailable")
          }
        }      
      }
    }
  }

  if (parseInt(clickedId)+6 > 10){
    if (parseInt(clickedId)+6 < 89){
      if (selecteds[0]){
        let move6 = parseInt(clickedId)+6
        let move6s = document.getElementById(`${move6}`)
        if (!move6s.querySelector(".whiteType")){
          if(Math.floor(move6/10) === Math.floor(parseInt(clickedId)/10)){
          move6s.classList.add("highlightAvailable")
          }
        }      
      }
    }
  }

  if (parseInt(clickedId)+7 > 10){
    if (parseInt(clickedId)+7 < 89){
      if (selecteds[0]){
        let move7 = parseInt(clickedId)+7;
        let move7s = document.getElementById(`${move7}`)
        if (!move7s.querySelector(".whiteType")){
          if(Math.floor(move7/10) === Math.floor(parseInt(clickedId)/10)){
          move7s.classList.add("highlightAvailable")
          }
        }
      }
    }
  }

  if (parseInt(clickedId)-1 > 10){
    if(parseInt(clickedId)-1 < 89){
        if (selecteds[0]){
          let move8 = parseInt(clickedId)-1;
          let move8s = document.getElementById(`${move8}`)
          if (!move8s.querySelector(".whiteType")){
            if(Math.floor(move8/10) === Math.floor(parseInt(clickedId)/10)){
            move8s.classList.add("highlightAvailable")
          }
        }
      }
    }
  }

  if (parseInt(clickedId)-2 > 10){
    if (parseInt(clickedId)-2 < 89){
      if (selecteds[0]){
        let move9 = parseInt(clickedId)-2
        let move9s = document.getElementById(`${move9}`)
          if (!move9s.querySelector(".whiteType")){
            if(Math.floor(move9/10) === Math.floor(parseInt(clickedId)/10)){
              move9s.classList.add("highlightAvailable")
            }
          }
        }
      }
    }
  if (parseInt(clickedId)-3 > 10){
    if (parseInt(clickedId)-3 < 89){
      if (selecteds[0]){
        let move10 = parseInt(clickedId)-3;
        let move10s = document.getElementById(`${move10}`)
        if (!move10s.querySelector(".whiteType")){
          if(Math.floor(move10/10) === Math.floor(parseInt(clickedId)/10)){
          move10s.classList.add("highlightAvailable")
          }
        }
      }
    }
  }

  if (parseInt(clickedId)-4 > 10){
    if (parseInt(clickedId)-4 < 89){
      if (selecteds[0]){
        let move11 = parseInt(clickedId)-4
        let move11s = document.getElementById(`${move11}`)
        if (!move11s.querySelector(".whiteType")){
          if(Math.floor(move11/10) === Math.floor(parseInt(clickedId)/10)){
          move11s.classList.add("highlightAvailable")
          }
        }      
      }
    }
  }

  if (parseInt(clickedId)-5 > 10){
    if (parseInt(clickedId)-5 < 89){
      if (selecteds[0]){
        let move12 = parseInt(clickedId)-5;
        let move12s = document.getElementById(`${move12}`)
        if (!move12s.querySelector(".whiteType")){
          if(Math.floor(move12/10) === Math.floor(parseInt(clickedId)/10)){
          move12s.classList.add("highlightAvailable")
          }
        }      
      }
    }
  }

  if (parseInt(clickedId)-6 > 10){
    if (parseInt(clickedId)-6 < 89){
      if (selecteds[0]){
        let move13 = parseInt(clickedId)-6
        let move13s = document.getElementById(`${move13}`)
        if (!move13s.querySelector(".whiteType")){
          if(Math.floor(move13/10) === Math.floor(parseInt(clickedId)/10)){
          move13s.classList.add("highlightAvailable")
          }
        }      
      }
    }
  }

  if (parseInt(clickedId)-7 > 10){
    if (parseInt(clickedId)-7 < 89){
      if (selecteds[0]){
        let move14 = parseInt(clickedId)-7;
        let move14s = document.getElementById(`${move14}`)
        if (!move14s.querySelector(".whiteType")){
          if(Math.floor(move14/10) === Math.floor(parseInt(clickedId)/10)){
          move14s.classList.add("highlightAvailable")
          }
        }      
      }
    }
  }
//Horizontal

  if (parseInt(clickedId)+10 > 10){
    if(parseInt(clickedId)+10 < 89){
        if (selecteds[0]){
          let move1 = parseInt(clickedId)+10;
          let move1s = document.getElementById(`${move1}`)
          if (!move1s.querySelector(".whiteType")){
              move1s.classList.add("highlightAvailable")
          }
      }
    }
  }  
 
  if (parseInt(clickedId)+20 > 10){
    if (parseInt(clickedId)+20 < 89){
      if (selecteds[0]){
        let move2 = parseInt(clickedId)+20
        let move2s = document.getElementById(`${move2}`)
          if (!move2s.querySelector(".whiteType")){
            move2s.classList.add("highlightAvailable")
          }
    
      }
    } 
  }

  if (parseInt(clickedId)+30 > 10){
    if (parseInt(clickedId)+30 < 89){
      if (selecteds[0]){
        let move3 = parseInt(clickedId)+30;
        let move3s = document.getElementById(`${move3}`)
        if (!move3s.querySelector(".whiteType")){
          move3s.classList.add("highlightAvailable")
        }
      }
    }
  }

  if (parseInt(clickedId)+40 > 10){
    if (parseInt(clickedId)+40 < 89){
      if (selecteds[0]){
        let move4 = parseInt(clickedId)+40
        let move4s = document.getElementById(`${move4}`)
        if (!move4s.querySelector(".whiteType")){
          move4s.classList.add("highlightAvailable")
        }      
      }
    }
  }

  if (parseInt(clickedId)+50 > 10){
    if (parseInt(clickedId)+50 < 89){
      if (selecteds[0]){
        let move5 = parseInt(clickedId)+50;
        let move5s = document.getElementById(`${move5}`)
        if (!move5s.querySelector(".whiteType")){
          move5s.classList.add("highlightAvailable")
        }      
      }
    }
  }

  if (parseInt(clickedId)+60 > 10){
    if (parseInt(clickedId)+60 < 89){
      if (selecteds[0]){
        let move6 = parseInt(clickedId)+60
        let move6s = document.getElementById(`${move6}`)
        if (!move6s.querySelector(".whiteType")){
          move6s.classList.add("highlightAvailable")
        }      
      }
    }
  }

  if (parseInt(clickedId)+70 > 10){
    if (parseInt(clickedId)+70 < 89){
      if (selecteds[0]){
        let move7 = parseInt(clickedId)+70;
        let move7s = document.getElementById(`${move7}`)
        if (!move7s.querySelector(".whiteType")){
          move7s.classList.add("highlightAvailable")
        }
      }
    }
  }

  if (parseInt(clickedId)-10 > 10){
    if(parseInt(clickedId)-10 < 89){
      if (selecteds[0]){
        let move8 = parseInt(clickedId)-10;
        let move8s = document.getElementById(`${move8}`)
        if (!move8s.querySelector(".whiteType")){
            move8s.classList.add("highlightAvailable")
        }
      }
    }  
  }
 
  if (parseInt(clickedId)-20 > 10){
    if (parseInt(clickedId)-20 < 89){
      if (selecteds[0]){
        let move9 = parseInt(clickedId)-20
        let move9s = document.getElementById(`${move9}`)
          if (!move9s.querySelector(".whiteType")){
              move9s.classList.add("highlightAvailable")
        }
      } 
    }
  }

  if (parseInt(clickedId)-30 > 10){
    if (parseInt(clickedId)-30 < 89){
      if (selecteds[0]){
        let move10 = parseInt(clickedId)-30;
        let move10s = document.getElementById(`${move10}`)
        if (!move10s.querySelector(".whiteType")){
            move10s.classList.add("highlightAvailable")
        }
      }
    }
  }

  if (parseInt(clickedId)-40 > 10){
    if (parseInt(clickedId)-40 < 89){
      if (selecteds[0]){
        let move11 = parseInt(clickedId)-40
        let move11s = document.getElementById(`${move11}`)
        if (!move11s.querySelector(".whiteType")){
          move11s.classList.add("highlightAvailable")
        }      
      }
    }
  }

  if (parseInt(clickedId)-50 > 10){
    if (parseInt(clickedId)-50 < 89){
      if (selecteds[0]){
        let move12 = parseInt(clickedId)-50;
        let move12s = document.getElementById(`${move12}`)
        if (!move12s.querySelector(".whiteType")){
          move12s.classList.add("highlightAvailable")
        }      
      }
    }
  }

  if (parseInt(clickedId)-60 > 10){
    if (parseInt(clickedId)-60 < 89){
      if (selecteds[0]){
        let move13 = parseInt(clickedId)-60
        let move13s = document.getElementById(`${move13}`)
        if (!move13s.querySelector(".whiteType")){
          move13s.classList.add("highlightAvailable")
        }      
      }
    }
  }

  if (parseInt(clickedId)-70 > 10){
    if (parseInt(clickedId)-70 < 89){
      if (selecteds[0]){
        let move14 = parseInt(clickedId)-70;
        let move14s = document.getElementById(`${move14}`)
        if (!move14s.querySelector(".whiteType")){
          move14s.classList.add("highlightAvailable")
        }      
      }
    }
  }
}

function addSelection (event){//Adds selection
  if(event.target.classList.contains("taken")){
    console.log("aded")

    } else{
    event.target.classList.add("selected")

  }
}

function removeSelected() {//Function removes selected
  [...selecteds].forEach((selected) => {//Removes all the selected
    console.log({selecteds, selected, classList:selected.classList, isSelected: selected.classList.contains("selected")})
    selecteds[0].classList.remove("selected");
    console.log(selecteds)
  }); 
  removeHighlightAvailable()
  availableWhiteKingMoves(event);

}

function transferSelection (event){// Transfers selection
  removeSelected()
  addSelection(event)

}

function toggleTurn(){//Toggles turn
  indicators[0].classList.toggle("black")
  indicators[0].classList.toggle("white")
} 

function movePiece(event) {//Moves a piece
  if(selecteds[0]){//Reacts only if there is a selected
    if(event.target.classList.contains("highlightAvailable")){
    event.target.appendChild(selecteds[0]);
    removeSelected();
    toggleTurn()
  }
  } else {

  } 
}

function whitePieceCaptured(event){//Captures white pieces
  event.target.parentElement.appendChild(selecteds[0])
  capturedBlacks[0].appendChild(event.target)
  event.target.classList.add("taken")
  removeSelected();
  toggleTurn()
}

function blackPieceCaptured(event){//Captures black pieces
  event.target.parentElement.appendChild(selecteds[0])
  capturedWhites[0].appendChild(event.target)
  event.target.classList.add("taken")
  removeSelected();
  toggleTurn()
}

function onWhiteTurn(event) {//What can happen on white turn
  if(event.target.classList.contains("whiteType")){//If white piece is clicked
    if (event.target.classList.contains("selected")) { //If clicked piece is selected
      console.log("remove selected")
      //Removes selection
      removeSelected(event);
    } else if (!selecteds[0]) { //If there are no selections
      console.log("add selected")
      //Adds a selection
      addSelection(event);
    } else if (event.target.classList.contains("whiteKing")){ //If white king is clicked
      console.log("white")
    } else { //If selection ecists but it's not clicked piece
      //Transger selection
      console.log("transfer selected")
      transferSelection(event);
    }
  } else if (event.target.classList.contains("blackType")){//If black piece is clicked
    if(selecteds[0]){//If there is a selected
      //Captures black piece
      console.log("takes")
      blackPieceCaptured(event);
    }
    } else{
      console.log("break")

  }

  event.stopPropagation();
}

function whiteKingMove(event) {//What the white king can do
  console.log("whiteKingMove")
  if(event.target.classList.contains("whiteType")){//If white piece is clicked
    if (event.target.classList.contains("selected")) { //If the white king is selected
      console.log("remove selected1")
      //Removes selection
      removeSelected();
      availableWhiteKingMoves(event);

    } else if (!selecteds[0]) { //If there are no selections
      console.log("add selected1")
      //Adds a selection
      addSelection(event);
      availableWhiteKingMoves(event);

    } else { //If selection exists but it's not on white king piece
      //Transger selection
      console.log("transfer selected1")
      transferSelection(event);
      availableWhiteKingMoves(event);
    }
  }else if (event.target.classList.contains("blackType1")){//If black piece is clicked
    if (event.target.classList.contains("highlightAvailable")) {    
      if(selecteds[0]){//If there is a selection
      //Captures black piece
      console.log("takes1")
      blackPieceCaptured(event);
    }}
    } else{
      console.log("break")
    
  }
  event.stopPropagation();
}

function whitePawnMove(event) {//What the white pawn can do
  console.log("whitePawnMove")
  if(event.target.classList.contains("whiteType")){//If white piece is clicked
    if (event.target.classList.contains("selected")) { //If the white pawn is selected
      console.log("remove selected1")
      //Removes selection
      removeSelected();
      availableWhitePawnMoves(event);

    } else if (!selecteds[0]) { //If there are no selections
      console.log("add selected1")
      //Adds a selection
      addSelection(event);
      availableWhitePawnMoves(event);

    } else { //If selection exists but it's not on white king piece
      //Transger selection
      console.log("transfer selected1")
      transferSelection(event);
      availableWhitePawnMoves(event);
    }
  }else if (event.target.classList.contains("blackType1")){//If black piece is clicked
    if (event.target.classList.contains("highlightAvailable")) {    
      if(selecteds[0]){//If there is a selection
      //Captures black piece
      console.log("takes1")
      blackPieceCaptured(event);
    }}
    } else{
      console.log("break")
    
  }
  event.stopPropagation();
}

function whiteKnightMove(event) {//What the white knight can do
  console.log("whiteKnightMove")
  if(event.target.classList.contains("whiteType")){//If white piece is clicked
    if (event.target.classList.contains("selected")) { //If the white pawn is selected
      console.log("remove selected1")
      //Removes selection
      removeSelected();
      availableWhiteKnightMoves(event);

    } else if (!selecteds[0]) { //If there are no selections
      console.log("add selected1")
      //Adds a selection
      addSelection(event);
      availableWhiteKnightMoves(event);

    } else { //If selection exists but it's not on white king piece
      //Transger selection
      console.log("transfer selected1")
      transferSelection(event);
      availableWhiteKnightMoves(event);
    }
  }else if (event.target.classList.contains("blackType1")){//If black piece is clicked
    if (event.target.classList.contains("highlightAvailable")) {    
      if(selecteds[0]){//If there is a selection
      //Captures black piece
      console.log("takes1")
      blackPieceCaptured(event);
    }}
    } else{
      console.log("break")
    
  }
  event.stopPropagation();
}

function whiteRookMove(event) {//What the white rook can do
  console.log("whiteKnightMove")
  if(event.target.classList.contains("whiteType")){//If white piece is clicked
    if (event.target.classList.contains("selected")) { //If the white pawn is selected
      console.log("remove selected1")
      //Removes selection
      removeSelected();
      availableWhiteRookMoves(event);

    } else if (!selecteds[0]) { //If there are no selections
      console.log("add selected1")
      //Adds a selection
      addSelection(event);
      availableWhiteRookMoves(event);

    } else { //If selection exists but it's not on white king piece
      //Transger selection
      console.log("transfer selected1")
      transferSelection(event);
      availableWhiteRookMoves(event);
    }
  }else if (event.target.classList.contains("blackType1")){//If black piece is clicked
    if (event.target.classList.contains("highlightAvailable")) {    
      if(selecteds[0]){//If there is a selection
      //Captures black piece
      console.log("takes1")
      blackPieceCaptured(event);
    }}
    } else{
      console.log("break")
    
  }
  event.stopPropagation();
}

function onBlackTurn(event) {//What can happen on black turn
  if(event.target.classList.contains("blackType")){//If black piece is clicked
    if (event.target.classList.contains("selected")) { //If clicked piece is selected
      //Removes selection
      removeSelected(event);
    } else if (!selecteds[0]) { //If there are no selections
      //Adds a selection
      addSelection(event);
    }else{ //If clicked piece is not selected but there is a selection
      //Transfeers selected
      transferSelection(event);
    } 
  }else if (event.target.classList.contains("whiteType")){//If white piece is clicked
    if(selecteds[0]){//If there is a selected
      //Captures black piece
      whitePieceCaptured(event);
    }

  }
  event.stopPropagation();
}

function onPieceClick (event){//Function decides what do to a click
  console.log("onPieceClick")
  if (indicators[0].classList.contains("white")){
    if(event.target.classList.contains("whiteKing")){ //If white king moves
      whiteKingMove(event)

    } else if (event.target.classList.contains("whitePawn")) {
      whitePawnMove(event)
    } else if (event.target.classList.contains("whiteKnight")){
      whiteKnightMove(event)
    } else if (event.target.classList.contains("whiteRook")){
      whiteRookMove(event)
    }
  } else if (indicators[0].classList.contains("black")){
    if (event.target.classList.contains("blackKing")){
      onBlackTurn(event)
    }
    onBlackTurn(event)

  }
}

Array.from(pieces).forEach((piece) => {//Detects to a click on a piece

  piece.addEventListener("click", onPieceClick);
});

Array.from(squares).forEach((square) => {//Detects to a click on square
    square.addEventListener("click", movePiece);
    console.log('h')

});

Array.from(indicators).forEach((indicator) => {//Detects to a click on indicator
  indicator.addEventListener("click", toggleTurn);
});
