const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('Type markdown here');
    const handleMarkdownChange = (event) => {
        const handleMarkdownChange = (event) => {
            setMarkdown(event.target.value);
        };
    };
    const data = [
        [{ name: 'John' }, { name: 'Jane' }],
        [{ name: 'Bob' }]
    ];
    const names = data.flatMap(array => array.map(obj => obj.name));
    return (
    // As an illustration, pull names out of the data array
    const names = ['John', 'Jane', 'Bob'];
    const nameList = names.map((name, index) => <p key={index}>{name}</p>);

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />

            <div>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>

            <div>
                {nameList}
            </div>
            {data.map((array) => array.map((obj) => obj.name)).flat()}
        </div>
    );
};
export default MarkdownEditor;
import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('Type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />

            <div>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;