//Mohamed Makouk
//December 2021
//Mohamed_Makouk@student.uml.edu
var score = 0
var ScrabbleTiles = [];
var gameBoard = {};
var totalScore = 0;

//Created by Prof. Heines
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_A.jpg"  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_B.jpg"  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2 , "image": "graphics_data/scrabble_tiles/Scrabble_Tile_C.jpg" } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_D.jpg"  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_E.jpg" } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_F.jpg"  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_G.jpg"  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_H.jpg"  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_I.jpg"  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_J.jpg"  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_K.jpg"  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_L.jpg"  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_M.jpg"  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_N.jpg"  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_O.jpg" } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_P.jpg"  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_Q.jpg"  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_R.jpg"  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_S.jpg"  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_T.jpg"  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_U.jpg"  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_V.jpg"  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_W.jpg"  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_X.jpg"  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_Y.jpg"  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_Z.jpg" } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image": "graphics_data/scrabble_tiles/Scrabble_Tile_Blank.jpg"  } ;
$(document).ready(function(){

    

    newHand()

});

//gives player a new hand
function newHand()
{
    
    //variables to store in each letter div
    var row = 0
    var col = 0
    for(col= 0; col < 7; col++ )
    {
        var divName = "p"
        divName = divName + col
        //console.log(divName)
        var currentRandomLetter = generateRandomLetter() 
        var value =  ScrabbleTiles[currentRandomLetter]["value"]
        //insert data into div
        var imageLocation = ScrabbleTiles[currentRandomLetter]["image"]
        newSlot = $("<div class=\"scrabblePiece\" id= \"" + divName + "\" draggable=\"true\" droppable=\"false\" ondragstart=\"drag(event)\" row=\"" + row + "\" col=\"" + col + "\" style=\"background-image: url(" + imageLocation + "); background-size: 81px 88px; width: 81px; height: 87px; margin: 1px; border-width: 1px;\"/>");
        $(newSlot).data("letterName", currentRandomLetter)
        $(newSlot).data("value", value)
        $(newSlot).data("image", imageLocation)
        $(newSlot).data("letterName", currentRandomLetter)
        $(newSlot).data("value", ScrabbleTiles[currentRandomLetter]["value"])
        $("#hand").append(newSlot)
        //console.log("INSERTED AT " +row + ", " + col)
        
    }
    
    //console.log("Actual div data: " + $("#p2").data("image"))
    
    
}

//set score of current word
function calculateScore()
{   
    score = 0;
    var firstScore = 0;
    var storage = 0
    //go through each boardSpace
    for(i = 1; i < 8; i++)
    {
        //format string for jquery selector
        tileName = "s"
        tileName = tileName + i + " > *"
        currentValue = $("#" + tileName).data("value")
        //console.log("current value is : " + currentValue)
        if(isNaN(currentValue) == false)
        {
            //console.log("score in not NaN")
            if($("#s" + i).attr("class") == "boardSpaceDouble")
            score = score + (currentValue * 2)
            else
            score = score + currentValue
        }
        else
        {
            break
        }
        
    }
    
    console.log("final score is: " + score)
    $("#score").html("Score: " + score) 
}

//clears the hand and board of current tiles and sets new ones
function nextWord()
{
    totalScore = totalScore + score
    score = 0
    $("#score").html("Score: " + score) 
    $("#totalScore").html("Total Score: " + totalScore) 
    
    for(i= 1; i< 8; i++)
    {
        handName = "p"
        handName = handName + (i -1)
        tileName = "s"
        tileName = tileName + i + " > *"
        $("#" + tileName).remove()
        $("#" + handName).remove()
    }
    newHand()

}

//from https://www.w3schools.com/html/html5_draganddrop.asp
function allowDrop(ev) {
    ev.preventDefault();
}

//restarts game
function restart()
{
    for(i= 1; i< 8; i++)
    {
        handName = "p"
        handName = handName + (i -1)
        tileName = "s"
        tileName = tileName + i + " > *"
        $("#" + tileName).remove()
        $("#" + handName).remove()
    }
    totalScore = 0;
    score = 0;
    $("#score").html("Score: " + score) 
    $("#totalScore").html("Total Score: " + totalScore) 
    newHand()
}
  
function drag(ev) 
{
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) 
{
    if(ev.target.classList[0] == "scrabblePiece")
        return
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    calculateScore();
}

function generateRandomLetter()
{
    const alphabet = "ABCDEFGHIJKLMNOPQURTUVWXYZ_"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
    
}