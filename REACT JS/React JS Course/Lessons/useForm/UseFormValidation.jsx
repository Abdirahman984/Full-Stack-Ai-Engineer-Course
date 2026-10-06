import { useForm } from 'react-hook-form'

const UseFormValidation = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    console.log(errors.userName)

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h1>form validation using useform</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='border p-1' type="text" placeholder='enter username' {...register("userName", { required: "username is required" })} /> <br />

                {errors.userName && <p className='text-red-800'>{errors.userName.message}</p>}

                <input className='border p-1' type="email" placeholder='enter your email' {...register("email", { required: "please enter valid email" })} /> <br />


                {errors.email && <p className='text-red-800'>{errors.email.message}</p>}

                <input className='border p-1' type="password" placeholder='enter your password' {...register("password", { required: "please enter your password" })} />

                {errors.password && <p className='text-red-800'>{errors.password.message}</p>}

                <button className='bg-rose-600 text-white px4 py-2 rounded ml-4' type='submit'>submit</button>
            </form>
        </div>
    )
}

export default UseFormValidation;