import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutationCreateProfile } from '../apiService/profileQuery';

export interface FormData {
    firstname: string;
    lastname: string;
    email: string;
    phonenumber: string;
    description: string;
    date_of_birth: string;
    date: string;
    image: File | null;
    age: 0;
}

const UserForm: React.FC = () => {
    const navigate = useNavigate();
    const { mutate: createProfile } = useMutationCreateProfile();
    const [formData, setFormData] = useState<FormData>({
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        description: '',
        date_of_birth: '',
        date: '',
        image: null,
        age: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log(formData);
        createProfile(formData);
        navigate('/');
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className='flex justify-between'>
                <h4 className="text-2xl font-bold"> Create blog</h4>
                <button onClick={() => navigate("/")} className="bg-black hover:bg-gray-800 text-white py-1 px-2">Back</button>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">User Information Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        name="phonenumber"
                        value={formData.phonenumber}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* DOB */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                        type="date"
                        name="date_of_birth"
                        value={formData.date_of_birth}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Image */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
                    />
                </div>

                {/* Age */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        min="0"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;

