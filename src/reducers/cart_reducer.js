import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((item) => item.id === id + color);
    // 아이템이 카트에 있으면 카트를 반복하여, 어디 있는지 확인!
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        // item과 색상이 동일할때, 장바구니에 더하기 버튼 누를시 이제는 금액만 추가해주면됨
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          // 카트 아이템이 일치하지 않으면, 그 아이템으로 아무것도 안함
          return cartItem;
        }
      });

      return { ...state, cart: tempCart };
    } else {
      // 아이템이 카트에 없으면 아래의 속성을 갖은 카트를 만듬.
      const newItem = {
        // 같은 아이템이여도 색상이 다를 수 있기 때문에
        id: id + color,
        name: product,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
