import "./SellerHome.css";

const SellerHome = () => {
  return (
    <div>
      <button className="btn1">Start Selling</button>
      <h1 className="head">Rxshoes</h1>

      <div className="offer">
        <h4 className="txt">LIMITED TIME OFFER</h4>
      </div>

      <img className="img" src="./images/best deal.png" />

      <div className="bcm">
        <h1 className="text">Become an RX.in Seller</h1>

        <h4 className="text">
          Start your selling journey on Rx.in and become a part of our seller
          community. Enjoy the Best Deals and win exiting coupons.{" "}
        </h4>
      </div>
      <button className="btn2 ">Start Selling</button>

      <h1 className="text1">Why Seller chooses RX.in ?</h1>

      <div className="container1">
        <div className="icon">
          <span class="fa-solid fa-users"></span>
          <h4>Customers</h4>
          <h9>
            Comfortable all day, great arch support, stylish design, highly
            recommended!
          </h9>
        </div>

        <div className="icon">
          <i class="fa-sharp fa-solid fa-chart-simple"></i>
          <h4>Targeted marketing</h4>
          <h9>
            Precise, tailored, data-driven, focused, personalized, effective,
            strategic, efficient, impactful, customer-centric.
          </h9>
        </div>

        <div className="icon">
          <i class="fa-sharp fa-solid fa-tv"></i>
          <h4>User Friendly interface </h4>
          <h9>
            The user-friendly interface ensures effortless navigation and
            seamless interaction for all users.
          </h9>
        </div>
      </div>

      <div className="container1">
        <div className="icon">
          <i class="fa-solid fa-money-bill"></i>
          <h4> Secure Transactions </h4>
          <h9>
            Secure transactions guarantee the safety of your financial
            information during purchases.
          </h9>
        </div>

        <div className="icon">
          <i class="fa-sharp fa-solid fa-globe"></i>
          <h4>Transparent Policies </h4>
          <h9>
            It provide clarity and fairness, fostering trust and confidence in
            customer interactions.
          </h9>
        </div>

        <div className="icon">
          <i class="fa-sharp fa-solid fa-circle-user"></i>
          <h4>Dedicated Customer Support </h4>
          <h9>
            Their commitment to excellence ensures a positive and memorable
            shopping experience for every customer.
          </h9>
        </div>
      </div>

      <h1 className="text2">How to sell on Rx.in ?</h1>

      <div className="container2">
        <div className="icon">
          <img className="img1 " src="./images/register now.jpg" />
          <h4> Step 1: Register your account </h4>
          <h9>
            Register on RX with GST/PAN details and an active bank account
          </h9>
        </div>

        <div className="icon">
          <img className="img1 " src="./images\storage and shipping.jpg" />
          <h4> Step 2: Choose storage and shipping </h4>
          <h9>Choose storage, packaging, and delivery options</h9>
        </div>

        <div className="icon">
          <img className="img1 " src="./images/prod.jpeg" />
          <h4>Step 3: List your products</h4>
          <h9> List your products by providing product and brand details</h9>
        </div>

        <div className="icon">
          <img className="img1 " src="./images/paymen_rec.jpg" />
          <h4>Step 4: Complete orders & get paid</h4>
          <h9>
            Deliver orders to customers on time and get paid within 7 days of
            delivery
          </h9>
        </div>
      </div>

      <div className="container3">
        <h1 className="text4">Start your Seller journey</h1>

        <h5 className="text4">Join our family and start your business in RX</h5>

        <button className="btn2 ">Start Selling</button>

        <h9 className="text4">
          It takes only 10 minutes to setup your account
        </h9>
      </div>
    </div>
  );
};

export default SellerHome;
