import { useNavigate } from "react-router-dom"
import { useMutationDeleteProfile } from "../apiService/profileQuery";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UserCard = ({ profile }: any) => {
    const navigate = useNavigate();

    const { mutate: deleteprofile } = useMutationDeleteProfile();


    const deleteProfile = (id: number) => {
        deleteprofile(id);
    }
    return (
        <>
            <div className="w-72 bg-white border shadow-2xl rounded-sm">
                <div className="flex items-center justify-center">
                    <img className="w-full h-auto" src="https://picsum.photos/200" alt="" />
                </div>
                <div className="p-5">
                    <div className="flex flex-col">
                        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{profile.firstname} {profile.lastname}</h1>
                        <span className="font-bold">
                            Web Developer | Tech Enthusiast
                        </span>
                        <div className="font-normal">
                            Passionate about sharing insights on web development,
                            coding best practices, and the latest tech trends.
                            With experience in JavaScript, React, and Laravel
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <button className="flex py-1 px-3 font-bold bg-black text-white hover:bg-white hover:text-black border-2 border-black"
                            onClick={() => navigate(`profile/${profile.id}`)} >
                            Details
                        </button>
                        <div className="flex items-center justify-between gap-3">
                            <FaEdit size={20} className="hover:text-green-300"
                                onClick={() => navigate(`updateprofile/${profile.id}`)} />
                            <MdDelete size={20} className="hover:text-red-300"
                                onClick={() => deleteProfile(profile.id)} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard
