import React, { useState } from 'react';

const CreateNote = () => {
    const [title, setTitle] = useState("");
    const [post, setPost] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const payload = {
            title,
            post,
            category,
        };
        fetch("http://localhost:8080/notes/create", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => console.log(res))
             alert("note created succesfully")
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-4">Create Note</h3>
            <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="text"
                placeholder="Enter Post"
                value={post}
                onChange={(e) => setPost(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
                type="text"
                placeholder="Enter Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button
                onClick={handleSubmit}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Create Note
            </button>
        </div>
    );
};

export default CreateNote;
