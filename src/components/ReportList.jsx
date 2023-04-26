import React from 'react'
import './Styling/List.css'
import { Link } from 'react-router-dom';

const fileList = [
    'file1.jpg',
    'file2.png',
    'file3.docx',
    'file4.pdf'
  ];

const ReportList = () => {
  return (
    <div className="file-list-container">
      <h2>Files in Database</h2>
      <ul className="file-list">
        {fileList.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
      <Link to="/main"><button className="download-button">Go Back</button></Link>
    </div>
  )
}

export default ReportList