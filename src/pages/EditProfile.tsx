import { useState } from 'react';
import AccountButton from '../components/button/AccountButton';

export default function EditProfile() {
  const [formData, setFormData] = useState({
    name: 'Josef Yad',
    email: 'josef@gmail.com',
    currentPassword: '',
    newPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('Save changes:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 py-22"
      style={{ backgroundImage: 'url("/empty-bg.png")', backgroundSize: "100% 100%", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
      <div className="chalk-container">
        <div className="chalk-content">
          {/* Title */}
          <h1 className="text-center text-gray-800 text-3xl font-bold mb-6">Edit Profile</h1>

          {/* Profile Avatar and Upload */}
          <div className="flex items-center mb-8">
            <img src="/edit/edit.png" alt="Profile Avatar" className="w-20 h-20 rounded-full mr-4" />
            <AccountButton text="Upload New Picture" />
          </div>

          {/* Form fields */}
          <div className="space-y-6">
            {/* Your Name */}
            <div>
              <label className="block text-gray-800 text-sm font-medium mb-2">Your Name</label>
              <div className="chalk-input">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-600"
                  placeholder=""
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-800 text-sm font-medium mb-2">Email</label>
              <div className="chalk-input">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-600"
                  placeholder=""
                />
              </div>
            </div>

            {/* Current Password */}
            <div>
              <label className="block text-gray-800 text-sm font-medium mb-2">Current Password</label>
              <div className="chalk-input">
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-600"
                  placeholder="**********"
                />
              </div>
            </div>

            {/* Set New Password */}
            <div>
              <label className="block text-gray-800 text-sm font-medium mb-2">Set New Password</label>
              <div className="chalk-input">
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-600"
                  placeholder="**********"
                />
              </div>
            </div>

            {/* Save Changes button */}
            <div className="chalk-button mt-8">
              <button
                onClick={handleSave}
                className="w-full text-white py-3 font-semibold text-lg"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}