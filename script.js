
/* --------------------- Header Popout CSS ---------------------------------*/
const banner = document.querySelector(".banner"); 

const pageHeader = document.querySelector("header");

// large page

var options = {
};

const bannerObserver = new IntersectionObserver(function(entries, mainObserver){
   entries.forEach(entry =>{
       console.log(options);
       if(!entry.isIntersecting) {
           pageHeader.classList.add("popout-header");
       } else{
           pageHeader.classList.remove('popout-header');
       }
   }) ;
}, options);


bannerObserver.observe(banner);

/* --------------------------------------------------------------------------*/

function openSection(){
    var a = $(this).attr('for');
    var section = $('#'+a);
    section.attr('hidden', !(section.attr('hidden')));
}

$('.section-header').on('click', openSection);

