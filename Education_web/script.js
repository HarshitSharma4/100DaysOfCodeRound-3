

// java script toggel for responsive manue

var responsive_nav=document.getElementById("nav1");

document.getElementById("cencel").addEventListener("click",function(){
   responsive_nav.style.right="-220px";
});
document.getElementById("show").addEventListener("click", function(){
    responsive_nav.style.right="0px";
 });
 