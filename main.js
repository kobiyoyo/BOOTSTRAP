$(document).ready(function(){

let nav = (tar,clas)=>{
    
     $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
           
            $(tar).removeClass(clas);
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $(tar).addClass(clas);
        }
    }); 
}
nav(".navbar","navbar-expand-lg")

let content = (tar,clas)=>{
    
     $(window).on("scroll", function() {
        if($(window).scrollTop() > 600) {
                 $(tar).addClass(clas);
           
        } else {
            //remove the background property so it comes transparent again (defined in your css)
       $(tar).removeClass(clas);
        }
    }); 
}
let contentTwo = (tar,clas)=>{
    
     $(window).on("scroll", function() {
        if($(window).scrollTop() > 2500) {
                 $(tar).addClass(clas);
           
        } else {
            //remove the background property so it comes transparent again (defined in your css)
       $(tar).removeClass(clas);
        }
    }); 
}
content(".top-story","top-story-fixed")
   contentTwo(".top-story","top-story-absolute")


});