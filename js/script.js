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
        items: 1,
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

const togglebtn=document.querySelector(".menu-btn");
const menuitem=document.querySelector(".menu-items")


togglebtn.addEventListener("click", function () {
  $(".menu-items").toggleClass("show-links");
});

fetch("js/data.json")
  .then((res) => res.json())
  .then((data) => {
    var array = ["dress", "denim", "T-SHIRT", "SHOES", "SKIRTS", "SPORTS WEAR"];
    array.forEach((element, ind) => {
      var result;
      data
        .filter((res) => res.category.toLowerCase() == element.toLowerCase())
        .map((item) => {
          result += ` <div class="product-card">
                        <img src="${item.image}" alt="product_image">
                        <div class="content">
                            <div class="product-heading">
                                ${item.name}
                            </div>
                            <div class="brand">
                                KawaiToys
                            </div>
                            <div class="product-price">
                                ${item.price}
                            </div>
                            <button>Buy Now</button>
                        </div>
                    </div>`;
          $(`.home-carousel-${ind}`).html(result);
        });
    });
    owlFunction();
  })
  .catch((err) => console.log(err));