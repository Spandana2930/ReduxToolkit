import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "./store/cartSlice";
export default function Cart() {
  const Products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    console.log("removee");
    //dispatch remove action
    dispatch(remove(id));
  };
  const getProducts = () => {
    return Products.map((product) => {
      return (
        <div class="col-12 d-flex mb-3 d-flex flex-column align-items-center">
          <Card
            key={product.id}
            className="col-12 mb-3"
            style={{ width: "18rem", alignItems: "center" }}
          >
            <Card.Body>
              <div className="d-flex flex-column align-items-center">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ width: "100px", height: "130px" }}
                />
                <Card.Title className="mt-3">{product.title}</Card.Title>
                <Card.Text>INR. {product.price}</Card.Text>
                <Button
                  variant="danger"
                  style={{ width: "130px" }}
                  onClick={() => removeToCart(product.id)} // <-- FIXED
                >
                  Remove Item
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="row">{getProducts()}</div>
    </div>
  );
}
