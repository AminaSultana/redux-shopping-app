import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalQuantity=useSelector(state=>state.cart.totalQuantity)
  const showCart=()=>{
    dispatch(cartActions.showCart())
  }

  return (
    <button className={classes.button} onClick={showCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
