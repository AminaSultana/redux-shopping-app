import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const dispatch=useDispatch()
  const { title, quantity, description, price } = props;
  const addItemHandler=()=>{
    dispatch(cartActions.addItems({...props}))
  }
  const removeItemHandler=()=>{
    dispatch(cartActions.removeItems(props.id))
  }
  
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
