import React from "react";
import "./Dashboard.css";
import { IoStatsChart, IoBagHandle, IoPerson, IoLogOut } from "react-icons/io5";
import { FaBoxes } from "react-icons/fa";
import { MdAddToPhotos, MdReviews } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
// import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line, PolarArea } from "react-chartjs-2";

import sourceData from "./SourceData.json";
import { NavLink } from "react-router-dom";
// import img1 from `${process.env.PUBLIC_URL}/images/merchant_logo.png`

const data = {
  labels: ["A", "B", "C"],
  datasets: [
    {
      label: "Revenue",
      data: [200, 300, 400],
      backgroundColor: "#7c3aed",
      borderColor: "#7c3aed",
      borderWidth: 1,
      borderRadius: 6,
    },
    {
      label: "Loss",
      data: [90, 80, 70],
      backgroundColor: "#EF4444",
      borderColor: "#EF4444",
      borderWidth: 1,
      borderRadius: 6,
    },
    {
      label: "Profit",
      data: [110, 220, 330],
      backgroundColor: "#10B981",
      borderColor: "#10B981",
      borderWidth: 1,
      borderRadius: 6,
    },
  ],
};

const options = {
  indexAxis: "x", // This specifies that the x-axis is categorical
  scales: {
    x: {
      type: "category",
    },
  },
};

defaults.maintainAspectRatio = false;
defaults.responsive = true;

function Dashboard() {
  return (
    <>
      <div class="container-fluid ">
        <div class="row">
          {/* left side dashboard-buttons  */}
          <div class="col-md-2">
            <div class="row">
              <div class="col-md left-side-container ">
                <div className="seller-details">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/merchant_logo.png`}
                  />
                  <div>
                    <p>Rupesh Jha</p>
                    <p>abc@gmail.com</p>
                  </div>
                </div>
                <div className="col-md dashboard-flex-buttons">
                  <IoStatsChart value={{ size: "1em" }} />
                  <p>DashBoard</p>
                </div>
                <div className="col-md dashboard-flex-buttons">
                  <IoBagHandle />
                  <NavLink to="/seller/orders">
                    <p>Orders</p>
                  </NavLink>
                </div>
                <div className="col-md dashboard-flex-buttons">
                  <FaBoxes />
                  <NavLink to="/seller/products">
                    <p>Products</p>
                  </NavLink>
                </div>

                <div className="col-md dashboard-flex-buttons">
                  <MdAddToPhotos />
                  <NavLink to="/seller/add-products">
                    <p>Add Product</p>
                  </NavLink>
                </div>

                <div className="col-md dashboard-flex-buttons">
                  <HiUsers />
                  <NavLink to="/seller/users">
                    <p>Users</p>
                  </NavLink>
                </div>
                <div className="col-md dashboard-flex-buttons">
                  <MdReviews />
                  <p>Reviews</p>
                </div>
                <div className="col-md dashboard-flex-buttons">
                  <IoPerson />
                  <p>My Profile</p>
                </div>
                <div className="col-md dashboard-flex-buttons">
                  <IoLogOut />
                  <p>Logout</p>
                </div>
              </div>
            </div>
          </div>
          {/* Right side dashboard-Graphs  */}
          <div class="col-md-10 right-side-container">
            {/* top 4 divs  */}
            <div class="row  top-4-divs">
              <div class="col-md-2 amount-div">
                <p class="price-head">Total Sales Amount</p>
                <p>$ 1,384,604</p>
              </div>
              <div class="col-md-2 orders-div">
                <p class="price-head">Total Orders</p>
                <p>36</p>
              </div>
              <div class="col-md-2 products-div">
                <p class="price-head">Total Products</p>
                <p>96</p>
              </div>
              <div class="col-md-2 users-div">
                <p class="price-head">Total Users</p>
                <p>11</p>
              </div>
            </div>
            {/* graphs  */}
            <div class="row space-btwn chart-graph">
              <div class="col-md-5 chart-bg">
                <Bar data={data} options={options} />
              </div>
              <div class="col-md-5 chart-bg">
                <Doughnut data={data} options={options} />
              </div>
            </div>
            <div class="row space-btwn line-graph">
              <div class="col-md-5 chart-bg">
                <Line data={data} options={options} />
              </div>
              <div class="col-md-5 chart-bg">
                <PolarArea data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
