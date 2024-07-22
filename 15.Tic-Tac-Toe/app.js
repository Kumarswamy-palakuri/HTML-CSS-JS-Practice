let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("regame");

let turnO=true;

let win_pat=[
  [0,1,2],
  [0,3,6],
  [0,4,5],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
]

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
    if(turnO)
      {
        box.innerText="O";
        turnO=false;
      }
      else{
        box.innerText="X";
        turnO=true;
      }
      box.disabled=true;
      checkWinner();
  });
});

const checkWinner=() =>{
  for(let pattern of win_pat)
    {
      console.log(pattern);
    }
};