export const addToCart = (pizza,quantity) => (dispatch,getState) => {
      var cartItem = {
        name : pizza.name,
        _id : pizza._id,
        tag : pizza.tag,
        image : pizza.image,
        quantity : Number(quantity),
        prices : pizza.prices,
        price : pizza.prices * quantity
      };
      if(cartItem.quantity > 10){
            alert("You Can Only Add 10 Electronics.")
      }else{
        if(cartItem.quantity < 1){
          dispatch({type : 'DELETE_FROM_CART',payload : pizza});
          const cartItems = getState().cartReducer.cartItems;
          localStorage.setItem('cartItems',JSON.stringify(cartItems))
        }else{
          dispatch({type : 'ADD_TO_CART',payload : cartItem});
          localStorage.setItem('cartItems',JSON.stringify(getState().cartReducer.cartItems))
        }
        
      }
};

export const deleteFromCart = (pizza) => (dispatch,getState) => {
  dispatch({type : 'DELETE_FROM_CART',payload : pizza});
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems',JSON.stringify(cartItems))
};