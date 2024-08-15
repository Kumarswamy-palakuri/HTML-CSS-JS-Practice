function cal(){         
    let a=document.getElementById("xsq").value   
    let b=document.getElementById("x").value
    let c=document.getElementById("c").value
    let x1=document.getElementById("x1")
    let x2=document.getElementById("x2")
    let sol_type=document.getElementById("sol-type")
    let p=parseFloat(a)
    let q=parseFloat(b)
    let r=parseFloat(c)
    let sol=parseInt((b*b)-(4*a*c))
    x1.value=sol
    console.log(sol)
    if(sol>parseInt(0))
        {
        sol_type.innerText="hiiiiiiiiii"
    x2.value=sol
    x1.value=0;
    }
    else
    x1.value=0;
    }