import "./index.scss"

function Apptext({value,onChange}){
    return(
        <textarea value={value} onChange={onChange}  className="text-area" placeholder="Type Something..."></textarea>
    )
}

export default Apptext;