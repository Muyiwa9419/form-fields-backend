export default function Home() {
    return (
    <section className="text-center py-24 px-6 bg-gradient-to-br from-[#001f3f] via-[#6a0dad] to-white">
        <h6 className="text-4xl md:text-6xl font-bold mb-4">Join us today!</h6>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-8">
            Start your journey with us <br /> <span className="text-purple-300">in just a few clicks</span>
        </p>

        <p className="mb-4">No credit card required. Cancel anytime.</p>
        <button type="submit" className='w-full bg-[#001f3f] text-white font-semibold py-2 rounded-md hover:bg-[#001f3f]-600 transition duration-200 cursor-pointer'>
                Create Account
            </button>
            <p className='text-sm text-center text-[#001f3f] mt-4'>
                Already have an account? <a href="/signin" className='text-[#001f3f] font-semibold'>Sign In</a>
            </p>
    </section>
    )
}
