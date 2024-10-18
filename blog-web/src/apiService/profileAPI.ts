import axios from "axios";

export const createProfile = async (data: any) => {
    console.log(data, "data.............");
    return (await axios.post("http://127.0.0.1:8000/api/profile", data)).data;
}

export const getProfiles = async () => {
    return (await axios.get("http://127.0.0.1:8000/api/profile")).data;
}

export const getProfile = async (id: any) => {
    // console.log(id, "api");
    return (await axios.get(`http://127.0.0.1:8000/api/profile/${id}`)).data;
}

export const updateProfile = async (data: any) => {
    const { id, formData } = data;
    console.log(id, "api id calll..........");
    console.log(formData, "api formdata calll..........");
    const response = await axios.put(`http://127.0.0.1:8000/api/profile/${id}`, formData);

    console.log(response.data, "response data api.....");

    return response.data;
}

export const deleteProfile = async (id: any) => {
    const response = await axios.delete(`http://127.0.0.1:8000/api/profile/${id}`);
    return response.data;
}

