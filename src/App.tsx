import React, { FC } from 'react';
import './App.css';
import { useDropzone } from 'react-dropzone';

const App: FC = () => {

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  console.log(acceptedFiles, 'file dnd check')

  return (
    <div className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  );
}

export default App;