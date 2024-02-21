"use client";
import { useEffect, useState } from 'react';
import Loader from '../profile/components/Loader';
import { RiArrowRightDoubleLine } from '@remixicon/react';
import Navbar from '../profile/components/Navbar';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const username = localStorage.getItem('username');
  const [profileImage, setProfileImage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/profile/${username}`);
        if (response.ok) {
          const userData = await response.json();
          setUserData(userData);
          console.log(userData);

          // Set profile image if imagePath exists in userData
          if (userData.imagePath) {
            setProfileImage(userData.imagePath);
          }
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]); // Add username to dependency array to ensure useEffect runs when username changes

  if (!userData) {
    return <Loader />;
  }

  const handleUpdateProfile = () => {
    router.push('/updateprofile');
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-10 p-8 bg-gradient-to-br from-purple-900 to-blue-900 flex flex-col items-center justify-center rounded-lg shadow-md font-mono">
        <h1 className="text-4xl font-bold mb-6 underline text-white">Your Profile</h1>
        {userData && (
          <div className="text-white">
            <div className="mb-4">
              <p className="text-lg m-3"><span className="font-bold">Username:</span> @{username}</p>
              <p className="text-lg m-3"><span className="font-bold">Name:</span> {userData.name}</p>
              <p className="text-lg m-3"><span className="font-bold">Email:</span> {userData.email}</p>
            </div>
            <div className="flex items-center justify-center">
              {profileImage && <img src={profileImage} alt={userData.name} className="w-32 h-32 rounded-full my-4 bg-black text-center" />}
            </div>
            <div className="mb-4">
              <p className="text-lg m-3"><span className="font-bold">Contact:</span> {userData.contact}</p>
              <p className="text-lg m-3"><span className="font-bold">Age:</span> {userData.age}</p>
              <p className="text-lg m-3"><span className="font-bold">Profession:</span> {userData.profession}</p>
            </div>
          </div>
        )}
        <button onClick={handleUpdateProfile} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center">
          Update Your Profile <RiArrowRightDoubleLine className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
