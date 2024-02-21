// pages/update-profile.js
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../profile/components/Navbar';

const UpdateProfilePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    contact: '',
    profession: '',
    profileImage: null
  });

  const router = useRouter();

  const username = localStorage.getItem('username');

  useEffect(() => {
    // Fetch the user's current profile data and populate the form fields
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/profile/${username}`);
        if (response.ok) {
          const userData = await response.json();
          setFormData({
            name: userData.name,
            email: userData.email,
            age: userData.age,
            contact: userData.contact,
            profession: userData.profession,
            profileImage: userData.imagePath
          });
        } else {
          console.error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === 'profileImage') {
      const file = e.target.files[0];
      setFormData({ ...formData, profileImage: file });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('age', formData.age);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('contact', formData.contact);
      formDataToSend.append('profession', formData.profession);
      if (formData.profileImage) {
        formDataToSend.append('profileImage', formData.profileImage);
      }

      // Send a request to update the user's profile with all data
      const response = await fetch(`http://localhost:8080/api/v1/profile/${username}`, {
        method: 'POST',
        body: formDataToSend
      });

      console.log(response);

      if (response.ok) {
        // After successful update, navigate back to the profile page
        router.push('/profilepage');
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 p-8 bg-gradient-to-br from-purple-900 to-blue-900 flex flex-col items-center justify-center rounded-lg shadow-md font-mono">
        <h1 className="text-4xl font-bold mb-6 underline text-white">Update Your Profile</h1>
        <form onSubmit={handleSubmit} className="text-white">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-gray-800 rounded-md py-2 px-3 text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-gray-800 rounded-md py-2 px-3 text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block mb-2">Age:</label>
            <input type="text" id="age" name="age" value={formData.age} onChange={handleChange} className="bg-gray-800 rounded-md py-2 px-3 text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block mb-2">Contact:</label>
            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} className="bg-gray-800 rounded-md py-2 px-3 text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="profession" className="block mb-2">Profession:</label>
            <input type="text" id="profession" name="profession" value={formData.profession} onChange={handleChange} className="bg-gray-800 rounded-md py-2 px-3 text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="profileImage" className="block mb-2">Profile Image:</label>
            <input type="file" id="profileImage" name="profileImage" accept="image/*" onChange={handleChange} className="bg-gray-800 rounded-md py-2 px-3 text-white" />
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
