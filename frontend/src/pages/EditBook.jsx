import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavigateBack from "../components/NavigateBack";
import InputForm from "../components/InputForm";
import Spinner from '../components/Spinner';
import { fetchABook } from '../services/api'; 
import { editABook } from '../services/api';

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
        const fetchData = async () => {
            setLoading(true);
            const data = await fetchABook(id);
            setTitle(data.title);
            setAuthor(data.author);
            setPublishYear(data.publishYear);
            setDescription(data.description);
            setAvailability(data.availability);
            setTimeout(() => {
                setLoading(false);
            }, 1000)    
    }
    fetchData();
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
        editABook(id, bookInfo);
        navigate('/books')
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