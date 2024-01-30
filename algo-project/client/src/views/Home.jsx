import { useState, useEffect } from "react";
import Table from "../components/Table";
import Header from "../components/Header";
import axios from "axios";

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
            .then((res) => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (<>
    <Header page="Full Catalog"/>
    <Table books={books}/>
    </>)
}


export default Home;