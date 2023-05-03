import {  createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    listItems: [],
    totalQuantity: 0,
    show: false
  },
 
  reducers: {

    addCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.listItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.totalPrice += newItem.price;
        existingItem.quantity++
      }else{
        state.listItems.push(
            {
                id: newItem.id,
                name:newItem.name,
                price:newItem.price,
                totalPrice:newItem.price,
                quantity:1
            }
      

        )

        state.totalQuantity++;
      }
     
    },

    removeCart(state, action) {

    const id = action.payload

    const existingItem = state.listItems.find(item => item.id === id)

    if(existingItem.quantity === 1){
     state.listItems =   state.listItems.filter(item => item.id !== existingItem.id)
    }else{
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price 
    }
state.totalQuantity--

    },
    showProducts(state){
 
            state.show = !state.show
        
    }
  },
});

export const cartActions = CartSlice.actions

export default CartSlice