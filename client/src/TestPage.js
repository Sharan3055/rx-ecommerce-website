import React from "react";
import "./TestPage.css";

function TestPage() {
  return (
    <>
      <div class="container-lg">
        <div class="row">
          <div class="col-sm-12">
            <div id="myCarousel" class="t-carousel slide" data-ride="carousel">
              <h2 id="testi-monial-heading">
                Customer <b>Testimonials</b>
              </h2>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    {/* main card  */}
                    <div class="col-sm-6">
                      <div class="testimonial">
                        <p>
                          "These shoes are absolute gems! The comfort they
                          provide is unmatched, and the design is effortlessly
                          stylish. From casual outings to long walks, they never
                          disappoint. Highly recommend investing in a pair!""
                        </p>
                      </div>
                      <div class="media">
                        <img src="./images/rupesh.jpg" class="mr-3" alt="" />
                        <div class="media-body">
                          <div class="overview">
                            <div class="name">
                              <b>Rupesh Jha</b>
                            </div>
                            <div class="details">Full Stack / Developer</div>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star-o"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* main card end  */}
                    <div class="col-sm-6">
                      <div class="testimonial">
                        <p>
                          " These heels are a dream come true! Not only do they
                          elevate any outfit with their elegant design, but
                          they're surprisingly comfortable for extended wear.
                          Whether it's a night out or a special occasion, these
                          heels steal the spotlight every time. "
                        </p>
                      </div>
                      <div class="media">
                        <img src="./images/rupesh.jpg" class="mr-3" alt="" />
                        <div class="media-body">
                          <div class="overview">
                            <div class="name">
                              <b>Rupesh Jha</b>
                            </div>
                            <div class="details">Full Stack / Developer</div>
                            <div class="star-rating">
                              <ul class="list-inline">
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star"></i>
                                </li>
                                <li class="list-inline-item">
                                  <i class="fa fa-star-o"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestPage;
