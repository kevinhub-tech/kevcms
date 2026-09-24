import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [errors, setErrors] = useState({ name: "", email: "", password: "" });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordHasCapital = /[A-Z]/.test(formData.password);
    const passwordHasSpecial = /[@$!%*?&]/.test(formData.password);

    const validators: Record<string, (val: string) => string> = {
        name: (val) => !val ? "Name is required" : "",
        email: (val) => !val ? "Email is required" 
                      : !emailRegex.test(val) ? "Please enter a valid email address." 
                      : "",
        password: (val) => !val ? "Password is required" : "",
      };
      
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // validation logic keyed by `name` here
        setErrors(err => ({...err, [name]: validators[name](value)}));
    };


    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (!value) {
            if (name === 'name') setErrors(err => ({ ...err, [name]: "Name is required" }));
            if (name === 'email') setErrors(err => ({ ...err, [name]: 'Email is required.' }));
            if (name === 'password') setErrors(err => ({ ...err, [name]: 'Password is required.' }));
        }
    }

    const handleSignUp = (e: React.SubmitEvent<HTMLFormElement>) => {
        // Check if all values are there or not. If not, show error

        // Call sign up api from backend to register new user if all values are there
        e.preventDefault();
        alert(`name is ${formData.name}. email is ${formData.email}, password is ${formData.password}`)
    }


    return (
        <main>
            <h1>Sign Up</h1>

            <section className="flex justify-center align-center">
                <form onSubmit={handleSignUp}>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <legend className="fieldset-legend">Sign Up</legend>

                        <label className="label" htmlFor='name'>Name</label>
                        <input type="text" name="name" className="input" id="name" placeholder="Name" onChange={handleChange} onBlur={handleBlur} />
                        {errors.name && <p style={{ color: 'red', fontSize: '14px' }}>{errors.name}</p>}

                        <label className="label" htmlFor='email'>Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" id="email" onChange={handleChange} onBlur={handleBlur} />
                        {errors.email && <p style={{ color: 'red', fontSize: '14px' }}>{errors.email}</p>}

                        <label className="label" htmlFor="password" >Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" id="password" onChange={handleChange} onBlur={handleBlur} />
                        {formData.password && (
                            <ul>
                                {!passwordHasCapital && (<li style={{ color: 'red', marginBottom: '4px' }}> Must contain at least one capital letter. </li>)}
                                {!passwordHasSpecial && (<li style={{ color: 'red', marginBottom: '4px' }}>  Must contain at least one special symbol (@, $, !, %, *, ?, &) </li>)}
                            </ul>
                        )}

                        {errors.password && <p style={{ color: 'red', fontSize: '14px' }}>{errors.password}</p>}

                        <button className="btn btn-neutral mt-4" type="submit" >Sign Up</button>

                        <div className="divider">OR</div>
                        {/* Google */}
                        <button className="btn bg-white text-black border-[#e5e5e5]" type="button">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sign Up with Google
                        </button>
                        <label className='text-center'>Already have an account?<Link to="/login"> Login Here!</Link> </label>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}

export default SignUp
