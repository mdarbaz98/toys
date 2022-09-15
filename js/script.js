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
      },
    },
  });
}
fetch("js/data.json")
  .then((res) => res.json())
  .then((data) => {
    var array = ["Grooming","Wearables","Leash","Toys","Pet Food"];
    array.forEach((element, ind) => {
      var result = "";
      data
        .filter((res) => res.category.toLowerCase() == element.toLowerCase())
        .map((item) => {
          result += `<div class="product-card" onclick="getItem(this)">
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
  var img = $(item).find("img")[0].currentSrc,
    name = $(item).find(".product-heading")[0].textContent.trim(),
    price = $(item).find(".product-price")[0].textContent.trim(),
    category = $(item).find(".brand")[0].textContent.trim();
  window.location.href = `product.php?name=${name}&image=${img}&price=${price}&category=${category}`;
}

function setSingleProduct() {
  let params = new URLSearchParams(location.search);
  let name = params.get("name");
  let image = params.get("image");
  let price = params.get("price");
  let category = params.get("category");
  $(".product-content h2").html(name);
  $(".singleProImage").attr("src", image);
  $(".singleProPrice").html(price);
  $(".tshirt-heading h2").html(`${category.toLowerCase()}`);
  switch (category.toLowerCase()) {
    case "dress":
      $(".productpage-main .owl-carousel").addClass("home-carousel-0");
      break;
    case "denim":
      $(".productpage-main .owl-carousel").addClass("home-carousel-1");
      break;
    case "t-shirt":
      $(".productpage-main .owl-carousel").addClass("home-carousel-2");
      break;
    case "shoes":
      $(".productpage-main .owl-carousel").addClass("home-carousel-3");
      break;
    case "skirts":
      $(".productpage-main .owl-carousel").addClass("home-carousel-4");
      break;
    case "sports wear":
      $(".productpage-main .owl-carousel").addClass("home-carousel-5");
      break;
    case "hoodie":
      $(".productpage-main .owl-carousel").addClass("home-men-carousel-0");
      break;
    case "shirts":
      $(".productpage-main .owl-carousel").addClass("home-men-carousel-1");
      break;
    case "jeans":
      $(".productpage-main .owl-carousel").addClass("home-men-carousel-3");
      break;
    case "trouser":
      $(".productpage-main .owl-carousel").addClass("home-men-carousel-4");
      break;
  }
}
setSingleProduct();

// $(window).scroll(function () {
//   if ($(window).width() < 500) {
//     $(".navbar-brand img").animate({ width: "25px" });
//   } else {
//     $(".navbar-brand img").animate({ width: "35px" });
//   }
// });

// smoothscroll fucntion
function scrollToElement(elementId) {
  const yOffset = -90;
  var element = document.getElementById(elementId);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

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

// search

$('#search').keyup(function () {
  $('#result').html('');
  var searchField = $('#search').val();
  var expression = new RegExp(searchField, "i");
  if(searchField){
    $.getJSON('js/data.json', function (data) {
      $.each(data, function (key, value) {
        if (value.name.search(expression) != -1) {
          $('#result').append('<li class="list-group-item d-flex justify-content-between"><img src="' + value.image + '"class="search-img" /> ' + ' <span class="name">' + value.name + '</span> ' + '<span class="price">' + '$' + value.price + '</span>' + '<button class="">Buy now</button>' + '</li>');
        } 
      });
    });
  }
});