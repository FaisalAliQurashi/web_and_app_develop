import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./index.scss"


function AppFile({textElement,onDrop}) {
    
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div className="DropZone" {...getRootProps()}>
            <input {...getInputProps()} />
            {textElement}
        </div>
    )
}

export default AppFile;