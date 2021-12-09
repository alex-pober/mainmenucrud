import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { createRestaurant, createMenu } from "../../store/restaurant";
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

  if (!sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
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

    const newMenu = {
      restaurantId: sessionUser.id,
  }

    let submittedRest = await dispatch(createRestaurant(newRestaurant))
    if (submittedRest) {
      history.push(`/menu/${sessionUser.id}`)
    }

    dispatch(createMenu(newMenu))
  };

  return (
    <form className="editItemForm" onSubmit={handleSubmit}>
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
          required
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
