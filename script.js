function sum(){
    const a = document.getElementById("one").value;
    const b = document.getElementById("two").value;
    const res = document.querySelector(".final");
    const ans = parseInt(a)+parseInt(b);
    res.innerHTML = ans ;
}

function sub(){
    const a = document.getElementById("one").value;
    const b = document.getElementById("two").value;
    const res = document.querySelector(".final");
    const ans = parseInt(a)-parseInt(b)
    res.innerHTML = ans ;
}

function mul(){
    const a = document.getElementById("one").value;
    const b = document.getElementById("two").value;
    const res = document.querySelector(".final");
    const ans = parseInt(a)*parseInt(b)
    res.innerHTML = ans ;
}

function div(){
    const a = document.getElementById("one").value;
    const b = document.getElementById("two").value;
    const res = document.querySelector(".final");
    const ans = parseInt(a)/parseInt(b)
    res.innerHTML = ans ;
}

function mod(){
    const a = document.getElementById("one").value;
    const b = document.getElementById("two").value;
    const res = document.querySelector(".final");
    const ans = parseInt(a)%parseInt(b)
    res.innerHTML = ans ;
}