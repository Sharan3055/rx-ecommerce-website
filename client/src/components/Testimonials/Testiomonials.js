import React from "react";
import "./Testiomonials.css";
function Testiomonials({ img, review, position, name }) {
  return (
    <>
      <div class="col-sm-6">
        <div class="testimonial">
          <p>{review}</p>
        </div>
        <div class="media">
          <img src={img} class="mr-3" alt="" />
          <div class="media-body">
            <div class="overview">
              <div class="name">
                <b>{name}</b>
              </div>
              <div class="details">{position}</div>
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
    </>
  );
}

export default Testiomonials;
