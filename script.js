
/* --------------------- Header Popout CSS ---------------------------------*/
const sectionHeader = document.querySelector(".banner"); 

const pageHeader = document.querySelector("header");
const main = document.querySelector("main");

// large page

var options = {
};

const mainObserver = new IntersectionObserver(function(entries, mainObserver){
   entries.forEach(entry =>{
       console.log(options);
       if(!entry.isIntersecting) {
           pageHeader.classList.add("popout-header");
       } else{
           pageHeader.classList.remove('popout-header');
       }
   }) ;
}, options);


mainObserver.observe(sectionHeader);

/* --------------------------------------------------------------------------*/

function openSection(){
    var a = $(this).attr('for');
    var details = $('#'+a);
    details.attr('open', !(details.attr('open')));
}

$('.section-header').on('click', openSection);

