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
    var array = ["Pet Food","Toys","Wearables","Grooming","Leash"];
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

// search

$('#search').keyup(function () {
  $('#result').html('');
  var searchField = $('#search').val();
  var expression = new RegExp(searchField, "i");
  if(searchField){
    $.getJSON('js/data.json', function (data) {
      $.each(data, function (key, value) {
        if (value.name.search(expression) != -1) {
          $('#result').append('<li onclick="getItemSearch(this)" class="list-group-item d-flex justify-content-between"><img src="' + value.image + '"class="search-img" /> ' + ' <span class="name"><span class="d-none category">'+value.category+'</span>' + value.name + '</span> ' + '<span class="price">' + '$' + value.price + '</span>' + '<button class="">Buy now</button>' + '</li>');
        } 
      });
    });
  }
});

function getItemSearch(item) {
  var img = $(item).find("img")[0].currentSrc,
  name = $(item).find(".name")[0].textContent.trim(),
  price = $(item).find(".price")[0].textContent.trim(),
  category = $(item).find(".category")[0].textContent.trim();
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
  // $(".tshirt-heading h2").html(`${ category.toLowerCase()}`);
  switch (category && category.toLowerCase()) {
    case "grooming":
      $(".productpage-main .owl-carousel").addClass("home-carousel-0");
      break;
    case "wearables":
      $(".productpage-main .owl-carousel").addClass("home-carousel-1");
      break;
    case "leash":
      $(".productpage-main .owl-carousel").addClass("home-carousel-2");
      break;
    case "toys":
      $(".productpage-main .owl-carousel").addClass("home-carousel-3");
      break;
    case "pet food":
      $(".productpage-main .owl-carousel").addClass("home-carousel-4");
      break;
  }
}
setSingleProduct();

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

