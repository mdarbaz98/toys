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
var slider = $('.slider-btn');
var link;

slider.on('mousedown touchstart', function(event){
    link = $(this).attr('data-link')
	mouseIsDown = true;
	slideMovementTotal = $('.product_content4').width() - $(this).width() + 10;
	initialMouse = event.clientX || event.originalEvent.touches[0].pageX;
});

$(document.body, '.slider-btn').on('mouseup touchend', function (event) {
	if (!mouseIsDown)
		return;
	mouseIsDown = false;
	var currentMouse = event.clientX || event.changedTouches[0].pageX;
	var relativeMouse = currentMouse - initialMouse;

	if (relativeMouse < slideMovementTotal) {
		$('.slide-text').fadeTo(300, 1);
		slider.animate({
			left: "-10px"
		}, 300);
		return;
	}
	slider.addClass('unlocked');
	slider.html('<i class="fa-solid fa-phone"></i>');
	setTimeout(function(){
		slider.on('click tap', function(event){
			if (!slider.hasClass('unlocked'))
				return;
			slider.removeClass('unlocked');
			slider.html('<i class="fa-solid fa-angle-right"></i>');
			slider.off('click tap');
		});
	}, 0);
    setTimeout(()=> {
      window.location.href = 'tel://'+link
    },300)
});

$(document.body).on('mousemove touchmove', function(event){
	if (!mouseIsDown)
		return;

	var currentMouse = event.clientX || event.originalEvent.touches[0].pageX;
	var relativeMouse = currentMouse - initialMouse;
	var slidePercent = 1 - (relativeMouse / slideMovementTotal);
	
	$('.slide-text').fadeTo(0, slidePercent);

	if (relativeMouse <= 0) {
		slider.css({'left': '-10px'});
		return;
	}
	if (relativeMouse >= slideMovementTotal + 10) {
		slider.css({'left': slideMovementTotal + 'px'});
		return;
	}
	slider.css({'left': relativeMouse - 10});
});


fetch("js/womensData.json")
  .then((res) => res.json())
  .then((data) => {
    var array = ["dress", "denim", "T-SHIRT", "SHOES", "SKIRTS", "SPORTS WEAR"];
    array.forEach((element, ind) => {
      var result;
      data
        .filter((res) => res.category.toLowerCase() == element.toLowerCase())
        .map((item) => {
          result += ` <div class="product-card" onclick="getItem(this)">
                        <img src="${item.image}" alt="product_image">
                        <div class="content">
                            <div class="product-heading">
                                ${item.name}
                            </div>
                            <div class="brand">
                                KawaiToys
                            </div>
                            <div class="product-price">
                                $${item.price}
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


fetch("js/menData.json")
  .then((res) => res.json())
  .then((data) => {
    var array = ["dress", "denim", "T-SHIRT", "SHOES", "SKIRTS", "SPORTS WEAR"];
    array.forEach((element, ind) => {
      var result;
      data
        .filter((res) => res.category.toLowerCase() == element.toLowerCase())
        .map((item) => {
          result = ` <div class="product-card" onclick="getItem(this)">
                        <img src="${item.Image}" alt="product_image">
                        <div class="content">
                            <div class="product-heading">
                                ${item.name}
                            </div>
                            <div class="brand">
                                KawaiToys
                            </div>
                            <div class="product-price">
                                $${item.Price}
                            </div>
                            <button>Buy Now</button>
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
  console.log(item);
}

// timer js
// const progressBar = document.querySelector(".outerRing"),
//   minElem = document.querySelector("#minutes"),
//   secElem = document.querySelector("#seconds");
// let minutes = 00,
//   seconds = 60,
//   progress = null,
//   progressStart = 0,
//   progressEnd = parseInt(minutes) * 60 + parseInt(seconds),
//   speed = 1000,
//   degTravel = 360 / progressEnd,
//   toggleSettings = false,
//   secRem = 0,
//   minRem = 0;
// function progressTrack() {
//   progressStart++;

//   secRem = Math.floor((progressEnd - progressStart) % 60);
//   minRem = Math.floor((progressEnd - progressStart) / 60);

//   secElem.innerHTML = secRem.toString().length == 2 ? secRem : `0${secRem}`;
//   minElem.innerHTML = minRem.toString().length == 2 ? minRem : `0${minRem}`;

//   if (progressStart == progressEnd) {
//     progressBar.style.background = `conic-gradient(
//             #0343A9 360deg,
//             #0343A9 360deg
// 		  )`;
//     $(".outerRing2").css({ transform: "rotate(360deg)" });

//     clearInterval(progress);
//     startStop.innerHTML = "START";
//     progress = null;
//     progressStart = 0;
//   } else {
//     if (progressStart > 20) {
//       progressBar.style.background = `conic-gradient(
// 				#fff ${progressStart * degTravel}deg,
// 				#0343A9 0deg
// 				)`;
//       $(".outerRing2").css({
//         transform: "rotate(" + progressStart * degTravel + "deg)",
//       });
//     } else {
//       progressBar.style.background = `conic-gradient(
// 			#fff ${progressStart * degTravel}deg,
// 			#0343A9 0deg
// 			)`;
//       $(".outerRing2").css({
//         transform: "rotate(" + progressStart * degTravel + "deg)",
//       });
//     }
//   }
// }

// function startStopProgress() {
//   if (!progress) {
//     progress = setInterval(progressTrack, speed);
//   } else {
//     clearInterval(progress);
//     progress = null;
//     progressStart = 0;
//     progressBar.style.background = `conic-gradient(
// 				#17171a 360deg,
// 				#17171a 360deg
// 		  )`;
//   }
// }

// function resetValues() {
//   if (progress) {
//     clearInterval(progress);
//   }
//   minutes = document.querySelector("#minutes").innerHTML;
//   seconds = document.querySelector("#seconds").innerHTML;
//   toggleSettings = false;
//   minElem.contentEditable = false;
//   minElem.style.borderBottom = `none`;
//   secElem.contentEditable = false;
//   secElem.style.borderBottom = `none`;
//   progress = null;
//   progressStart = 0;
//   progressEnd = parseInt(minutes) * 60 + parseInt(seconds);
//   degTravel = 360 / progressEnd;
//   progressBar.style.background = `conic-gradient(
// 				#17171a 360deg,
// 				#17171a 360deg
// 		  )`;
// }

// if (1 == 1) {
//   if (!(parseInt(minutes) === 0 && parseInt(seconds) === 0)) {
//     // startStop.innerHTML = "STOP";
//     startStopProgress();
//   } else {
//     alert("Enter the Time Value in your Timer!");
//   }
// } else {
//   // startStop.innerHTML = "START";
//   startStopProgress();
// }



const allbtn=document.querySelector(".size-btns")
const btns=document.querySelectorAll(".sizebtn");


allbtn.addEventListener("click",function(e){
  const id=e.target.dataset.id;
  if(id){
    btns.forEach(function(btn){
      btn.classList.remove("active")
      e.target.classList.add("active")
    })
  }
})


const counterbtn=document.querySelectorAll(".counterbtn")
const value=document.getElementById("value");
let count=1;
counterbtn.forEach(function(btn){
  btn.addEventListener("click",function(e){
    const styles=e.currentTarget.classList;
    if(styles.contains("increase")){
      count++;
    }
    else if(styles.contains("decrease")) {
      if(count > 1)
      {
         count--;
      }
    } 
    else {
      count = 1;
    }
    value.textContent=count
  })
})