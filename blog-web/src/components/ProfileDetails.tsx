import { useParams } from "react-router-dom"
import { useQueryGetProfile } from "../apiService/profileQuery";

const ProfileDetails = () => {
    const { id } = useParams();
    console.log(id, "useparams before");
    const { data } = useQueryGetProfile(id);
    console.log(id, "useparams");
    console.log(data?.data);


    return (
        // 
        <>
            <div>{data?.data.firstname}</div>
            <div>{data?.data.lastname}</div>
            <div>{data?.data.email}</div>
            <div>{data?.data.phonenumber}</div>
            <div>{data?.data.age}</div>
            <div>{data?.data.date_of_birth}</div>
        </>
    )
}

export default ProfileDetails
