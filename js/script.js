function owlFunction() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1.2,
      },
      600: {
        items: 1.7,
      },
      1000: {
        items: 4,
        // touchDrag: false,
        // mouseDrag  : false,
      },
    },
  });
}

// swipe button js
var initialMouse = 0;
var slideMovementTotal = 0;
var mouseIsDown = false;
var slider = $(".slider-btn");
var link;

slider.on("mousedown touchstart", function (event) {
  link = $(this).attr("data-link");
  mouseIsDown = true;
  slideMovementTotal = $(".product_content4").width() - $(this).width() + 10;
  initialMouse = event.clientX || event.originalEvent.touches[0].pageX;
});

$(document.body, ".slider-btn").on("mouseup touchend", function (event) {
  if (!mouseIsDown) return;
  mouseIsDown = false;
  var currentMouse = event.clientX || event.changedTouches[0].pageX;
  var relativeMouse = currentMouse - initialMouse;

  if (relativeMouse < slideMovementTotal) {
    $(".slide-text").fadeTo(300, 1);
    slider.animate(
      {
        left: "-10px",
      },
      300
    );
    return;
  }
  slider.addClass("unlocked");
  slider.html('<i class="fa-solid fa-phone"></i>');
  setTimeout(function () {
    slider.on("click tap", function (event) {
      if (!slider.hasClass("unlocked")) return;
      slider.removeClass("unlocked");
      slider.html('<i class="fa-solid fa-angle-right"></i>');
      slider.off("click tap");
    });
  }, 0);
  setTimeout(() => {
    window.location.href = "tel://" + link;
  }, 300);
});

$(document.body).on("mousemove touchmove", function (event) {
  if (!mouseIsDown) return;

  var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
  var relativeMouse = currentMouse - initialMouse;
  var slidePercent = 1 - relativeMouse / slideMovementTotal;

  $(".slide-text").fadeTo(0, slidePercent);

  if (relativeMouse <= 0) {
    slider.css({ left: "-10px" });
    return;
  }
  if (relativeMouse >= slideMovementTotal + 10) {
    slider.css({ left: slideMovementTotal + "px" });
    return;
  }
  slider.css({ left: relativeMouse - 10 });
});

fetch("js/womensData.json")
  .then((res) => res.json())
  .then((data) => {
    var array = ["dress", "denim", "T-SHIRT", "SHOES", "SKIRTS", "SPORTS WEAR"];
    array.forEach((element, ind) => {
      var result = "";
      data
        .filter((res) => res.category.toLowerCase() == element.toLowerCase())
        .map((item) => {
          result += ` <div class="product-card" onclick="getItem(this)">
                        <img src="${item.image}" alt="product_image">
                        <div class="content">
                            <div class="product-heading mt-3">
                                ${item.name}
                            </div>
                            <div class="brand">
                            ${item.category}
                            </div>
                            <div class="d-flex gap-4 gap-lg-5 align-items-center justify-content-center">
                            <div class="product-price">
                            $${item.price}
                        </div>
                        <button>Buy Now</button>
                            </div>
                        </div>
                    </div>`;
          $(`.home-carousel-${ind}`).html(result);
        });
    });
  })
  .catch((err) => console.log(err));

fetch("js/menData.json")
  .then((res) => res.json())
  .then((data) => {
    var array = ["Hoodie", "shirt", "T-SHIRT", "Jeans", "Trouser"];
    array.forEach((element, ind) => {
      var result = "";
      data
        .filter((res) => res.category.toLowerCase() == element.toLowerCase())
        .map((item) => {
          result += `<div class="product-card" onclick="getItem(this)">
                        <img src="${item.Image}" alt="product_image">
                        <div class="content">
                            <div class="product-heading mt-3">
                                ${item.name}
                            </div>
                            <div class="brand">
                            ${item.category}
                            </div>
                            <div class="d-flex gap-4 gap-lg-5 align-items-center justify-content-center">
                            <div class="product-price">
                                $${item.Price}
                            </div>
                            <button>Buy Now</button>
                            </div>
                        </div>
                    </div>`;
          $(`.home-men-carousel-${ind}`).html(result);
        });
    });
    owlFunction();
  })
  .catch((err) => console.log(err));

var toggle = false;
$(".search-btn").click(function (e) {
  e.preventDefault();
  toggle = !toggle;
  toggle
    ? $(this).parent().addClass("mobile")
    : $(this).parent().removeClass("mobile");
});

function getItem(item) {
var img = $(item).find('img')[0].currentSrc,
 name = $(item).find('.product-heading')[0].textContent.trim(),
 price = $(item).find('.product-price')[0].textContent.trim();
window.location.href = `product.php?name=${name}&image=${img}&price=${price}`;
// setSingleProduct();
}

function setSingleProduct(){
  let params = new URLSearchParams(location.search);
  let name = params.get('name');
  let image = params.get('image');
  let price = params.get('price');
  $('.product-content h2').html(name);
  $('.singleProImage').attr("src",image)
  $('.singleProPrice').html(price);
}
setSingleProduct();



// $(window).resize(function () {
//   if ($(window).width() < 500) {
//     $('.navbar-brand img').css({"width":"30px"})
//   }
// })

const allbtn = document.querySelector(".size-btns");
const btns = document.querySelectorAll(".sizebtn");

allbtn.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
  }
});

const counterbtn = document.querySelectorAll(".counterbtn");
const value = document.getElementById("value");
let count = 1;
counterbtn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      if (count > 1) {
        count--;
      }
    } else {
      count = 1;
    }
    value.textContent = count;
  });
});
