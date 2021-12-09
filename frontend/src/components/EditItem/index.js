import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import { getEditItems, editItems } from "../../store/restaurant";
import './EditItem.css';

function EditItem() {
    const dispatch = useDispatch();
    // const sessionUser = useSelector(state => state.session.user);
    const { id } = useParams();
    const history = useHistory();

    // useEffect(() => {
        //     dispatch(getEditItems(menuId))
        // }, [dispatch])

        useEffect(() => {
            dispatch(getEditItems(id))
        }, [dispatch, id])
        let items = useSelector(state => state?.items)
        if (items) {items=items[id]}


    const [category, setCategory] = useState(items?.category);
    const [title, setTitle] = useState(items?.title);
    const [description, setDescription] = useState(items?.description);
    const [price, setPrice] = useState(items?.price);
    const [menuId, setMenuId] = useState(items?.menuId)
    console.log(items)

    useEffect(() => {
        if (items) {
            setCategory(items?.category)
            setTitle(items?.title)
            setDescription(items?.description)
            setPrice(items?.price)
            setMenuId(items?.menuId)
        }
    }, [items])

    const updateCategory = (e) => setCategory(e.target.value);
    const updateTitle = (e) => setTitle(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateItem = {
            id,
            menuId,
            category,
            title,
            description,
            price
        }
        let updatedItem = await dispatch(editItems(updateItem))
        if (updatedItem) {
            history.push(`/menu/${updatedItem.menuId}`)
        }
    }

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
            onChange={updateCategory}
          />
        </label>
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={updateTitle}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={updateDescription}
          />
        </label>
        <label>
          Price
          <input
            type="decimal"
            value={price}
            onChange={updatePrice}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      );
}

export default EditItem;
