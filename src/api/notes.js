import instance from ".";

const getAllNotes = async () => {
  const { data } = await instance.get("/notes");
  return data;
};

const getNote = async (noteId) => {
  const { data } = await instance.get(`/notes/${noteId}`);
  return data;
};

const createNote = async (noteInfo) => {
  const { data } = await instance.post("/notes", noteInfo);
  return data;
};

const updateNote = async (noteInfo) => {
  const { data } = await instance.put(`/notes/${noteInfo._id}`, noteInfo);
  return data;
};

const deleteNote = async (noteId) => {
  const { data } = await instance.delete(`/notes/${noteId}`);
  return data;
};

export { getAllNotes, createNote, updateNote, deleteNote, getNote };
