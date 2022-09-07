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
      items: 1.7,
    },
    1000: {
      items: 4,
    },
  },
})

const togglebtn=document.querySelector(".menu-btn");
const menuitem=document.querySelector(".menu-items")

togglebtn.addEventListener("click",function(){
  $(".menu-items").toggleClass("show-links")
})


 fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => 
 {
  var result;
  data.map((item) => {
    result += `<div class="card" onclick="card(this)">
    <p>${item.userId}</p>
    <strong>${item.id}</strong>
    <h6>${item.title}</h6>
    <article>${item.body}</article>
  </div>`
  })
  $('.newProduct').html(result);
 }
 ).catch((err) => console.log(err));