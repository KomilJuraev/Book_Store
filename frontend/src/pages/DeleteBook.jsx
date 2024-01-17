import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavigateBack from "../components/NavigateBack";

function DeleteBook() {
    const { id } = useParams();
    const navigate = useNavigate();

    function handleDelete() {
        fetch(`http://localhost:5555/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            navigate('/books');
        })
        .catch((err) => {
            console.log(err);
        })
    }

    function goBack() {
        navigate('/books');
    }

    return (
        <div>
            <NavigateBack path={'/books'}/>
            <div className="delete-container">
                <h1>Are you sure you want to delete this book?</h1>
                <div className="btns-container">
                    <button className="yes-btn btn btn-danger" onClick={handleDelete}>Yes, Delete</button>
                    <button className="no-btn btn btn-primary" onClick={goBack}>No</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteBook;