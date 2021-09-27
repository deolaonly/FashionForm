
// document.getElementById("On").onclick = function(){
//       document.getElementById("box").style.backgroundColor = "Yellow";

// }

// document.getElementById("Off").onclick = function(){
//     document.getElementById("box").style.backgroundColor = "Black";
// }

function ifChecked(){
    if(document.getElementById("checkbox").checked === true){
        document.getElementById("box").style.backgroundColor = "Yellow";
    }
    else{
        document.getElementById("box").style.backgroundColor = "Black";
    }
}



