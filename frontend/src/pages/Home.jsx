import React, { useEffect, useState } from 'react'
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPenToSquare, faTrashCan, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import NavigateBack from '../components/NavigateBack';
import Spinner from '../components/Spinner';

const Home = () => {
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
                <div className='book-list-prnt-div'>
                <h1 className='book-list-hdr'>Books List</h1>
                <table className='book-table'>
                    <thead className='book-table-header'>
                        <tr>
                            <th>Book Name</th>
                            <th>Author</th>
                            <th>Published Year</th>
                            <th>Availability</th>
                            <th><a className='add-icons' href="/books/create"><FontAwesomeIcon icon={faSquarePlus}/></a></th>
                        </tr>
                    </thead>
                    <tbody className='book-table-body'>
                        { loading ? ( <Spinner /> )
                            : (
                            books.map((book) =>(
                            <tr key={book._id}>
                                <td>
                                    {book.title}
                                 </td>
                                 <td>
                                    {book.author}
                                 </td>
                                 <td>
                                    {book.publishYear}
                                 </td>
                                 <td>
                                    {book.availability}
                                 </td>
                                 <td>
                                    <a className='action-icons' title='More Info' href={`/books/details/${book._id}`}><FontAwesomeIcon icon={faCircleInfo} /></a>
                                    <a className='action-icons' title='Edit' href={`/books/edit/${book._id}`}><FontAwesomeIcon icon={faPenToSquare} /></a>
                                    <a className='action-icons' title='Delete' href={`/books/delete/${book._id}`}><FontAwesomeIcon icon={faTrashCan} /></a>
                                </td>
                            </tr>                        
                            ))
                            )
                        }
                    </tbody>
                </table>
            </div>
            </div>
    )
}

export default Home;