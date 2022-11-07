import Axios from "axios";

const basepath = process.env.REACT_APP_API_BASE_PATH;

///Collecting Notes Data from Backend

export const getNotes = async () => {
  const notesReceived = await Axios.get(basepath + "/notesget")
    .then((res) => {
      console.log("Success in API/GetNotes/notesData");
      return res.data;
    })
    .catch((err) => {
      console.log("Error", err.message);
    });
  return notesReceived;
};

///Sending Notes to Backend

export const postNotes = async (title, content) => {
  const notesSender = await Axios.post(basepath + "/notespost", {
    title: title,
    content: content,
  });
  return notesSender();
};
