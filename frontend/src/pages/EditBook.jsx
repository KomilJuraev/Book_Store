import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavigateBack from "../components/NavigateBack";
import InputForm from "../components/InputForm";
import Spinner from '../components/Spinner';

const EditBook = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [description, setDescription] = useState("");
    const [availability, setAvailability] = useState("Available");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5555/books/${id}`)
        .then((res) => res.json())
        .then((data) => {
            const oneBook = data.book;
            setTitle(oneBook.title);
            setAuthor(oneBook.author);
            setPublishYear(oneBook.publishYear);
            setDescription(oneBook.description);
            setAvailability(oneBook.availability);
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        })
        .catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }, [id])

    function handleUpdate(e) {
        e.preventDefault();
        const bookInfo = {
            title, 
            author, 
            publishYear,
            description,
            availability
        }

        fetch(`http://localhost:5555/books/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookInfo)
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            navigate('/books')
        })
        .catch((err) => {
            console.log(err);
        })
    }
  
    return (
        <div>
            <NavigateBack path={'/books'}/>
            <div className="create-book-container">
                <div className="edit-book-title">
                    <h1>Edit A Book</h1>
                </div>
                { loading ? ( <Spinner /> )
                :(<InputForm
                        handleSubmit={handleUpdate}
                        title={title}
                        setTitle={setTitle}
                        author={author}
                        setAuthor={setAuthor}
                        publishYear={publishYear}
                        setPublishYear={setPublishYear}
                        description={description}
                        setDescription={setDescription}
                        availability={availability}
                        setAvailability={setAvailability}
                    />)
                }
            </div>
        </div>
    )
}

export default EditBook;