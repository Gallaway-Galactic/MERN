import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const Table = ({books}) => {
    const navigate = useNavigate();
    const viewPage = (id) => {
        navigate("/books/" + id);
    };
    const editPage = (id) => {
        console.log(id)
        navigate(`/books/${id}/update`);
    };

    return (
        <fieldset className="catalog">
            <legend >Books</legend>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Page Count</th>
                        <th>Available</th>
                        <th>Book Page</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => {
                        return (
                            <tr key={book._id}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.pages}</td>
                                <td>{book.isAvailable ? "Yes" : "No"} <button onClick={() => editPage(book._id)}>Edit</button></td>
                                <td><button onClick={() => viewPage(book._id)}>Details</button></td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </table>
        </fieldset>
    );
};

export default Table;