import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import { createRestaurant } from "../../store/restaurant";
import './RestaurantForm.css';

function RestaurantFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const history = useHistory();
//   const [errors, setErrors] = useState([]);

  if (!sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRestaurant = {
        userId: sessionUser.id,
        name,
        address,
        city,
        state,
        country,
        zipcode,
        phoneNumber
    }

    // dispatch(createRestaurant(newRestaurant))

    let submittedRest = dispatch(createRestaurant(newRestaurant))
        console.log("created listing:", submittedRest)
        if (submittedRest) {
            history.push(`/menu/${sessionUser.id}`)
        }

    // if (password === confirmPassword) {
    //   setErrors([]);
    //   return dispatch(sessionActions.signup({ email, username, password }))
    //     .catch(async (res) => {
    //       const data = await res.json();
    //       if (data && data.errors) setErrors(data.errors);
    //     });
    // }
    // return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form className="editItemForm" onSubmit={handleSubmit}>
      <ul>
        {/* {errors.map((error, idx) => <li key={idx}>{error}</li>)} */}
      </ul>
      <label>
        Restaurant Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Address
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>
      <label>
        City
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>
      <label>
        State
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      </label>
      <label>
        Country
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <label>
        Zip Code
        <input
          type="numeric"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          required
        />
      </label>
      <label>
        Phone Number
        <input
          type="numeric"
          value={phoneNumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RestaurantFormPage;
