import { FaFileAlt } from "react-icons/fa";
import "./index.scss"
import AppFile from "./filetex";
import { FaPlus } from "react-icons/fa6";

function AppFileList({ files, onDrop }) {
    return (
        <div className="fileList">
            {files.map((v, i) => (
                    <div key={i} className="">
                        <FaFileAlt className="svg" />
                        <span className="file-name">{v.name.slice(0,10)}{v.name.slice(v.name.lastIndexOf("."))}</span>
                    </div>
                ))}


            <div className="">
                <AppFile onDrop={onDrop} textElement={
                    <div>

                        <span>
                            <FaPlus />
                            <br />
                            Add Files
                        </span>
                        <p>
                            (Upto 5 MB)
                        </p>
                    </div>
                } />

            </div>
        </div>
        
        
        )
        
    
}

export default AppFileList;