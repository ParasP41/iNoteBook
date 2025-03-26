import { useState ,useEffect } from "react";
import NoteInput from "./Components/NoteInput.jsx";
import { NoteProvider } from './Context/UseNote.js';
import Card from './Components/Card.jsx';
import Navbar from "./Components/Navbar.jsx";
import Alert from './Components/Alert.jsx';
export default function App() {

  ///Function in iNoteBook

  const [note, setNote] = useState([]);

  const addNote = (note) => {
    setNote((prev) => [{ id: Date.now(), ...note }, ...prev])
  }
  const updateNote = (id, updatedNote) => {
    setNote((prevNotes) =>
      prevNotes.map((prevNote) =>
        prevNote.id === id ? { ...prevNote, ...updatedNote } : prevNote
      )
    );
  };
  const deleteNote = (id) => {
    setNote((prev) => prev.filter((prevNote) => prevNote.id !== id));
  };

  const [message,setMessage]=useState()
  const alertMessage = (mess)=>
  {
    setMessage(mess) 
  }


///local Storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('note'))
    if (todos && todos.length > 0) {
      setNote(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('note', JSON.stringify(note))
  }, [note])



  return (
    <NoteProvider value={{ note, addNote, updateNote, deleteNote,alertMessage }} >
      <Alert message={message} />
     <Navbar/>
     <NoteInput/>
      <div>
        <div className="w-full grid md:grid-cols-3 items-center">
          {note.map((value) => (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4  px-8 py-2">
              <Card  note={value} key={value.id} />
            </div>
          ))}
        </div>
      </div>
    </NoteProvider>

  );
}
