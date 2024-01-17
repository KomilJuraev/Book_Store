import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const InputForm = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="create-input">
                <label className="title-label">Title:</label>
                <input type="text" value={props.title} onChange={(e) => props.setTitle(e.target.value)} required />
            </div>
            <div className="create-input">
                <label className="author-label">Author:</label>
                <input type="text" value={props.author} onChange={(e) => props.setAuthor(e.target.value)} required />
            </div>
            <div className="create-input">
                <label className="publishyear-label">Published Year:</label>
                <input type="text" value={props.publishYear} onChange={(e) => props.setPublishYear(e.target.value)} required />
            </div>
            <div className="create-input">
                <label className="description-label">Description:</label>
                <textarea name="description" id="description" cols="20" rows="6"  value={props.description} onChange={(e) => props.setDescription(e.target.value)}></textarea>
            </div>
            <div className="create-input">
                <select name="availability" value={props.availability} onChange={(e) => props.setAvailability(e.target.value)}>
                    <option value="Available" selected>Available</option>
                    <option value="Sold">Sold</option>
                    <option value="Rented-Out">Rented-Out</option>
                </select>
            </div>
            <div className="create-input">
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </form> 
    );
}

export default InputForm;