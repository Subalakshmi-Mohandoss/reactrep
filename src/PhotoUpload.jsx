// PhotoUpload.js
import React from 'react';
import { useDropzone } from 'react-dropzone';

const PhotoUpload = ({ onUpload }) => {
  const onDrop = (acceptedFiles) => {
    // Do something with the files, e.g., upload to a server
    onUpload(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
      <input {...getInputProps()} />
      <p>Drag & drop a photo here, or click to select one</p>
    </div>
  );
};

export default PhotoUpload;
