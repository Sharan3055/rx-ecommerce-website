import React, { useEffect, useState } from "react";
import "./AllProducts.css";
import { Card, Col, Container, Pagination, Row } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilteredCards from "../../components/FilteredCards/FilteredCards";
import database from "../../Database/Database";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";
import axios, { Axios } from "axios";
import { InfinitySpin } from "react-loader-spinner";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function AllProducts() {
  let [loader, setLoader] = useState(true);
  let [database, setDataBases] = useState([]);
  let [data, setDataBase] = useState([]);
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [color, setColor] = useState("");
  let [inputSearch, setInputSearch] = useState("");

  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalNumberOfProducts, setTotalNumberOfProducts] = useState(1);

  // multi handle Search for category,color,price,copmany
  const handleSearch = () => {
    let filteredData = database.filter(
      (curElm) =>
        (curElm.category &&
          curElm.category.toLowerCase().includes(inputSearch.toLowerCase())) ||
        (curElm.company &&
          curElm.company.toLowerCase().includes(inputSearch.toLowerCase())) ||
        (curElm.color &&
          curElm.color.toLowerCase().includes(inputSearch.toLowerCase())) ||
        (curElm.newPrice &&
          curElm.newPrice.toLowerCase().includes(inputSearch.toLowerCase()))
    );
    setDataBase(filteredData);
  };

  useEffect(() => {
    handleSearch();
  }, [inputSearch]);

  // search for category
  const handleCategory = () => {
    console.log(category, color, price);
    axios
      .get(
        `http://localhost:4000/api/products/getProductsByCategory?category=${category}&color=${color}&price=${price}`
      )
      .then((res) => {
        console.log(res);
        setDataBase(res.data.data);
      })
      .catch((err) => {
        console.log(err, "err in axios get products");
      });
    //old logic for CATEGORY FILTER
    // let filteredData = database.filter(
    //   (curElm) => curElm.category && curElm.category.includes(category)
    // );
    // setDataBase(filteredData);
  };

  useEffect(() => {
    handleCategory();
  }, [category, color, price]);

  // search for price
  // const handlePrice = () => {
  //   let filteredData = database.filter(
  //     (curElm) => curElm.newPrice && curElm.newPrice.includes(price)
  //   );
  //   setDataBase(filteredData);
  // };

  // useEffect(() => {
  //   handlePrice();
  // }, [price]);

  // search for colors
  // const handleColors = () => {
  //   let filteredData = database.filter(
  //     (curElm) => curElm.color && curElm.color.includes(color)
  //   );
  //   setDataBase(filteredData);
  // };

  // useEffect(() => {
  //   handleColors();
  // }, [color]);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    notify(product);
  };

  const notify = (product) =>
    toast(`${product.title} Added To Cart`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  // const numOfTotalPages = Math.ceil(database.length / itemsPerPage);
  const numOfTotalPages = Math.ceil(totalNumberOfProducts / itemsPerPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);

  // const indexOfLastTodo = pageNumber * itemsPerPage;
  // const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
  // const visibleTodos = database.slice(indexOfFirstTodo, indexOfLastTodo);

  useEffect(() => {
    console.log(pageNumber, numOfTotalPages);
    if (pageNumber > 0 && pageNumber <= numOfTotalPages) {
      axios
        // .get("http://localhost:4000/api/products")
        .get(
          `http://localhost:4000/api/products/getProducts?page=${pageNumber}&limit=${itemsPerPage}`
        )
        .then((res) => {
          setTotalNumberOfProducts(res.data.totalCount);
          setDataBases(res.data.data);
          setLoader(false);
        })
        .catch((err) => {
          console.log(err, "err in axios get products");
        });
    } else {
      // console.log("no api callled");
    }
  }, [pageNumber]);

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        {/* left side bar with category section  */}
        <Col xs={4} lg={2} className="filter-section">
          <div className="category-section">
            <h4>Category</h4>
            <div className="my-flx">
              <input
                type="radio"
                value=""
                onChange={(evt) => setCategory(evt.target.value)}
                name="select1"
                id="all"
              />
              <label for="all">All</label>
            </div>

            <div className="my-flx">
              <input
                type="radio"
                value="sneakers"
                onChange={(evt) => setCategory(evt.target.value)}
                name="select1"
                id="Sneakers"
              />
              <label for="Sneakers">Sneakers</label>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                value="sports"
                onChange={(evt) => setCategory(evt.target.value)}
                name="select1"
                id="sports"
              />
              <label for="sports">Sports</label>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                value="formals"
                name="select1"
                onChange={(evt) => setCategory(evt.target.value)}
                id="formals"
              />
              <label for="formals">Formals</label>
            </div>
            <div className="my-flx">
              <input
                id="Heels"
                value="heels"
                type="radio"
                name="select1"
                onChange={(evt) => setCategory(evt.target.value)}
              />
              <label for="Heels">Heels</label>
            </div>
          </div>
          <div className="price-section">
            <h4>Price</h4>
            <div className="my-flx">
              <input
                type="radio"
                name="select2"
                value=""
                onChange={(evt) => setPrice(evt.target.value)}
              />
              <span>All</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select2"
                value="500"
                onChange={(evt) => setPrice(evt.target.value)}
              />
              <span>300-500</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select2"
                value="1700"
                onChange={(evt) => setPrice(evt.target.value)}
              />
              <span>500-1700</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select2"
                value="1000"
                onChange={(evt) => setPrice(evt.target.value)}
              />
              <span>800-1200</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select2"
                value="1200"
                onChange={(evt) => setPrice(evt.target.value)}
              />
              <span>1200-3000</span>
            </div>
          </div>
          <div className="colors-section">
            <h4>Colors</h4>
            <div className="my-flx">
              <input
                type="radio"
                name="select3"
                value=""
                onChange={(evt) => setColor(evt.target.value)}
              />
              <span>All</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select3"
                value="black"
                onChange={(evt) => setColor(evt.target.value)}
              />
              <span>Black</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select3"
                value="blue"
                onChange={(evt) => setColor(evt.target.value)}
              />
              <span>Blue</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select3"
                value="red"
                onChange={(evt) => setColor(evt.target.value)}
              />
              <span>Red</span>
            </div>
            <div className="my-flx">
              <input
                type="radio"
                name="select3"
                value="gray"
                onChange={(evt) => setColor(evt.target.value)}
              />
              <span>Gray</span>
            </div>
          </div>
        </Col>
        {/* right main section with cards  */}
        <Col xs={8} lg={10} className="card-section">
          {/* <div className="search-section"> */}
          {/* <input
              className="input-search"
              placeholder="Search Here for Category  Brand  Color  Price"
              onChange={(evt) => setInputSearch(evt.target.value)}
            /> */}
          <div className="search-container m-3">
            <input
              type="text"
              placeholder="Search Here for Category  Brand  Color  Price"
              className="search-bar"
              onChange={(evt) => setInputSearch(evt.target.value)}
            />
            <button className="search-button">
              <i className="fa fa-search"></i>
            </button>
          </div>
          {/* </div> */}

          {loader ? (
            <InfinitySpin
              visible={true}
              width="500"
              color="#3381da"
              ariaLabel="infinity-spin-loading"
            />
          ) : (
            <Row style={{ rowGap: "10px", marginTop: "80px" }}>
              {inputSearch || category || price || color
                ? data
                    .slice(0, itemsPerPage)
                    .map((curElm) => (
                      <FilteredCards
                        id={curElm.id}
                        img={curElm.img}
                        company={curElm.company}
                        title={curElm.title}
                        prevPrice={curElm.prevPrice}
                        newPrice={curElm.newPrice}
                        addtoCart={handleAddToCart}
                      />
                    ))
                : //earlier pgination here visible todos was there
                  database.map((curElm) => (
                    <FilteredCards
                      id={curElm.id}
                      img={curElm.img}
                      company={curElm.company}
                      title={curElm.title}
                      prevPrice={curElm.prevPrice}
                      newPrice={curElm.newPrice}
                      color={curElm.color}
                      addtoCart={handleAddToCart}
                    />
                  ))}
            </Row>
          )}

          <Pagination size="md" className="mt-2 justify-content-center">
            <Pagination.First
              onClick={() => {
                setPageNumber(pageNumber - 1);
              }}
            />
            {pages.map((curElm, index) => (
              <Pagination.Item
                active={pageNumber == curElm ? true : false}
                onClick={() => setPageNumber(curElm)}
              >
                {curElm}
              </Pagination.Item>
            ))}
            <Pagination.Last
              onClick={() => {
                setPageNumber(pageNumber + 1);
              }}
            />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
}

export default AllProducts;
