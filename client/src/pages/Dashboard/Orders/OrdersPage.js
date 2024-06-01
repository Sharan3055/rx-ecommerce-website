import React, { useState, useEffect } from "react";
import { Table, Dropdown, FormLabel } from "react-bootstrap";
import "./OrdersPage.css";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Dummy data for testing
  const dummyOrders = [
    {
      id: 1,
      orderId: "ORD001",
      date: "2024-04-18",
      buyerName: "John Doe",
      product: "Product A",
      quantity: 2,
      totalPrice: "$100.00",
      delivery: "2024-04-23",
      status: "pending",
    },
    {
      id: 2,
      orderId: "ORD002",
      date: "2024-01-28",
      buyerName: "Jane Smith",
      product: "Product B",
      quantity: 1,
      totalPrice: "$50.00",
      delivery: "2024-02-02",
      status: "Pending",
    },
    {
      id: 3,
      orderId: "ORD003",
      date: "2024-03-10",
      buyerName: "Alice Johnson",
      product: "Product C",
      quantity: 3,
      totalPrice: "$150.00",
      delivery: "2024-03-15",
      status: "Shipped",
    },
  ];

  useEffect(() => {
    // Set dummyOrders initially
    setOrders(dummyOrders);
  }, []);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle changing the status of an order
  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.orderId === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };
  // Function to handle start date change
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    console.log(e.target.value);
  };

  // Function to handle end date change
  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  // Function to render table rows dynamically
  // Function to render table rows dynamically
  const renderTableRows = () => {
    return orders
      .filter(
        (order) =>
          order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.buyerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
          order.status.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter(
        (order) =>
          (!startDate || new Date(order.delivery) >= new Date(startDate)) &&
          (!endDate || new Date(order.delivery) <= new Date(endDate))
      )
      .filter((order) => order.status !== "Delivered") // Exclude delivered orders
      .map((order, index) => {
        // Parse the order's date
        const currentDate = new Date(order.date);
        // Add 5 days to the current date
        const nextFiveDay = new Date(currentDate);
        nextFiveDay.setDate(nextFiveDay.getDate() + 5);

        return (
          <tr key={order.id}>
            <td>{index + 1}</td>
            <td>{order.orderId}</td>
            <td>{order.date}</td>
            <td>{order.buyerName}</td>
            <td>{order.product}</td>
            <td>{order.quantity}</td>
            <td>{order.totalPrice}</td>
            {/* <td>{nextFiveDay.toLocaleDateString()}</td> */}
            <td>{order.delivery}</td>
            <td>
              <Dropdown
                onSelect={(eventKey) =>
                  handleStatusChange(order.orderId, eventKey)
                }
              >
                <Dropdown.Toggle
                  style={{ backgroundColor: "#143D59", color: "#fff" }}
                  variant="info"
                  id="dropdown-basic"
                >
                  {order.status}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Delivered">Delivered</Dropdown.Item>
                  <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                  <Dropdown.Item eventKey="Shipped">Shipped</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        );
      });
  };

  return (
    <div className="container-fluid mt-1">
      <h1 style={{ textAlign: "center" }}>Orders</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search orders..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      {/* <div className="input-group bacd ">
        <div className="form-outline" data-mdb-input-init>
          <input
            placeholder="search"
            id="form1"
            className="form-control"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <button
          style={{ height: 40 }}
          type="button"
          className="btn btn-primary"
          data-mdb-ripple-init
        >
          <i className="fas fa-search"></i>
        </button>
      </div> */}

      <h2 className="mb-4 text-center orders-heading">
        Search by delivery date
      </h2>
      <div className="dateSearch">
        <label>From:</label>
        <input
          type="date"
          className="form-control"
          placeholder="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <label>To:</label>
        <input
          type="date"
          className="form-control"
          placeholder="End Date"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
      <div className="table-responsive">
        <Table striped bordered hover className="custom-table m-b-10">
          <thead>
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Date</th>
              <th>Buyer Name</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Delivery expected on</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{renderTableRows()}</tbody>
        </Table>
      </div>
    </div>
  );
}

export default OrdersPage;
