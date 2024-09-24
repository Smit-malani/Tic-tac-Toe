const ticTacToe=document.querySelector('#tic_tac_parents')

let boxes = document.querySelectorAll('.box')

const h1=document.getElementById("h1")

const rbtn=document.getElementById("rbtn")

let winningCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

currentPlayer = 'X'
let count = 0

function startgame(e){
    if(e.target.innerText == '') 
    {
        e.target.innerText=currentPlayer
        count ++
currentPlayer=(currentPlayer == 'X')?'O' : 'X'
    }    
   if (count == 9) {
       h1.innerText='match is draw'
   }
       winner()
}

ticTacToe.addEventListener("click",startgame)

function winner(){
    winningCondition.forEach((item)=>{
        let index0=item[0]
        let index1=item[1]
        let index2=item[2]
        
        let val0=boxes[index0].innerText
        let val1=boxes[index1].innerText
        let val2=boxes[index2].innerText
        
        //console.log(index0,val0,index1,val1,index2,val2)
 if(val0 !=='' && val1 !=='' && val2 !=='') 
 {
   if(val0 === val1 && val0 === val2) 
   {
    boxes[index0].classList.add("winnerclass")
    boxes[index1].classList.add("winnerclass")         
    boxes[index2].classList.add("winnerclass")
    h1.innerText=`winner is ${val1}`
    // console.log("winner is ",val0) 
    ticTacToe.removeEventListener("click",startgame)
            }
        }
    })
}

rbtn.addEventListener('dblclick',() =>{
    count =0
    currentPlayer = 'X'
    h1.innerText='TicTacToe'
    boxes.forEach(item =>
    {   
        item.classList.remove("winnerclass") 
        item.innerText=''
    })
    ticTacToe.addEventListener("click",startgame)
})