import {useState} from 'react';
import axios from 'axios';
const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      
    })
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7002/api/users', formData);
      alert('User saved to DB!');
      window.location.href='/Home'
    } catch (err) {
      console.error(err);
    }
  }
return (
    <div className='max-w-md mx-auto p-6 rounded-xl text-white shadow-md mt-10 bg-gradient-to-br from-[#001f3f] via-[#6a0dad] to-white'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Sign Up</h2>
        <form onSubmit={handleSubmit} className ='space-y-4'>
            <div>
                <label className ="block text-sm font-medium mb-1">First Name</label>
                <input 
                type="text"
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#001f3f]-400'
                placeholder='First Name'
                required
                />
            </div>
            <div>
                <label className ="block text-sm font-medium mb-1">Last Name</label>
                <input 
                type="text"
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#001f3f]-400'
                placeholder='Last Name'
                required
                />
            </div>

            <div>
                <label className ="block text-sm font-medium mb-1">Email</label>
                <input 
                type="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#001f3f]-400'
                placeholder='Email'
                required
                />
            </div>

            <div>
                <label className ="block text-sm font-medium mb-1">Password</label>
                <input 
                type="password"
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#001f3f]-400'
                placeholder='Password'
                required
                />
            </div>

            <button type="submit" className='w-full bg-[#001f3f] text-white font-semibold py-2 rounded-md hover:bg-[#001f3f]-600 transition duration-200 cursor-pointer'>
                Create Account
            </button>
            <p className='text-sm text-center text-white'>
                Already have an account? <a href="/signin" className='text-[#001f3f] font-semibold'>Sign In</a>
            </p>
        </form>
    </div>
)
}
export default SignupForm;  