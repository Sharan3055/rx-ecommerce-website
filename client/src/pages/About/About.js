import React from "react";
const About = () => {
  return (
    <div className="main" style={{ textAlign: "center" }}>
      <div>
        <img
          src="./images/about_us.jpg"
          style={{ width: "80%", height: "500px" }}
        />
      </div>
      <div className="container my-3 py-3">
        <h1 className="text-center" style={{ color: "blue" }}>
          About Us
        </h1>
        <hr />
        <p className="lead text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facere doloremque veritatis odit similique sequi. Odit amet fuga nam
          quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
          totam vero quas provident ipsam, veritatis nostrum velit quos
          recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
          earum unde eligendi autem praesentium, doloremque distinctio nesciunt
          porro tempore quis eaque labore voluptatibus ea necessitatibus
          exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
          tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
          quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
          delectus expedita a alias nam recusandae illo debitis repellat libero,
          quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
          dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
        </p>

        <h2 className="text-center py-4" style={{ color: "blue" }}>
          Our Categories
        </h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                style={{ height: "150px" }}
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Formal Shoes</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                style={{ height: "150px" }}
                src="https://img.freepik.com/free-photo/high-heels-black-velvet_53876-102771.jpg?w=360&t=st=1706549940~exp=1706550540~hmac=b975c3dc982c47d3fea0211d1c59341208a88eede0136357a71673d0ca5be13c"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Shoes</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                style={{ height: "150px" }}
                src="https://t3.ftcdn.net/jpg/06/33/34/22/240_F_633342295_3jnYzCe15cjVVPfERA9Hii81mpNgIQ0Y.jpg"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Sports Shoes</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                style={{ height: "150px" }}
                src="https://t3.ftcdn.net/jpg/07/01/53/04/240_F_701530423_ZnfAoFexIN8e3Yc1zxnkVEV8U2rc0fDp.webp"
                alt=""
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Daily use</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
