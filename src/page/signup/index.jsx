import React, { useState } from 'react'
import ticketz from '../../assets/tickitz.png'
import { Link, useNavigate } from 'react-router-dom'
import useApi from '../../helpers/useApi'
import { Show } from '../../helpers/toast'

function Signup() {
    const [form, setForm] = useState({})

    const navigate = useNavigate()
    const api = useApi()

    const inputChange = (e) => {
        const data = { ...form }
        data[e.target.name] = e.target.value
        setForm(data)
    }

    const register = () => {
        api({
            method: 'POST',
            url: '/users',
            data: form
        })
            .then(({ data }) => {
                Show('Registrasi Berhasil', 'success')
                setTimeout(() => {
                    navigate('/signin')
                }, 3050)
            })
            .catch((err) => {
                const axiosErr = err.response.data
                if (axiosErr.message !== undefined) {
                    Show(axiosErr.message, 'warning')
                } else if (axiosErr.error !== undefined) {
                    Show(axiosErr.error, 'error')
                }
            })
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
                        <h1 className="lg:text-5xl md:text-4xl text-2xl font-medium mb-3">Sign Up</h1>
                        <p className="text-gray-400">Fill your additional details</p>
                        <div className="form-control w-full max-w-lg mt-10">
                            <label className="label">
                                <span className="label-text">First Name</span>
                            </label>
                            <input type="text" name="firstname" placeholder="Write your first name" className="input input-bordered w-full max-w-lg" onChange={inputChange} />
                            <label className="label">
                                <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" name="lastname" placeholder="Write your last name" className="input input-bordered w-full max-w-lg" onChange={inputChange} />
                            <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" name="username" placeholder="Write your username" className="input input-bordered w-full max-w-lg" onChange={inputChange} />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Write your email" className="input input-bordered w-full max-w-lg" onChange={inputChange} />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Write your password" className="input input-bordered w-full max-w-lg" onChange={inputChange} />
                        </div>
                        <div className="bottom mt-10 text-center">
                            <button className="btn btn-block btn-primary" onClick={register}>
                                Sign Up
                            </button>
                            <div className="mt-4">
                                Already have account ?{' '}
                                <Link to="/signin" className="text-primary underline">
                                    Sign in
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
