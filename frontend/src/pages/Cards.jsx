import { React, useEffect, useState } from "react";
import NavigateBack from "../components/NavigateBack";
import Spinner from '../components/Spinner';
import { fetchAllTheBooks } from '../services/api';

const Cards = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await fetchAllTheBooks();
            setBooks(data);
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        }
        fetchData();
    }, []);

    return (
        <div>
            <NavigateBack path={'/'}/>
            <div className="main-cards-container">
                {
                    loading ? ( <Spinner /> )
                    : books.length > 0 ? ( books.map((book) =>(
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
                ) : (
                    <div className='no-books-cards'>
                        <p>No Books Available</p>   
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cards;