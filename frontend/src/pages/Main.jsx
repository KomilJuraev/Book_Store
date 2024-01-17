import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    function navigatToBookList() {
        navigate('/books');
    }

    function navigateToCards() {
        navigate('/cards')
    }

    return (
        <div className="main-page-parent-container">
            <div className="main-option-container" id="book-list-opt" onClick={navigatToBookList}>
                <h2>Book List</h2>
            </div>
            <div className="main-option-container" id="book-card-opt" onClick={navigateToCards}>
                <h2>Book Cards</h2>
            </div>
        </div>
    )
}

export default Main;