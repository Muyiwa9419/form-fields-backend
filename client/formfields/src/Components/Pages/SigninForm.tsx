import { useState } from 'react';

const SigninForm = () => {
    const [formData, setFormData] = useState({
        FirstName: '',
        email: '',
        password: '',
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    }

    return (
        <div className='max-w-md mx-auto p-6 rounded-xl shadow-md mt-10 bg-gradient-to-br from-[#001f3f] via-[#6a0dad] to-white'>
           <h2 className='text-2xl font-bold mb-4 text-center'>Sign In</h2>
           <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label className='block text-sm font-medium mb-1'>First Name</label>
                    <input
                        type="text"
                        name='FirstName'
                        value={formData.FirstName}
                        onChange={handleChange}
                        className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#001f3f]-400'
                        placeholder='First Name'
                        required
                    />
                </div>

                <div>
                    <label className='block text-sm font-medium mb-1'>Email</label>
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
                    <label className='block text-sm font-medium mb-1'>Password</label>
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
                    Sign In
            </button>
                <p className='text-sm text-center mt-4'>
                    Don't have an account? <a href="/signup" className='text-[#001f3f] font-semibold'>Sign Up</a>
                </p>
                
           </form>
        </div>
    );
}

export default SigninForm;