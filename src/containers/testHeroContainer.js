import React, {Component} from 'react'

class Hero extends Component {

  render() {
    return (
        <!-- Full Page Intro -->
        <div class="view" style="background-image: url('https://mdbootstrap.com/img/Photos/Others/images/89.jpg'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
          <!-- Mask & flexbox options-->
          <div class="mask rgba-indigo-strong d-flex justify-content-center align-items-center">
            <!-- Content -->
            <div class="container">
              <!--Grid row-->
              <div class="row pt-lg-5 mt-lg-5">
                <!--Grid column-->
                <div class="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left wow fadeInLeft"
                  data-wow-delay="0.3s">
                  <h1 class="display-4 font-weight-bold">Lorem ipsum</h1>
                  <hr class="hr-light">
                  <h6 class="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi
                    fuga
                    nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
                    dolor molestiae, quisquam iste.</h6>
                  <a class="btn btn-outline-white">Learn more</a>
                </div>
                <!--Grid column-->
                <!--Grid column-->
                <div class="col-md-6 col-xl-5 mb-4">
                  <!--Form-->
                  <div class="card wow fadeInRight" data-wow-delay="0.3s">
                    <div class="card-body z-depth-2">
                      <!--Header-->
                      <div class="text-center">
                        <h3 class="dark-grey-text">
                          <strong>Write to us:</strong>
                        </h3>
                        <hr>
                      </div>
                      <!--Body-->
                      <div class="md-form">
                        <i class="fas fa-user prefix grey-text"></i>
                        <input type="text" id="form3" class="form-control">
                        <label for="form3">Your name</label>
                      </div>
                      <div class="md-form">
                        <i class="fas fa-envelope prefix grey-text"></i>
                        <input type="text" id="form2" class="form-control">
                        <label for="form2">Your email</label>
                      </div>
                      <!--Textarea with icon prefix-->
                      <div class="md-form">
                        <i class="fas fa-pencil prefix grey-text"></i>
                        <textarea type="text" id="form8" class="md-textarea form-control" rows="3"></textarea>
                        <label for="form8">Your message</label>
                      </div>
                      <div class="text-center mt-3">
                        <button class="btn btn-indigo">Send</button>
                        <hr>
                        <fieldset class="form-check">
                          <input class="form-check-input" type="checkbox" id="checkbox1">
                          <label class="form-check-label" for="checkbox1" class="dark-grey-text">Subscribe me to the
                            newsletter</label>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <!--/.Form-->
                </div>
                <!--Grid column-->
              </div>
              <!--Grid row-->
            </div>
            <!-- Content -->
          </div>
          <!-- Mask & flexbox options-->

    )
  }

}

export default Hero
