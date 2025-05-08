import React from "react";
import {useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch,useSelector } from "react-redux";
import {add} from './store/cartSlice'
import { getProducts } from "./store/productSlice";
import Alert  from "react-bootstrap/Alert";
import StatusCode from "./utils/StatusCode";
const Product = ()=> {
  const dispatch = useDispatch();
  const {data,status} =useSelector(state=>state.products)

  useEffect(() => {
    dispatch(getProducts())
    //api
    // fetch("https://fakestoreapi.com/products")
    //   .then((res) => res.json())
    //   .then((result) => getProducts(result));

  }, [dispatch]);


  const addToCart = (product)=>{
    //dispatch an add action
    dispatch(add(product))
  }
  if(status === StatusCode.LOADING){
    return <p>Loading...</p>
    }
    if(status === StatusCode.ERROR){
      return <Alert key="danger" variant="danger">Something went wrong!! Please try again later</Alert>
    }
  const getProductss = () => {
    return data.map((product) => {
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
            <Button variant="primary" style={{width:'130px'}} onClick = {()=>addToCart(product)}>Add to Cart</Button>
            </Card.Footer>
          </Card>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">{getProductss()}</div>
    </div>
  );
}

export default Product;
