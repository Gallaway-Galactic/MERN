import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const ViewOne = (props) => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [oneBook, setOneBook] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + id)
            .then(res => {
                console.log(res.data);
                setOneBook(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const deleteBook = () => {
        console.log("delete");
        axios.delete("http://localhost:8000/api/books/" + id)
            .then(res => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => console.log(err));
    };

    if (!oneBook) return <h3>Please Wait..</h3>
    return (
        <div>
            <Header page={oneBook.title}> </Header>
            <div>
                <h2>{oneBook.title}</h2>
                <h3>By {oneBook.author}</h3>
                <h3>Pages: {oneBook.pages}</h3>
                <h3>{oneBook.isAvailable ? "Available for Borrowing" : "Not Available for Borrowing"}</h3>
                <button onClick={deleteBook}>Borrow</button>
            </div>
        </div>
    );
};

export default ViewOne;