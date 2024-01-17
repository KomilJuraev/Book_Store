import React, { useEffect, useState } from "react";
import '../style.css';
import { useParams } from 'react-router-dom';
import NavigateBack from "../components/NavigateBack";
import Spinner from '../components/Spinner';

const ShowBook = () => {

    const { id } = useParams();
    const [book, setBook] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5555/books/${id}`)
        .then((res) => res.json())
        .then((data) => {
            const oneBook = data.book;
            setBook(oneBook);
            console.log(oneBook);
                        setTimeout(() => {
                setLoading(false);
            }, 1000)
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }, [id])

    return (
        <div>
            <NavigateBack path={'/books'}/>
            <div className="book-info-container">
            <div className="book-info-hdr">
                <h1>Book Information</h1>
            </div>

                <div className="book-details">
                { loading ? (
                    <Spinner />
                ) : (
                    book ? (
                    <div>
                        <div className="each-book-info">
                            <label>Title: </label>
                            <p className="book-info-p">{book.title}</p>
                        </div>
                        <div className="each-book-info">
                            <label>Author: </label>
                            <p className="book-info-p">{book.author}</p>
                        </div>
                        <div className="each-book-info">
                            <label>Publushed Year: </label>
                            <p className="book-info-p">{book.publishYear}</p>
                        </div>
                        <div className="each-book-info">
                            <label>Description: </label>
                            <p className="book-info-p">{book.description}</p>
                        </div>
                        <div className="each-book-info">
                            <label>Availability: </label>
                            <p className="book-info-p">{book.availability}</p>
                        </div>
                    </div>
                    ) : (
                        <p>No book data available</p>
                    )
                    )}
                </div>
         
        </div>
        </div>
    )
}

export default ShowBook;