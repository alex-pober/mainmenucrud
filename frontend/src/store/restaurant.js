import { bindActionCreators } from 'redux';
import { csrfFetch } from './csrf';

const ADD_RESTAURANT = 'restaurant/addRestaurant';
const ADD_ITEM = 'restaurant/addItem'
const LOAD_ITEM = 'restaurant/loadItem'
const EDIT_SINGLE_ITEM = 'restaurant/editSingleItem'
const DELETE_ITEM = 'restaurant/deleteItem'
const LOAD_RESTAURANT = 'restaurant/loadRestaurant'

const addRestaurant = items => {
 return {
    type: ADD_RESTAURANT,
    payload: items
 }
}

const loadRestaurant = item => {
    return {
        type: LOAD_RESTAURANT,
        item
    }
}

const loadItem = items => {
    return {
       type: LOAD_ITEM,
       payload: items
    }
   }

const addItem = item => {
    return {
       type: ADD_ITEM,
       item
    }
   }

const editSingleItem = item => {
    return {
        type: EDIT_SINGLE_ITEM,
        item
    }

}

const deleteItem = item => {
    return {
        type: DELETE_ITEM,
        item
    }

}

   export const addnewItem = (newItem) => async dispatch => {
    const response = await csrfFetch('/api/createItem', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newItem)
    })
    if (response.ok) {
        const newItem = await response.json();
        dispatch(addItem(newItem));
        return newItem;
    }
}


export const createRestaurant = (newRestaurant) => async dispatch => {
    const response = await csrfFetch('/api/restaurant', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newRestaurant)
    })
    if (response.ok) {
        const newRestaurant = await response.json();
        dispatch(addRestaurant(newRestaurant));
        return newRestaurant;
    }
}

export const getItems = (itemId) => async dispatch => {
    const response = await fetch(`/api/menu/${itemId}`);

    if (response.ok) {
        const newRestaurant = await response.json();
        dispatch(addRestaurant(newRestaurant));
        return newRestaurant;
    }
}

export const getRestaurant = (id) => async dispatch => {
    const response = await fetch(`/api/restaurant/${id}`);

    if (response.ok) {
        const restaurantinfo = await response.json();
        dispatch(loadRestaurant(restaurantinfo));
        return restaurantinfo;
    }
}

export const getEditItems = (itemId) => async dispatch => {
    const response = await fetch(`/api/edititem/${itemId}`);

    if (response.ok) {
        const items = await response.json();
        dispatch(loadItem(items));
        return items;
    }
}

export const editItems = (item) => async dispatch => {
    const response = await csrfFetch(`/api/edititem/${item.id}`, {
        method: 'PUT',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(item)
    })
    if (response.ok) {
        const item = await response.json();
        dispatch(editSingleItem(item));
        return item;
    }
}

export const deleteOneItem = (itemId) => async dispatch => {
    const response = await csrfFetch(`/api/deleteItem/${itemId}`, {
        method: 'DELETE',
    })
    if (response.ok) {
        const item = await response.json();
        dispatch(deleteItem(item));
        return item;
    }
}

const initialState = {}

const itemsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {

      case ADD_RESTAURANT: {
        newState = Object.assign({}, state);
        newState.currentItems = action.payload;
        return newState;
      }

       case LOAD_ITEM: {
        const newState = { ...state }
        newState[action.payload.id] = action.payload;
        return newState;
       }

       case LOAD_RESTAURANT: {
        const newState = { ...state }
        console.log(action.item)
        newState[action.item.id] = action.item;
        return newState;
       }

       case EDIT_SINGLE_ITEM: {
        const newState = {
            ...state,
            [action.item.id]: action.item
        }
        return newState;
       }

       case DELETE_ITEM: {
           const newState = {...state};
           console.log(action.item)
           const currentItemIndex = newState.currentItems.findIndex((item) => item.id === action.item.id)
            newState.currentItems.splice(currentItemIndex, 1);
           newState.currentItems = newState.currentItems.slice()
           return newState;
       }

       case ADD_ITEM: {
           const newState = {...state}
           newState.currentItems.push(action.item.item)
           newState.currentItems = newState.currentItems.slice()
           return newState;
       }

      default:
        return state;
    }
  };

  export default itemsReducer;
