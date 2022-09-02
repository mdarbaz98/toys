<?php
include('./include/header.php')
?>
<section class="home__page">
    <div class="banner">
        <div class="banner_inner">
            <h2>The Coolest Toy Store On The Planet</h2>
            <button>Shop Now</button>
        </div>
    </div>
    <div class="products_section">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-12">
                    <div class="product-card">
                        <img src="./assets/images/minion-toy-vbr.png" alt="product_image">
                        <div class="content">
                            <div class="product-heading">
                                Minions Small
                            </div>
                            <div class="brand">
                                KawaiToys
                            </div>
                            <div class="product-price">
                                $33.42
                            </div>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
<?php
include('./include/footer.php')
?>