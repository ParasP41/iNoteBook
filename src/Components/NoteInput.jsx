import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import useNote from '../Context/UseNote';
export default function NoteInput() {

    let a = document.querySelector('html')
    const [isExpanded, setIsExpanded] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [mode, setMode] = useState(a.classList.contains('dark') ? 'dark' : 'light');
    const [toggleMode, setToggleMode] = useState(false)
    const handleExpand = () => setIsExpanded(true);
    const handlerMode = () => {
        if (mode === 'light') {
            a.classList.remove('light');
            a.classList.add('dark');
            setMode('dark');
            setToggleMode(true)
            alertMessage('Dark Mode Active');
        } else if (mode === 'dark') {
            a.classList.remove('dark');
            a.classList.add('light');
            setMode('light');
            setToggleMode(false)
            alertMessage('Light Mode Active');
        }
    };
    const { addNote,alertMessage } = useNote();
    const handleAddNote = (e) => {
        setIsExpanded(false);
        e.preventDefault();
        if(title ==="" && description ==="" )
        {
        return alert('Please enter a note');
        }
        else
        {
            addNote({ title: title, description: description });  
            setTitle('');
            setDescription('');
            alertMessage('Note Added successfully');
        }

        // console.log(title);
        // console.log(description);
    };


    return (
        <div>
                <div className='flex justify-center items-start p-4 mt-15'>
                    <div className="w-full max-w-lg bg-white dark:text-white dark:bg-gray-800 shadow-md border border-black rounded-lg p-3 relative">
                        <button onClick={handlerMode}
                            className="absolute top-3 right-3  text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                        >{
                                toggleMode ? (
                                    <MdLightMode onClick={handlerMode} className="w-5 h-5" />
                                ) : (
                                    <MdDarkMode onClick={handlerMode} className="w-5 h-5" />
                                )
                            }
                        </button>

                        {isExpanded && (
                            <input
                                type="text"
                                placeholder="Title"
                                className="w-full text-lg font-semibold outline-none mb-1 bg-transparent"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        )}

                        <textarea
                            placeholder={isExpanded ? "Describe your note..." : 'Take a Note...'}
                            className="w-full outline-none resize-none bg-transparent"
                            rows={isExpanded ? 3 : 1}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            onFocus={handleExpand}
                        />

                        {isExpanded && (
                            <div className="flex justify-end mt-2">
                                <button
                                    className="text-black hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-600"
                                    onClick={handleAddNote}
                                >
                                    Add Note
                                </button>
                            </div>
                        )}
                    </div>
                </div>
        </div>
    )
}
