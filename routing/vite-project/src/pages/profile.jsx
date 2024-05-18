import { useLocation, useParams, useSearchParams } from "react-router-dom";

function Profile() {
    const location = useLocation();
    const { user } = useParams();
    let [searchp, setseachp] = useSearchParams();
    // console.log(location)
    console.log(searchp.get("name"))

    return (
        <div className="">
            <h1>Profile Page ({user})</h1>
        </div>
    )
}

export default Profile;