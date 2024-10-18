import { useNavigate } from "react-router-dom";
import { useQueryGetProfiles } from "../apiService/profileQuery";
import UserCard from "./UserCard";

const Users = () => {
    const navigate = useNavigate();

    const { data, error, isError } = useQueryGetProfiles();
    if (isError) {
        console.error("Error fetching data:", error);
    }
    return (
        <>
            <div className="h-full w-full">
                <div className="h-[10%] w-full flex items-center justify-end pr-6">
                    <button onClick={() => navigate("/addprofile")}
                        className="bg-black hover:bg-white text-white py-2 px-3 flex items-center
                        text-sm font-medium text-center hover:border-2 hover:font-bold hover:text-black hover:border-black ">
                        Create
                    </button>
                </div>
                <div className="flex flex-wrap gap-6 px-8 flex-grow h-auto w-full">
                    {data?.data.map((profile: any) => (
                        <UserCard key={profile.id} profile={profile} />
                    ))}
                </div>
            </div>


        </>
    )
}

export default Users
