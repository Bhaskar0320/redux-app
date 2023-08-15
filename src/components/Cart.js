import {useSelector , useDispatch} from 'react-redux';
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { remove } from '../store/cartSlice';


const Cart =()=>{
const dispatch = useDispatch();

const products = useSelector(state=> state.cart);

const removeFromCart = (id)=>{
    // dispatch the remove action

    dispatch(remove(id));
}

const card = products.map(product => (
    <div className='col-md-6' style={{marginBottom: '100px'}}>
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
            <Button variant="danger" onClick={()=>removeFromCart(product.id)}>Remove item</Button>
            </Card.Footer>
        </Card>
    </div>
))

    return(
        <div className='row'>
            <h1>Cart Component</h1>
            <hr />
            {card}
        </div>
    )
}

export default Cart;