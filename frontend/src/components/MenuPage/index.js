import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import { getItems, deleteOneItem } from "../../store/restaurant"
import { createMenu } from "../../store/restaurant";
import './MenuPage.css';

function MenuPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state?.session?.user);
  const items = useSelector(state =>state.items.currentItems)
  const history = useHistory();
  const { menuId } = useParams();
//   const [errors, setErrors] = useState([]);

const itemsArray = Object.assign([], items)
useEffect(() => {
    dispatch(getItems(menuId))
}, [dispatch, menuId]) //added menuId

const handleDelete = (id) => {
    dispatch(deleteOneItem(id));
    history.push(`/menu/${menuId}`)
}
//   if (!sessionUser) return <Redirect to="/" />;


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newMenu = {
//         restaurantId: sessionUser.id
//     }

//     let submittedRest = dispatch(createMenu(newMenu))
//         if (submittedRest) {
//             history.push(`/menu/${sessionUser.id}`)
//         }
//   };



  return (
    <div>
        <h2>MENU</h2>
        <br />
        {itemsArray.map(items => {
            return <div className='item-div' >
                        <div className='item-title'>{items.title}</div>

                        <div className='item-description'>{items.description}</div>

                        <div className='item-price'>${items.price}</div>
                        <span className="twoButtonsED">
                            <button><a className="fas fa-pen fa-1x" id="editIcon" href={`/editItem/${items.id}`}></a></button>
                            <button className="fas fa-trash fa-1x" id="editTrash" onClick={() => handleDelete(items.id)}></button>
                        </span>

                        <br />
                    </div>

        })}
        <button className="addItem"><NavLink to="/newItem">Add Item</NavLink></button>
        {/* <form onSubmit={handleSubmit}>
            <h3>Add new menu</h3>
            <button type="submit">New Menu</button>
        </ form> */}
        <br />
    </div>
        )
 }

export default MenuPage;
