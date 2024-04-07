import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Button = ({ method, action }) => {

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});


    const submitHandler = (e) => {
        e.preventDefault();

        axios[method]("http://https://leetcode.com/graphql/" + action)
            .then(res => {
                console.log(res.data);
                navigate("/algos");
            })
            .catch(err => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div onSubmit={submitHandler}>
            <button>Get an Algo</button>
        </div>
    );
};

export default Button;