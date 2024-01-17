import { React, useEffect, useState } from "react";
import NavigateBack from "../components/NavigateBack";
import Spinner from '../components/Spinner';

const Cards = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5555/books')
        .then((res) => res.json())
        .then((data) => {
            const returnedData = data.data;
            setBooks(returnedData);
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }, []);

    return (
        <div>
            <NavigateBack path={'/'}/>
            <div className="main-cards-container">
                {
                    loading ? ( <Spinner /> )
                    : ( books.map((book) =>(
                        <div className="each-card" key={book._id}>
                            <h3>
                                {book.title}
                             </h3>
                             <div className="card-info">
                                <label>Author: </label>
                                <p>
                                    {book.author}
                                </p>
                             </div>
                             <div className="card-info">
                                <label>Published: </label>
                                <p>
                                    {book.publishYear}
                                </p>
                             </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Cards;