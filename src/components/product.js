import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
function Product() {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    //api
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => getProducts(result));
  }, []);

  const getProductss = () => {
    return products.map((product) => {
      return (
        <div class="col-md-3 mb-2">
          <Card key={product.id} className ="h-100" style={{ width: "18rem", alignItems: "center" }}>
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />

            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>INR.{product.price}</Card.Text>
            </Card.Body>
            <Card.Footer style={{width:'285px',background:'white'}}>
            <Button variant="primary" style={{width:'130px'}}>Add to Cart</Button>
            </Card.Footer>
          </Card>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Product</h1>
      <div className="row">{getProductss()}</div>
    </div>
  );
}

export default Product;
