//conent-us//
$(document).ready(function(){
  'use strict';
  var windoh = $(window).height();
  $('body').height(windoh);

 $(".component-stert  .component--intro ").fadeOut(2000,function()
   {
       $(this).parent().fadeOut(1000,function(){
       $("body").css("overflow","auto");
       $(this).remove();
       $('body').height("100%");
   });
   
 }
 
  );
});
/***** */
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


//activ-link-nav//
const currentlocation = location.href; 
const menuitem = document.querySelectorAll('.navber-index .nav-item .nav-link,.component-link-Pages a,.nav-pills li a');
 const menulength = menuitem.length
for (let i = 0; i<menulength; i++){
 if(menuitem[i].href === currentlocation) {
   menuitem[i].className = "active" 
    }
}
const currentabout = location.href; 
const menuitemabout = document.querySelectorAll('.nav-about ol li a');
 const menulengthabout = menuitemabout.length
for (let j = 0; j<menulengthabout; j++){
 if(menuitemabout[j].href === currentabout) {
  menuitemabout[j].className = "active" 
    }
}

//activ-link-nav//
function toggleText(){
  $('.btn-colik').toggleClass('transform-active');
  var x = document.getElementsByClassName("overlay-caption");
  var m = document.getElementsByClassName("carousel-defintion");
  Array.from(x).forEach((xl) => {
    if ((xl.style.display == 'none')) {
      xl.style.display = "block";
      xl.style.transition=" transform .6s ease-in-out";
      
  
    } else {
      xl.style.display = "none";
      xl.style.transition=" transform .6s ease-in-out";

    }
  })
  Array.from(m).forEach((ml) => {
    if ((ml.style.display == 'none')) {
      ml.style.display = "block";
      ml.style.transition="transform .6s ease-in-out";
  
    } else {
      ml.style.display = "none";
      ml.style.transition="transform .6s ease-in-out";

    }
  })
 
}
// ******************VIDEO*****************************

var myVideo = document.getElementById('myVideo');

$(".video-date").on('click',function () {
    // debugger;
        if (myVideo.paused){
        $("#myBtn").hide();
        myVideo.play();
       
        } 
        else {
        myVideo.pause();
        $("#myBtn").show();
        }
    });
/**** */
let items = document.querySelectorAll('.carousel-Offers .carousel-offers-item')

items.forEach((el) => {
    const minPerSlide = 2
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
$(window).scroll(function(){
  $(' .navber-index').toggleClass('scrolled', $(this).scrollTop() > 50);
  });
  $(document).ready(function() {

    $(".component-team-new").owlCarousel(
      {
        navText: ["<img src='./assets/img/Iconleft.png'>","<img src='./assets/img/Iconright.png'>"],
        navClass:['owl-prev','owl-next'],
        ltr: true,
      
        autoplay:true,
        autoplayhoverpause: true,
        autoplaytimeout:100,
        items:2,
        nav:true,
        responsive:{
          0:{
            items:1,
            dots:false
          },
          485:{
            items:2,
            dots:false
          },
          728:{
            items:2,
            dots:false
          },
          960:{
            items:2,
            dots:false
          },
          1200:{
            items:3,
            dots:true
          },
        }
      }
    );
    $(".component-team-Project").owlCarousel(
      {
        navText: ["<img src='./assets/img/icon-left.svg'>","<img src='./assets/img/icon-right.svg'>"],
        navClass:['owl-prev','owl-next'],
        ltr: true,
        autoplay:true,
        autoplayhoverpause: true,
        autoplaytimeout:100,
        items:2,
        nav:true,
        responsive:{
          0:{
            items:1,
            dots:false
          },
          485:{
            items:2,
            dots:false
          },
          728:{
            items:2,
            dots:false
          },
          960:{
            items:2,
            dots:false
          },
          1200:{
            items:3,
            dots:true
          },
        }
      }
    );
   
  })
  /*** */
  /*active*/ 
  $('.navber-index .nav-item .nav-link').removeClass('active').removeAttr('aria-current');
  $('a[href="' + location.pathname + '"]').closest('li').addClass('active').attr('aria-current', 'page'); 
  /*ative*/
  function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);