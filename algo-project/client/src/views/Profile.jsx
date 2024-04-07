import { useState, useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

const Profile = () => {

    useEffect(() => {
        axios.get("https://leetcode.com/graphql")
            .then((res) => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (<>
    <Header />
    <div>
        <h1>Profile here</h1>
    </div>
    </>)
}


export default Profile;