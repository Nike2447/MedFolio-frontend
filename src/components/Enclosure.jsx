import React, { useState } from 'react';
import FileList from './FileList';
import axios from "axios";
import './Styling/main.css'
import { Link } from 'react-router-dom';
import {storage} from '../firebase'
import {ref, uploadBytes} from 'firebase/storage'
import {v4} from 'uuid'

function Enclosure() {
  const [files, setFiles] = useState([]);

  const handleAddFile = (event) => {
    const newFiles = [...files];
    newFiles.push({
      preview: URL.createObjectURL(event.target.files[0]),
      name: event.target.files[0].name,
      type: event.target.files[0].type,
      size: event.target.files[0].size,
    });
    setFiles(newFiles);
  };

  const handleDeleteFile = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleUpdateFile = async (index, event) => {
    const fileData = new FormData();
    fileData.append("file", event.target.files[0]);
    try {
      const response = await axios.post("/api/files", fileData);
      const newFiles = [...files];
      newFiles[index] = {
        preview: URL.createObjectURL(event.target.files[0]),
        name: response.data.name,
        type: response.data.type,
        size: response.data.size,
      };
      setFiles(newFiles);
    } catch (error) {
      console.log(error);
    }
  };

  const renderdatabase=()=>{

  };

  const uploadData = ()=>{
    if(files==null) return;
    const fileref = ref(storage,`files/${files.name + v4()}`)
    uploadBytes(fileref, files)
    .then(()=>{
      alert("Successfully uploaded!")    
    })


  }
  return (
    <div>
      <h1 class='title'>Staging Area</h1>
      <div className="enclosure">
        <FileList files={files} />
        <div className="enclosure-options">
          <input type="file" name="file" id="file" onChange={handleAddFile} class="inputfile" />
          <label for="file">Choose a file</label>
          <button class="button" onClick={() => handleDeleteFile(0)}>Delete</button>
          <label htmlFor="update-file">
            <input type="file" id="update-file" onChange={(event) => setFiles(event.target.files[0])} style={{ display: 'none' }} />
            <button class="button" onClick={uploadData}>Update</button>
          </label>
        </div>
        <Link to="/List"><button class="button-1" onClick={() => renderdatabase}>Open Reports</button></Link>
      </div>
    </div>
  );
}

export default Enclosure;
