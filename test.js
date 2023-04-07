function appearP2() { 
    var loader = document.getElementById('loader');
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    loader.style.left = "0";
    setTimeout(function() { 
        loader.style.left = "-100%";
        page1.style.display = "none";
        page2.style.display = 'block';
     }, 1500)
 }

 function appearP1() { 
    var loader = document.getElementById('loader');
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    loader.style.left = "0";
    setTimeout(function() { 
        loader.style.left = "-100%";
        page1.style.display = "block";
        page2.style.display = 'none';
     }, 1500)
 }

 const transition = document.getElementById("accueil");

 transition.addEventListener("click",()=>{
    appearP2();
    console.log("test");
 })