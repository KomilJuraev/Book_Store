import React, { useEffect, useState } from "react";
import '../style.css';
import { useParams } from 'react-router-dom';
import NavigateBack from "../components/NavigateBack";
import Spinner from '../components/Spinner';
import { fetchABook } from '../services/api'; 

const ShowBook = () => {

    const { id } = useParams();
    const [book, setBook] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
                setLoading(true);
                const data = await fetchABook(id);
                setBook(data);
                setTimeout(() => {
                    setLoading(false);
                }, 1000)    
        }
        fetchData();
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