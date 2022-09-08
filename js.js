let enegele = document.querySelector(".ene");
let hoverelg = document.querySelector(".hovereng");
let mediele = document.querySelector(".med");
let hovermed = document.querySelector(".hovermed");
let argele = document.querySelector(".agr");
let hoverarg = document.querySelector(".hoverarg");
let pursele = document.querySelector(".purs");
let hoverpurs = document.querySelector(".hoverpurs");
let othele = document.querySelector(".oth");
let hoveroth = document.querySelector(".hoveroth");

let flage = false;
enegele.addEventListener("click", (e) => {
    flage = !flage;
    if(flage)    hoverelg.style.display = "block";
    else         hoverelg.style.display = "none";
})

argele.addEventListener("click", (e) =>{
    flage = !flage;
    if(flage)    hoverarg.style.display = "block";
    else         hoverarg.style.display = "none";
})

pursele.addEventListener("click", (e) =>{
    flage = !flage;
    if(flage)    hoverpurs.style.display = "block";
    else         hoverpurs.style.display = "none";
})

othele.addEventListener("click", (e) =>{
    flage = !flage;
    if(flage)    hoveroth.style.display = "block";
    else         hoveroth.style.display = "none";
})

mediele.addEventListener("click", (e) =>{
    flage = !flage;
    if(flage)    hovermed.style.display = "block";
    else         hovermed.style.display = "none";
})