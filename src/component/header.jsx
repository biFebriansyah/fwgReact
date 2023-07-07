import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { GrUserSettings } from 'react-icons/gr'
import { TbLogout } from 'react-icons/tb'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/reducer/user'

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg'
}

function Header() {
    const dispatch = useDispatch()
    const { isAuth } = useSelector((s) => s.users)

    return (
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-5">
            <div className="md:flex md:gap-x-12 items-center justify-between">
                <Link to="/">
                    <img className="md:h-12 h-10 md:w-auto" src={logo} alt="logo" />
                </Link>
                <div className="hidden md:flex md:gap-x-12">
                    <Link to="/" className="text-sm font-medium leading-6 text-gray-700 hover:text-gray-900">
                        Home
                    </Link>
                    <Link to="/movie" className="text-sm font-medium leading-6 text-gray-700 hover:text-gray-900">
                        List Movie
                    </Link>
                </div>
            </div>
            {isAuth ? (
                <div className="hidden lg:flex lg:justify-end">
                    <div className="navbar bg-base-100">
                        <div className="flex-none gap-2">
                            <div className="form-control">
                                <input type="text" placeholder="Search" className="input input-bordered input-sm w-full max-w-xs" />
                            </div>
                            <div className="dropdown dropdown-end">
                                <label className="btn btn-ghost btn-circle avatar">
                                    <div className="w-14 rounded-full">
                                        <img src={user.imageUrl} alt="profile" />
                                    </div>
                                    <Link to="#" className="justify-between">
                                        open
                                    </Link>
                                </label>
                                <ul tabindex="0" className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to="#" className="justify-between">
                                            profile
                                            <span className="pill">
                                                <GrUserSettings />
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="justify-between" onClick={() => dispatch(logout())}>
                                            Logout
                                            <span className="pill">
                                                <TbLogout />
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="hidden lg:flex lg:justify-end">
                    <Link to="/signup" className="text-sm inline-block rounded-md border border-transparent bg-primary px-8 py-3 text-center text-white hover:bg-indigo-700">
                        Sign Up
                    </Link>
                </div>
            )}
            <div className="flex lg:hidden">
                <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Header
