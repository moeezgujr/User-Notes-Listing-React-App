const Note = ({ text }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer"></div>
    </div>
  );
};

export default Note;
