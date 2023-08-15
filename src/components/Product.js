import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from 'react-redux';
import {  useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/productSlice';
import StatusCode from '../utils/StatusCode';


const Product = () => {

    const dispatch = useDispatch();
    const {data: products, status} = useSelector(state => state.products)

   useEffect(()=>{
    dispatch(getProducts());
   }, [])

   if(status === StatusCode.LOADING){
    return <p>Loading....</p>
   }

   if(status === StatusCode.ERROR){
    return <p>Something went wrong! Try again later</p>
   }





    const addToCart = (product)=>{
        //dispatch an action

        dispatch(add(product));
        
    }

    const card = products.map(product => (
        <div className='col-md-3' style={{marginBottom: '100px'}}>
            <Card key ={product.id} className='h-100'>
                <div className='text-center'>
                <Card.Img variant="top" src={product.image} style={{width : '100px' , height : '130px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR : {product.price}<br />
                    </Card.Text>
                </Card.Body>

                <Card.Footer style={{background:'white'}}>
                <Button variant="primary" onClick={()=> addToCart(product)}>Add to cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <div>
            <h1>Product Component</h1>
            <hr /> 
            <div className='row'>
                {card}
            </div>


        </div>
    )

}

export default Product;