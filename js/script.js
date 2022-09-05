$('.owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
      touchDrag: false,
      mouseDrag  : false,
    },
  },
})

const togglebtn=document.querySelector(".menu-btn");
const menuitem=document.querySelector(".menu-items")

togglebtn.addEventListener("click",function(){
  $(".menu-items").toggleClass("show-links")
})