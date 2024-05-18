import { useState, useCallback, useEffect } from "react";
import logo from "../../assets/logo.svg"
import "../home/style.scss"
import { GrTextAlignFull } from "react-icons/gr";
import { PiFilesLight } from "react-icons/pi";
import Apptext from "../../component/texArea";
import AppFile from "../../component/filetex";
import AppFileList from "../../component/filelist";
import { FaDownload } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { db, set, ref, onValue, remove, storage, storageref, uploadBytesResumable, getDownloadURL } from "../../assets/db";


function Home() {
    const [type, settype] = useState("text")
    const [textValue, settextValu] = useState("")
    const [isText, setisText] = useState(false)
    const [files, setfiles] = useState([])
    const onDrop = async acceptedFiles => {
        setfiles([...files, ...acceptedFiles]);
        let arr = [];
        for (var i=0; i < acceptedFiles.length; i++) {
            arr.push(uploadfile(acceptedFiles[i], i))
        }
        const allfiles = await Promise.all(arr)
        console.log('allfiles', allfiles)
    }
    const onchangessave = () => {
        set(ref(db, 'sharing/'), {
            text: textValue
        });
    }
    useEffect(() => {
        const starCountRef = ref(db, 'sharing');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            settextValu(data.text);
            if (data.text) {
                setisText(true)
            }
        })
    }, [])
    const cleartex = async () => {
        await remove(ref(db, 'sharing'))
        settextValu("")
        setisText(false)

    }
    const uploadfile = (file, i) => {
        return new Promise((resolve, reject) => {

            const fileref = storageref(storage, `files/files-${i}`);
            const uploadTask = uploadBytesResumable(fileref, file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    reject(error)
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);
                    });
                }
            );

        })
    }
    return (
        <div className="container">
            <div className="header-bar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="manu">
                    <ul>
                        <div className="li">How it works </div>
                        <div className="li">Download </div>
                        <div className="li">Upgrade </div>
                        <div className="li">Feedback </div>
                        <div className="main-btn">Login / Register</div>
                    </ul>
                </div>
            </div>
            <div className="main-card">
                <div className="side-bar">
                    <div onClick={() => { settype("text") }} className={type === "text" && "active"} style={type === "text" ? { color: "#765cff" } : { color: "#878787" }} >
                        <GrTextAlignFull size={30} />
                    </div>
                    <div onClick={() => { settype("files") }} className={type === "files" && "active"} style={type === "files" ? { color: "#765cff" } : { color: "#878787" }}>
                        <PiFilesLight size={40} />
                    </div>
                </div>
                <div className="card-container">
                    {type === "text"
                        ?
                        <div className="text-section">
                            <h1>Text</h1>
                            <div>
                                <Apptext
                                    value={textValue}
                                    onChange={(e) => {
                                        settextValu(e.target.value)
                                        setisText(false)
                                    }

                                    }
                                />

                            </div>
                            <div className="tex-butten">
                                {
                                    isText ?
                                        <button className="text-butten" onClick={(() => { navigator.clipboard.writeText(textValue) })} >Copy</button>
                                        :
                                        <button onClick={onchangessave} disabled={textValue ? false : true} className="text-butten" >Save</button>

                                }
                                <button onClick={cleartex} disabled={textValue ? false : true} className="text-clear">Clear</button>

                            </div>

                        </div>
                        :
                        <div className="file-section">
                            <div className="files-header">
                                <h1>Files</h1>

                                <div className="download">
                                    <FaDownload />
                                    Download All
                                </div>
                                <div onClick={() => { setfiles([]) }} className="delete">
                                    <AiOutlineDelete />
                                    Delete All
                                </div>
                            </div>
                            {files.length ?
                                <AppFileList files={files} onDrop={onDrop} />
                                :
                                <AppFile onDrop={onDrop} textElement={<div className="">
                                    <p>Drag and drop any files up to 2 files, 5Mbs each or <span>  Browse<br />
                                        Upgrade </span> to get more space</p>
                                </div>} />

                            }

                        </div>
                    }


                </div>
            </div>
        </div>
    )
}

export default Home;