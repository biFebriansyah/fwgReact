import React, { useState } from 'react'
import ticketz from '../../assets/tickitz.png'
import { Link } from 'react-router-dom'

function Signin() {
    const [form, setForm] = useState({})

    const inputChange = (e) => {
        const data = { ...form }
        data[e.target.name] = e.target.value
        setForm(data)
    }

    return (
        <section className="bg-graysmoth min-h-screen">
            <div className="mx-auto h-full flex flex-col max-w-7xl items-center justify-center p-5 py-10">
                <div className="flex w-full h-[50rem] bg-white">
                    <div className="flex w-[55%] flex-col bg-cover items-center bg-hero-signup justify-center">
                        <img className="sm:h-20" src={ticketz} alt="tickets" />
                        <h1 className="lg:text-4xl md:text-4xl text-2xl font-medium text-white">Wait, Watch, Now</h1>
                    </div>
                    <div className="flex flex-1 flex-col justify-center px-10">
                        <h1 className="lg:text-5xl md:text-4xl text-2xl font-medium mb-3">Sign In</h1>
                        <p className="text-gray-400">
                            Sign in with your data that you entered during <br />
                            your registration
                        </p>
                        <div class="form-control w-full max-w-lg mt-10">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Write your email" class="input input-bordered w-full max-w-lg" />
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Write your password" class="input input-bordered w-full max-w-lg" />
                        </div>
                        <div className="bottom mt-10 text-center">
                            <button class="btn btn-block btn-primary">Sign In</button>
                            <div className="mt-4">
                                Forgot your password ?{' '}
                                <Link to="/" className="text-primary underline">
                                    Reset Now
                                </Link>
                            </div>
                            <div className="mt-4">
                                Don't have an account ?{' '}
                                <Link to="/signup" className="text-primary underline">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signin
