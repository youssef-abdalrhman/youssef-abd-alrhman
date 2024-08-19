
AOS.init({
    offset:200,
    delay:50
});
var nav = document.querySelector(".ul")
var icon = document.querySelector("#icon")

icon.onclick=function(){
    icon.classList.toggle("fa-xmark")
    nav.classList.toggle("active")
 console.log("fffff")
}



var wid = document.querySelectorAll(".b")
var section = document.querySelector(".section3")

window.onscroll=function(){
    if(window.scrollY >= section.offsetTop - 200){
        console.log("222")
        wid.forEach((span) =>{
            span.style.width= span.dataset.width;
        })
    }
    else{
        wid.forEach((span) =>{
            span.style.width="0";
        })
    }

}



