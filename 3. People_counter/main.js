let c=document.getElementById("p_c")
let s=document.getElementById("save")
let count=0;
let st="N0";
function myfunc(){
  count=count+1;
  c.innerText=count;
  console.log(c);
}
function mysav(){
  st=st+" :"+count;
  s.innerText=st;
  count=0;
  c.innerText=0;
  console.log(c);
}