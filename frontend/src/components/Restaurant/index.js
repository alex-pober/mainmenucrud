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
  let re = /\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})/g;
  let subst = '$1 $2-$3';
  console.log(id)
//   const [errors, setErrors] = useState([]);

const itemsArray = Object.assign([], items)

useEffect(() => {
    dispatch(getRestaurant(id))
}, [dispatch, id]) //added menuId

//   if (!sessionUser) return <Redirect to="/" />;

  return (
    <div className='res-all'>
        <br />
        {itemsArray.map(items => {
            return <div>
                      <div className="qrcode">
                        <div className='res-name'>{items.name}</div>
                        <div className='res-name'> Digital Menu</div>
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?data=https://mainmenucrud.herokuapp.com/menu/${id}&amp;size=100x100`} alt="" title="" />
                        <div className='res-name'> Scan QR Code</div>
                      </div>
                        <h3>Located At</h3>
                        <div className='res-address'>{items.address},</div>
                        <div className='res-city'>{items.city}, {items.state} {items.zipcode}</div>
                        <div className='res-number'>{items.phoneNumber.replace(re, subst)}</div>
                      </div>

        })}
    </div>
        )
 }

export default Restaurant;
