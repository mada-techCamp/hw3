function openNav() {
    document.querySelector("#mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.querySelector("#mySidenav").style.width = "0";
  }
let i=2;
const Images = document.querySelectorAll(".img");
  setInterval(function(){ if(i==0){
i=2;
Images[0].style.display="initial";
Images[1].style.display="initial";
Images[2].style.display="initial";
  } else{
  Images[i].style.display="none";
  i--;}
   }, 2000);