<?php 
include('./include/header.php')
?> <section class="checkout-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 rightform">
        <div class="form-inside">
          <h1 class="checkout-h d-lg-block d-none">Order Form</h1>
          <form>
            <div class="mb-3 mt-3">
              <input type="text" class="form-control" id="" placeholder="Name" name="name">
            </div>
            <div class="mb-3 mt-3">
              <input type="email" class="form-control" id="" placeholder="Email" name="email">
            </div>
            <div class="mb-3 mt-3">
              <input type="number" class="form-control" id="" placeholder="Mobile" name="number">
            </div>
            <div class="row mb-3">
              <div class="col">
                <input type="text" class="form-control" placeholder="State" name="State">
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Country" name="country">
              </div>
            </div>
            <div class="row mb-3">
              <div class="col">
                <input type="text" class="form-control" placeholder="City" name="city">
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Pincode" name="pincode">
              </div>
            </div>
            <div class="form-group mb-3">
              <textarea class="form-control" rows="5" id="" placeholder="Address"></textarea>
            </div>
            <div class="form-btn-in d-flex justify-content-center">
              <button type="submit" class="form-btn">Order</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
 <?php 
include('./include/footer.php')
?>