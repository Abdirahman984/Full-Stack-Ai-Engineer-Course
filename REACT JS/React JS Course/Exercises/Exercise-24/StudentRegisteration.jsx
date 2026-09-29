import { useForm } from 'react-hook-form'

const StudentRegisteration = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='bg-gray-100 min-h-screen capitalize '>
            <div className='bg-white mx-auto max-w-md p-4 m-4'>
                <h1 className='text-2xl font-medium text-center'>student registeration form</h1>
                <div className='p-4 m-2 '>
                    <form onSubmit={handleSubmit(onSubmit)} className='capitalize p-1'>
                        <div>
                            <label className='py-2' htmlFor="">student name</label> <br />
                            <input className='border p-1 mt-2 w-full' type="text" {...register('studentName', { required: 'userName is required' })} />
                        </div>
                        {errors.studentName && <p className='p-1 text-red-600'>{errors.studentName.message}</p>}
                        <div>
                            <label className='py-2' htmlFor="">student email</label> <br />
                            <input className='border p-1 mt-2 w-full' type="email" {...register('email', { required: 'please enter valid email', pattern : {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message : 'invalid email formate'
                            } })} />
                        </div>
                        {errors.email && <p className='p-1 text-red-600'>{errors.email.message}</p>}
                        <div>
                            <label className='py-2' htmlFor="">grade level</label> <br />
                            <select className='border p-1 mt-2 w-full capitalize'{...register('selectGrade', { required: 'please select grade ' })} >
                                <option value="">select grade</option>
                                <option value="grade 1">grade 1</option>
                                <option value="grade 2">grade 3</option>
                                <option value="grade 3">grade 6</option>
                                <option value="grade 4">grade 9</option>
                                <option value="grade 12">grade 12</option>
                            </select>
                        </div>

                        {errors.selectGrade && <p className='p-1 text-red-600'>{errors.selectGrade.message}</p>}

                        <div className='py-2'>
                            <label className='py-2 text-1xl font-normal' htmlFor="">subject interested</label> <br />
                            <div className='m-2'>

                                <div className='py-1'>
                                    <label className='capitalize font-normal text-1xl' htmlFor="">
                                        <input className='mr-2 w-4 h-4 rounded-full' type="checkbox" {...register('subject', { required: 'please select at least one subject' })} value='maths' />
                                        maths
                                    </label> <br />
                                </div>
                                <div className='py-1'>
                                    <label className='capitalize font-normal text-1xl' htmlFor="">
                                        <input className='mr-2 w-4 h-4 rounded-full' type="checkbox" {...register('subject', { required: 'please select at least one subject' })} value='english' />
                                        english
                                    </label> <br />
                                </div>
                                <div className='py-1'>
                                    <label className='capitalize font-normal text-1xl' htmlFor="">
                                        <input className='mr-2 w-4 h-4 rounded-full' type="checkbox" {...register('subject', { required: 'please select at least one subject' })} value='science' />
                                        science
                                    </label> <br />
                                </div>

                                {errors.subject && <p className='p-1 text-red-600'>{errors.subject.message}</p>}


                            </div>
                        </div>
                        <div className='bg-red-600 text-white text-center'>
                            <button className='capitalize p-2 text-1xl font-medium cursor-pointer'>register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StudentRegisteration