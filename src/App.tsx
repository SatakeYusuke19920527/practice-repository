import React, { FC, useEffect, useState } from 'react';
import './App.css';
import { useDropzone } from 'react-dropzone';

type FileType = {
  lastModified: number,
  lastModifiedDate: Date,
  name: string,
  path: string,
  size: number,
  type: string,
  webkitRelativePath: string
}

const App: FC = () => {
  const [files, setFiles] = useState<Array<any>>([])
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  console.log(files, 'file dnd check')

  useEffect(() => {
    console.log('in useEffect')
    setFiles(acceptedFiles)
    if (acceptedFiles.length !== 0) {
      console.log('open modal')
    }
  }, [acceptedFiles])

  return (
    <div className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      {
        files.map((data, index) => {
          return (
            <div key={index}>{data.name} / {data.size} kb</div>
          )
        })
      }
    </div>
  );
}

export default App;