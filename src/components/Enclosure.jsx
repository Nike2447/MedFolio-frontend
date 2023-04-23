import React, { useState } from 'react';
import FileList from './FileList';
import './Styling/main.css'


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

  const handleUpdateFile = (index, event) => {
    const newFiles = [...files];
    newFiles[index] = {
      preview: URL.createObjectURL(event.target.files[0]),
      name: event.target.files[0].name,
      type: event.target.files[0].type,
      size: event.target.files[0].size,
    };
    setFiles(newFiles);
  };

  return (
    <div className="enclosure">
      <FileList files={files} />
      <div className="enclosure-options">
        <input type="file" onChange={handleAddFile} />
        <button className='font-poppins text-white bg-gray-gradient mr-10' onClick={() => handleDeleteFile(0)}>Delete</button>
        <label htmlFor="update-file">
          <input type="file" id="update-file" onChange={(event) => handleUpdateFile(0, event)} style={{ display: 'none' }} />
          <button className='font-poppins text-white bg-gray-gradient'>Update</button>
        </label>
      </div>
    </div>
  );
}

export default Enclosure;