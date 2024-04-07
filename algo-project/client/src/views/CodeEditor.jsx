import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import MonacoEditor from 'react-monaco-editor';


const CodeEditor = (props) => {
    const navigate = useNavigate();
    const [code, setCode] = useState('');
    const { id } = useParams();
    const [submittedCode, setSubmittedCode] = useState('');
    const editorRef = useRef(null);
    const [problem, setProblem] = useState('');
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        axios.get(`https://leetcode.com/graphql/${id}`) // need to randomize id with the useParams
            .then(res => {
                console.log(res.data);
                setCode(res.data); // add the .key for the solutions here
                setProblem(res.data) // add the .key for the word problem
            })
            .catch(err => console.log(err));
            const time = setInterval(() => {
                setTimer(prevTimer => prevTimer + 1);
            }, 1000);

            return () => clearInterval(time)
    }, [id]);


    
    const codeChangeHandler = (update, event) => {
        // handle code changes
        // can also update state if wanting to pass data anywhere
        setCode(update)
        console.log(update);
    };

    const submitHandler = () => {
        const currentCode = editorRef.current.editor.getValue();
        setSubmittedCode(currentCode);
        // put my comparison logic here. Compare to solutions provided by leetcode GraphQL
        console.log(currentCode)
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <Header />
            <div className="bg-white p-6 rounded-lg shadow-lg mt-4 w-96">
                <h1 className="text-2xl font-bold mb-4">coding page</h1>
                <div className="mb-4">
                    <h2 className="text-xl font-bold">Your Algo:</h2>
                    <p>{problem}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-bold">Timer: {timer} </h2>
                </div>
                <MonacoEditor
                    ref={editorRef}
                    width="800"
                    height="600"
                    language="javascript"
                    theme="vs-dark"
                    onChange={codeChangeHandler}
                />
                <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700" onClick={submitHandler}>Submit</button>
            </div>
        </div>
    );
};

export default CodeEditor;
