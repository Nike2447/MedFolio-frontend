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
      <h2 className='font-poppins text-[30px] text-white border-[4px] flex'>REPORTS</h2>
      <ul className="file-list font-poppins">
        {fileList.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
      <Link to="/main"><button className="download-button font-poppins">Go Back</button></Link>
    </div>
  )
}

export default ReportList