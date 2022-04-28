import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./NotesList";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "21/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "28/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "30/04/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);
  const history = useHistory();
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const logout = () => {
    localStorage.removeItem("User");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("react-notes-app-data");
    history.push("/signin");
  };
  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>Notes</h1>
          <button className="button" onClick={logout}>
            Logout
          </button>
        </div>{" "}
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
        />
      </div>
    </div>
  );
};

export default Home;
