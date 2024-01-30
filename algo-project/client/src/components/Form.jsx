import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Form = ({ method, action, book }) => {

    const navigate = useNavigate();
    const [title, setTitle] = useState(book.title ?? "");
    const [author, setAuthor] = useState(book.author ?? "");
    const [pages, setPages] = useState(book.pages ?? 0);
    const [isAvailable, setIsAvailable] = useState(book.isAvailable ?? true);
    const [errors, setErrors] = useState({});


    const submitHandler = (e) => {
        e.preventDefault();

        const tempBook = {
            title, author, pages, isAvailable
        };

        axios[method]("http://localhost:8000/api/books" + action, tempBook)
            .then(res => {
                console.log(res.data);
                navigate("/");
            })
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <form onSubmit={submitHandler}>
            <p>
                Title <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                {errors.title ? <p style={{ color: "red" }}>{errors.title.message}</p> : null}
            </p>
            <p>
                Author <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
                {errors.author ? <p style={{ color: "red" }}>{errors.author.message}</p> : null}
            </p>
            <p>
                Pages <input type="number" value={pages} onChange={e => setPages(e.target.value)} />
                {errors.pages ? <p style={{ color: "red" }}>{errors.pages.message}</p> : null}
            </p>
            <p>
                Available? <input type="checkbox" checked={isAvailable} onChange={e => setIsAvailable(e.target.checked)} />
            </p>
            <button>Submit</button>
        </form>
    );
};

export default Form;