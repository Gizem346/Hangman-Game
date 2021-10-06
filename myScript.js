const wordList = ["absurd", "awkward", "clarusway", "funny", "galaxy", "joking", "fullstack", "strength", "puzzling", "kilobyte", "keyhole", "cycle", "loop", "slack", "function", "fixable", "buzzard", "avenue", "lengths", "monitor", "information"];
let man = ["#head", "#body", "#arm_right", "#arm_left", "#knee_right", "#knee_left"];
const randomNummer = Math.ceil(Math.random() * (wordList.length - 1));
const selectedWord = wordList[randomNummer].split("")
console.log(selectedWord)
const divList = [];
const wordKnown =[];
const wrongWords = [];
let i = 0;
let wrong = 0;
let known = 0;
q("body").addEventListener("keyup", collector = (e)=>{checkLetter(e)})
document.querySelectorAll(".refresh").forEach((button) =>{
    button.addEventListener("click", ()=>{location.reload()})
})
function q(par){
    return document.querySelector(par)
}
function hangMan(){
    selectedWord.forEach((letter) => {
        let division = document.createElement("div");
        division.classList.add("letter");
        division.innerText = letter;
        q(".word").appendChild(division);
        divList.push(division)
    })
}
function checkLetter(e){
    if(wordKnown.includes(e.key) || wrongWords.includes(e.key)){
        q(".snackbar").classList.replace("snackbar", "snackbar2");
        setTimeout(function(){q(".snackbar2").classList.replace("snackbar2", "snackbar")}, 3000);
        return
    }
    divList.forEach((word)=>{
        if(word.innerText == e.key){
            word.style.color = "white"
            wordKnown.push(e.key)
            known++
            if(divList.length == known){
                q(".confirm_box_win").style.display = "block"
                q("body").removeEventListener("keyup", collector)
            }
        }else if(!selectedWord.includes(e.key) && !wrongWords.includes(e.key)){
            q(".wrong").style.display = "block"
            q(".wrong_words").innerText += e.key
            wrongWords.push(e.key)
            q(man[i]).style.visibility = "visible"
            i++
            wrong++
            if(wrong == man.length){
                q(".confirm_box_lost").style.display = "block"
                q(".anounce").innerText += wordList[randomNummer]
                q("body").removeEventListener("keyup", collector)
            }
        }
    })
}

hangMan();