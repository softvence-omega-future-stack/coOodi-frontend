import { useState } from 'react';
import { Link } from 'react-router';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 py-20">
      <div className="chalk-container">
        <div className="chalk-content">
          {/* Close button */}
          <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center transition">
            <img src="/xlogin.svg" alt="" />
          </button>

          {/* Eye icon */}
          <div className="flex justify-center mb-6">
            <img src="/login.svg" alt="Eye Icon" className="w-20 h-20" />
          </div>
          {/* Title */}
          <h1 className="text-center text-gray-800 text-3xl font-semibold mb-8">Login</h1>

          {/* Form fields */}
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-gray-800 text-sm font-medium mb-2">Email</label>
              <div className="chalk-input">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-600"
                  placeholder=""
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-800 text-sm font-medium mb-2">Password</label>
              <div className="chalk-input">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-600"
                  placeholder=""
                />
              </div>
            </div>

            {/* Remember me and Forgot password */}
            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 border-2 border-gray-800 rounded"
                />
                <span className="text-gray-800 text-sm font-medium">Remember me</span>
              </label>
              <a href="#" className="text-gray-800 text-sm underline font-medium">
                Forgot Password
              </a>
            </div>

            {/* Login button */}
            <div className="chalk-button mt-8">
              <button
                onClick={handleLogin}
                className="w-full text-white py-3 font-semibold text-lg"
              >
                Log in
              </button>
            </div>
          </div>

          {/* Sign up link */}
          <p className="text-center text-gray-800 text-sm mt-6">
            Don't have an account?{' '}
            <Link to="/signup" className="font-bold underline">
              Sign Up!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}