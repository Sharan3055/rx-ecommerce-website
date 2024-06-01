import React from "react";
import "./CartCard.css";
import { useNavigate } from "react-router-dom";

function CartCard({
  id,
  img,
  company,
  title,
  color,
  prevPrice,
  newPrice,
  handleDelteFromCart,
  handleQuantityChange,
  qty,
  handleWishList,
  size,
}) {
  const navigate = useNavigate();
  const navigateToProduct = (id) => {
    console.log("clicked", id);
    navigate("/product", { state: { id: id } });
  };

  return (
    <>
      <tr>
        <td> 
          <figure class="itemside">
            <div class="aside">
              <img
                src={img}
                height="150px"
                className="img-sm cart-product-img"
                onClick={() => navigateToProduct(id)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <figcaption class="info">
              <a
                href=""
                class="title text-dark"
                onClick={() => navigateToProduct(id)}
              >
                {title}
              </a>
              <p class="text-muted small">
                Size:{size}, Color: {color}, <br /> Brand:{company}
                {size ? null : (
                  <h6 style={{ color: "red" }}>please select size</h6>
                )}
              </p>
            </figcaption>
          </figure>
        </td>
        <td>
          <select
            value={qty}
            onChange={(e) => handleQuantityChange(id, parseInt(e.target.value))}
          >
            {[...Array(5).keys()].map((number) => (
              <option key={number} value={number + 1}>
                {number + 1}
              </option>
            ))}
          </select>

          {/* <input class="form-control" ="1" onChange={hadleQty} /> */}
        </td>
        <td>
          <div class="price-wrap">
            <var class="price">Only₹ {newPrice * qty}....</var>

            <small class="text-muted">
              <del>{prevPrice}</del>
            </small>
          </div>
        </td>
        <td class="text-right">
          <button
            data-original-title="Save to Wishlist"
            title=""
            class="btn btn-light mr-2"
            data-toggle="tooltip"
            onClick={() =>
              handleWishList({
                id,
                img,
                company,
                title,
                color,
                prevPrice,
                newPrice,
              })
            }
          >
            <i style={{ color: "#3985DB" }} class="fa fa-heart"></i>
          </button>
          <button
            style={{ color: "#ef233c", backgroundColor: "#fcd3d8" }}
            class="btn btn-light"
            onClick={() => handleDelteFromCart(id)}
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
}

export default CartCard;
