import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 md:w-96'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-gray-300'>
                        Tik-Talk
                    </h1>
                    <h1 className='text-xl font-semibold text-gray-300 mb-4'>
                        Where conversations sync like clockwork
                    </h1>
                </div>

                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='mb-4'>
                        <label className='text-base label-text text-white'>Full Name</label>
                        <input
                            type='text'
                            placeholder='Aryaman Somvanshi'
                            className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='text-base label-text text-white'>Username</label>
                        <input
                            type='text'
                            placeholder='Aryaman'
                            className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='text-base label-text text-white'>Password</label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div className='mb-4'>
                        <label className='text-base label-text text-white'>Confirm Password</label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link
                        to={"/login"}
                        className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white'
                    >
                        Already have an account?
                    </Link>

                    <button className='btn btn-block btn-sm mt-4 border border-slate-700' disabled={loading}>
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                    </button>
                </form>

                <footer className='text-white text-center mt-4'>
                    Made By Aryaman
                </footer>
            </div>
        </div>
    );
};

export default SignUp;
