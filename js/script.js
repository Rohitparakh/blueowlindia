var mobileMenu= document.getElementsByClassName("ekit-menu-nav-link");

for (var i=0; i < mobileMenu.length; i++) {
    mobileMenu[i].addEventListener("click", ()=>{
document.querySelector("#ekit-megamenu-criativo-menus > div > button").click();
    });
  }

 