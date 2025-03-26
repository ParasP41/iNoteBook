import React, { useState, useEffect } from "react";
export default function Alert({ message }) {
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        setAlert(true); 
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    },[message])


return (
    <div>
        {alert && (
            <div
                className="fixed z-100 bottom-4 md:w-100 w-40 right-4 p-4 text-blue-800 bg-blue-100 rounded shadow-lg dark:bg-gray-800 dark:text-blue-400"
                role="alert"
            >
                <div className="text-sm font-medium">
                    {message}
                </div>
            </div>
        )}
    </div>
);
}
