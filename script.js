// let answer = [true, false];
let placeToSee = document.querySelector("#placeToSee");
function yesOrNo() {
    let randNum = Math.floor( Math.random() * 2) +1;
//     placeToSee.innerText = answer[randNum];
// }

//want it to say yes or no instead of true or false

    let answers = "";
    switch (randNum) {
      case 1: 
        answers = "Yes"; 
        break; 
      case 2:
        answers = "No";
        break; 

}

    placeToSee.innerText = answers;
    
}

