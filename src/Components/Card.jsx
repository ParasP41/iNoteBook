import React, { useState, useEffect } from "react";
import { MdDelete, MdFileDownload } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import useNote from "../Context/UseNote";
import { IoCheckmarkDone } from "react-icons/io5";
export default function Card({ note }) {

    const { updateNote, deleteNote,alertMessage } = useNote();
    const [title, setTitle] = useState(note.title);
    const [description, setDescription] = useState(note.description);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setTitle(note.title);
        setDescription(note.description);
    }, [note])

    const handleDelete = () => {
        deleteNote(note.id);
        alertMessage("Noted deleted Successfully ")
    }

    const handleEdit = () => {
        updateNote(note.id, { title, description });
        alertMessage("Noted Edited Successfully")

    }

    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([`Title: ${title}\nDescription: ${description}`], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = `${title || "note"}.txt`;
        element.click();
        alertMessage("Noted Download Successfully")

    };


    return (
        <>
            <div className="cursor-pointer w-full border-1 md:min-w-[500px] max-w-[500px] bg-black break-inside-avoid">
                <div onClick={() => setIsModalOpen(true)} className="relative block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h2 className=" text-2xl font-bold tracking-tight text-black dark:text-gray-400">
                        {title || "Title"}
                    </h2>

                    <p className="text-black dark:text-gray-400">
                        {description || "Note"}
                    </p>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center md:mb-70 mb-40 backdrop-blur-sm bg-opacity-50 z-50">
                    <div className="relative p-6  bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 md:w-155 w-96">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                            <MdCancel className="w-5 h-5" />

                        </button>

                        <input
                            className="text-2xl font-bold outline-none tracking-tight text-black dark:text-white w-full p-2 bg-transparent"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            aria-label="Title"
                        />
                        <input
                            className="font-normal text-black outline-none dark:text-gray-400 w-full p-2 bg-transparent"
                            type="text"
                            placeholder="Note"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            aria-label="Note"
                        />
                        <div className="absolute bottom-2 right-2 flex space-x-2">
                           

                            <div className="relative inline-block group">

                                <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 ">
                                <IoCheckmarkDone onClick={handleEdit} className="w-5 h-5 " />
                            </button>
                                <div className="absolute left-0   p-1 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                    <p className="text-gray-700">Save</p>
                                </div>
                            </div>
                            <div className="relative inline-block group">

                            <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                                <MdDelete onClick={handleDelete} className="w-5 h-5 " />
                            </button>
                                <div className="absolute left-0   p-1 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                    <p className="text-gray-700">Delete</p>
                                </div>
                            </div>
                            <div className="relative inline-block group">

                            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 ">
                                <MdFileDownload onClick={handleDownload} className="w-5 h-5 " />
                            </button>
                                <div className="absolute left-0   p-1 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                    <p className="text-gray-700">Download</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
