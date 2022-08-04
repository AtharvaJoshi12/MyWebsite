const scrollElement = document.querySelector(".scrollTopStyle");
const topElement = document.querySelector(".navigation");

const scrollTop = () =>{
    topElement.scrollIntoView({behavior:"smooth"});
}
scrollElement.addEventListener("click",scrollTop);