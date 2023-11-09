import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    favourite: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id == action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeFromCart;
    },

    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id == action.payload.id
      );
      itemInCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id == action.payload.id
      );
      if (itemInCart.quantity == 1) {
        const removeFromCart = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeFromCart;
      } else {
        itemInCart.quantity--;
      }
    },

    // Favourite reducer

    addToFavourite: (state, action) => {
      const itemInFavourite = state.favourite.find(
        (item) => item.id == action.payload.id
      );
      if (itemInFavourite) {
        Alert.alert("Item is in");
      } else {
        state.favourite.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromFavourite: (state, action) => {
      const removeFromCart = state.favourite.filter(
        (item) => item.id !== action.payload.id
      );
      state.favourite = removeFromCart;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  addToFavourite,
  removeFromFavourite,
} = cartSlice.actions;

export default cartSlice.reducer;
