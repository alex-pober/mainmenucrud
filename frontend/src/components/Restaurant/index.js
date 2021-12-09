import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import { getRestaurant } from "../../store/restaurant"
import './Restaurant.css';

function Restaurant() {
    const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state?.session?.user);
  const items = useSelector(state =>state.items.undefined)
  const history = useHistory();
  console.log(id)
//   const [errors, setErrors] = useState([]);

const itemsArray = Object.assign([], items)

useEffect(() => {
    dispatch(getRestaurant(id))
}, [dispatch, id]) //added menuId

//   if (!sessionUser) return <Redirect to="/" />;

  return (
    <div>
        <h3>Restaurant Info</h3>
        <br />
        {itemsArray.map(items => {
            return <div className='res-all' >
                        <div className='res-name'>{items.name}</div>

                        <div className='res-address'>{items.address},</div>

                        <div className='res-city'>{items.city}, </div>

                        <div className='res-country'>{items.state} {items.zipcode}</div>

                        <div className='res-number'>{items.phoneNumber}</div>

                        <br />
                    </div>

        })}
    </div>
        )
 }

export default Restaurant;
