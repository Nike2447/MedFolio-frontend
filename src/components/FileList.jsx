import React from 'react';

function FileList({ files }) {
  return (
    <div className="enclosure-content">
      {files.map((file, index) => (
        <div className="file-item" key={index}>
          <div className="file-item-preview">
            <img src={file.preview} alt={file.name} />
          </div>
          <div className="file-item-details">
            <div className="file-item-name">{file.name}</div>
            <div className="file-item-type">{file.type}</div>
            <div className="file-item-size">{file.size} bytes</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FileList;
