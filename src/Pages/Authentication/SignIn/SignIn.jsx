import React, { useState } from 'react';
import logo from '../../../Assets/logo.png'
import { useNavigate } from 'react-router';

const SignIn = () => {
    const [email, emailChange] = useState();
    const [password, passwordChange] = useState();

    const navigate = useNavigate();

    const proceedLogin = (e) =>{
        e.preventDefault();
        e.preventDefault();
        let data = { email, password };
        console.log(data);
        fetch('https://fruity-mongoose.vercel.app/api/v1/auth/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log("Login Successfully");
            navigate('/');
        }).catch((err) => {
            console.log("Error in Login " + err);
        })
    }
    return (
        <section className="font-poppins my-10 py-7">
            <div className="max-w-6xl px-1 mx-auto lg:px-6 ">
                <div className="flex flex-col items-center h-full md:flex-row">
                    <div className="flex items-center justify-center w-full h-screen px-1 lg:w-3/6 md:mx-auto md:w-3/5 lg:px-16 xl:px-12">
                        <div className="z-10 w-full p-10 bg-white shadow-lg h-100">
                        <img className='w-40 mx-auto' src={logo} alt="" />
                            <h2 className="mt-10 mb-4 text-center text-xl font-bold leading-tight text-orange-600 md:text-3xl ">
                                Login to your account
                            </h2>
                            <form action="" onSubmit={proceedLogin} className="mt-6">
                                <div>
                                    <input value={email} onChange={e => emailChange(e.target.value)}
                                        type="email"
                                        className="w-full px-4 py-4 mt-2 text-sm placeholder-orange-400 dark:text-gray-400 lg:text-base bg-orange-50 dark:placeholder-gray-400 dark:border dark:border-gray-800"
                                        name=""
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mt-5">
                                    <div>
                                        <div className="relative flex items-center mt-2">
                                            <input value={password} onChange={e => passwordChange(e.target.value)}
                                                type="password"
                                                className="w-full px-4 py-4 text-sm placeholder-orange-400 dark:text-gray-400 lg:text-base bg-orange-50 dark:placeholder-gray-400 dark:border dark:border-gray-800 "
                                                name=""
                                                placeholder="Enter password"
                                            />
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="absolute right-0 mr-3 dark:text-gray-300"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                                                />
                                                <path
                                                    d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                                                />
                                                <path
                                                    d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    className="w-full rounded-lg mx-auto py-4 mt-6 font-semibold text-gray-800 bg-orange-500 dark:text-gray-800 hover:text-gray-700 hover:bg-orange-200 dark:hover:bg-orange-600 dark:hover:text-gray-800"
                                    type="submit"
                                >
                                    LOGIN
                                </button>

                                <div className="mt-4 text-right">
                                    <a href="# " className="text-sm font-normal text-orange-700 dark:hover:text-orange-400">
                                        Forgot password?
                                    </a>
                                </div>
                                <a href="# " className="flex items-center justify-center py-4 my-4 border-2 border-orange-600 hover:bg-orange-200 " >
                                    <span className="inline-block mr-4 text-orange-600 ">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-facebook"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-xs font-bold text-orange-600 uppercase lg:text-sm ">
                                        Login with Facebook
                                    </span>
                                </a>
                                <a href="# "
                                    className="flex items-center justify-center py-4 my-4 border-2 border-orange-600 hover:bg-orange-200 "
                                >
                                    <span className="inline-block mr-4 text-orange-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-google"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-xs font-bold text-orange-600 uppercase lg:text-sm ">
                                        Login with Google
                                    </span>
                                </a>
                                <p className="mt-5 text-sm text-gray-700 mb-7 dark:text-gray-400">
                                    Need an account?{' '}
                                    <a href="/signup"
                                        className="font-medium text-orange-500 hover:text-orange-700 dark:text-orange-300 dark:hover:text-orange-400">
                                        Create an account
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
