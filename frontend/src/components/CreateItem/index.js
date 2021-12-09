import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import { addnewItem } from "../../store/restaurant";
import './CreateItem.css';

function CreateItem() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    //   const [errors, setErrors] = useState([]);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

//   if (!sessionUser) return <Redirect to="/" />;


  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
        menuId: sessionUser.id,
        category,
        title,
        description,
        price
    }

    // dispatch(createRestaurant(newRestaurant))

    let submittedRest = dispatch(addnewItem(newItem))
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
      Category
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
    </label>
    <label>
      Title
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
    </label>
    <label>
      Description
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
    </label>
    <label>
      Price
      <input
        type="decimal"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
    </label>
    <button type="submit">Submit</button>
  </form>
  );
}

export default CreateItem;
