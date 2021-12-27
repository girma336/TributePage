const bars=document.querySelector(".bar .fa-bars"),
 close=document.querySelector(".new-button .fa-close");

bars.addEventListener("click", () =>{
    document.querySelector(".new-button").style.display="block";
   
bars.classList.add("active");
}
 );
 
 close.addEventListener("click", () =>{
    
    document.querySelector(".new-button").style.display="none";
bars.classList.add("active");
}
 );



