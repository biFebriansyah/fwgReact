import React, { useState } from 'react'
import Header from '../../components/header'
import img from '../../assests/image/card3.png'
import useApi from '../../helpers/useApi'
import { Link, useNavigate } from 'react-router-dom'
import { Show } from '../../helpers/toast'

function Profile() {
    const [form, setForm] = useState({})

    const navigate = useNavigate()
    const api = useApi()

    const inputChange = (e) => {
        const data = { ...form }
        data[e.target.name] = e.target.value
        setForm(data)
    }

    return (
        <>
            <Header />
            <section className="bg-graysmoth min-h-screen">
                <div className="mx-auto h-full flex flex-col max-w-7xl items-center justify-center p-5 py-10">
                    <div className="flex w-full h-[50rem] bg-white">
                        <div className="flex w-[55%] flex-col bg-cover bg-slate-400 items-center justify-center">
                            <img className="sm:h-auto" src={img} alt="tickets" />
                            <p className="text-white mt-2">@bukanebi</p>
                            <button class="btn btn-sm btn-white w-32 mt-5">Change Pic</button>
                        </div>
                        <div className="flex flex-1 flex-col justify-center px-10">
                            <h1 className="lg:text-5xl md:text-4xl text-2xl font-medium mb-3">Profile</h1>
                            <p className="text-gray-400">You can edit your data here</p>
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
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Write your email" className="input input-bordered w-full max-w-lg" onChange={inputChange} />
                            </div>
                            <div className="bottom mt-10 text-center">
                                <button className="btn btn-block bg-slate-400">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
