import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Form from '../components/Form';


const Edit = (props) => {

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

    if (!oneBook) return <h3>Please Wait..</h3>
    return (<>
        <Header page={"Update " + oneBook.title} />
        <Form method="put" action={"/" + id} book={oneBook} />
    </>);
};

export default Edit;