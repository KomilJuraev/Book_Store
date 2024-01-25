import React, {useState} from "react";
import '../style.css';
import NavigateBack from "../components/NavigateBack";
import { useNavigate } from "react-router-dom";
import InputForm from "../components/InputForm";
import { postNewBook } from "../services/api";

const CreateBook = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [description, setDescription] = useState("");
    const [availability, setAvailability] = useState("Available");

    function handleSubmit(e) {
        e.preventDefault(); // Add this line
        const bookInfo = {
            title,
            author,
            publishYear,
            description,
            availability
        }
        const data = postNewBook(bookInfo);
        if(data.length > 0) {
            console.log("Created book data", data);
        } else {
            console.log("No data", data);
        }
        navigate('/books');
    }

    return (
        <div>
            <NavigateBack path={'/books'}/>
            <div className="create-book-container">
                <div className="create-title">
                    <h1>Create A New Book Page</h1>
                </div>
                    <InputForm
                        handleSubmit={handleSubmit}
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
                    />
            </div>
        </div>
    )
}

export default CreateBook;