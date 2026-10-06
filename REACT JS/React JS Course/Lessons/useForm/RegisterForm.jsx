import { useForm } from 'react-hook-form'

const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        console.log(errors.userName)
    }

    const password = watch("password")
    
    return (
        <div>
            <h1>registeration form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="">userName :</label>
                    <input className='border p-1' type="text"  {...register("userName", { required: "userName is requred" })} />
                </div>
                {errors.userName && <p className='text-red-800 p-1'>{errors.userName.message}</p>}
                <div>
                    <label htmlFor="">email :</label>
                    <input className='border p-1' type="email" {...register("email", {
                        required: "please enter valid email",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "invalid email" }
                    })} />
                </div>
                {errors.email && <p className='text-red-800 p-1'>{errors.email.message}</p>}
                <div >
                    <div>
                        <label htmlFor="">password</label>
                        <input className='border p-1' type="password" {...register("password", {
                            required: "please enter your password", minLength: { value: 6, message: "Password must be at least 6 characters" }
                        })} />

                        {errors.password && <p className='text-red-800'>{errors.password.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="">confirm password</label>
                        <input className='border p-1' type="password" {...register("confirmPassword", {
                            required: "please confirm password", validate : (value) => value === password || "password do not match"
                        })} />

                        {errors.confirmPassword && <p className='text-red-800'>{errors.confirmPassword.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="">
                            <input type="checkbox" {...register("terms", {required : "accept the terms condition and privacy"})}/>
                            accept terms and privacy
                        </label>
                    </div>

                    {errors.terms && <p className='text-red-800'>{errors.terms.message}</p>}

                    <button className='bg-green-600 text-white p-2 m-2' type='onSubmit'>submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm