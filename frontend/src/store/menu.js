// import { csrfFetch } from './csrf';

// const ADD_MENU = 'menu/addMenu';

// const addMenu = (menu) => {
//  return {
//     type: ADD_MENU,
//     menu
//  }
// }


// export const createMenu = (newMenu) => async dispatch => {
//     const response = await csrfFetch('/api/menu', {
//         method: 'POST',
//         headers: {'Content-Type' : 'application/json'},
//         body: JSON.stringify(newMenu)
//     })
//     if (response.ok) {
//         const newMenu = await response.json();
//         dispatch(addMenu(newMenu));
//         return newMenu;
//     }
// }
