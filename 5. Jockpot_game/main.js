// let a=Math.floor(Math.random() * 10);
// let b=Math.floor(Math.random() * 10)
function myfunc()
{
  let a=Math.floor((Math.random() * 10)+1);
let b=Math.floor(Math.random() * 10+12)
let p1=document.getElementById("score");
let p=document.getElementById("again");
let s=a+b;
if(s==21)
{
  p1.innerText="Your score:"+s;
  // score.innerText=(s);
  p.innerText="Hurry! You won";
}
else{
  p1.innerText="Your score:"+s;
  p.innerText="sorry you lost, play again";
}
}
function restart(){
  let p1=document.getElementById("score");
  let p=document.getElementById("again");
  p1.innerText="Your score:"
  p.innerText="";
}