import React, { useEffect, useState } from 'react'
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPenToSquare, faTrashCan, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import NavigateBack from '../components/NavigateBack';
import Spinner from '../components/Spinner';
import { fetchAllTheBooks } from '../services/api';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // const fetchData = async () => {
            setLoading(true);
            fetchAllTheBooks()
            .then((data) => {
                setBooks(data);
                setLoading(false);
            })
        // }
        // fetchData();
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
                        { loading ?
                        ( 
                            <tr>
                                <td colSpan="5" className='spinner-cell'>
                                    <Spinner /> 
                                </td>
                            </tr>
                        )
                            : books.length > 0 ? (
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
                            ) : (
                                <tr>
                                <td colSpan="5" className='no-books'>
                                  <p>No Books Available</p>
                                </td>
                              </tr>                                                      
                            )}
                    </tbody>
                </table>
            </div>
            </div>
    )
}

export default Home;