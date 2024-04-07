import { useState, useEffect } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {

    const [algoProblem, setAlgoProblem] = useState('');

    useEffect(() => {
        axios.get("https://leetcode.com/graphql")
            .then((res) => {
                console.log(res.data);
                setAlgoProblem(res.data); // need to change this dynamically 
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (<>
        <Header />
        <div>
            <h1>Choose your Algorithm!</h1>
            <Link to="/algos">
                <Button>Start your Challenge!</Button>
            </Link>
        </div>
    </>)
}


export default Home;