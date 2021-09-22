
// function showResponsiveMenu() {
//   var menu = document.getElementById("topnav_responsive_menu");
//   var icon = document.getElementById("topnav_hamburger_icon");
//   var root = document.getElementById("root");
//   if (menu.className === "") {
//     menu.className = "open";
//     icon.className = "open";
//     root.style.overflowY = "hidden";
//   } else {
//     menu.className = "";                    
//     icon.className = "";
//     root.style.overflowY = "";
//   }
// }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myNavbar() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.classList.add("responsive");
  }else {
    x.classList.remove("responsive");
  }
  
}

let linkNav = document.querySelectorAll(".link");

for (let i = 0; i < linkNav.length; i++){
  linkNav[i].addEventListener("click", function(){
    let nav = document.getElementById("myTopnav");
      nav.classList.remove("responsive");
  })
}



const ratio = .1
const option = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer){
    entries.forEach(function (entry){
        if(entry.handleIntersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r)
})



