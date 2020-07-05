const menuIcon = document.getElementById("yes");
const sideMenu = document.getElementById("side-menu");
const closeMenu = document.getElementById("close-menu")

// Adding an event listener to our hamburger icon on small screen
menuIcon.addEventListener("click", () =>{

    sideMenu.style.width = '250px';
})



closeMenu.addEventListener("click", () =>{

    sideMenu.style.width  = '0';
})




