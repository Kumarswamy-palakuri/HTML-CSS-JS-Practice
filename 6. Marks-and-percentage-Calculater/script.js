
function percentage(){  
let m1=parseFloat(document.getElementById("m1").value);
let m2=parseFloat(document.getElementById("m2").value);
let m3=parseFloat(document.getElementById("m3").value);
let m4=parseFloat(document.getElementById("m4").value);
let percent=document.getElementById("percent");
let mark=document.getElementById("marks");
  let l=parseFloat(m1+m2+m3+m4);
  let sum= parseFloat(l/4);
  percent.innerText=`${sum}`;
  mark.innerText=`${l}`;
  return;
}