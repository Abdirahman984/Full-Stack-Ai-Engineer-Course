import React, { useState } from 'react'

const FormValidation = () => {
    const roles = [
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "UI/UX Designer",
        "Product Manager"
    ];

    const skillOptions = [
        "React", "JavaScript", "TypeScript", "Node.js",
        "Python", "Java", "UI Design", "API Development"
    ];

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        role: "",
        experience: "",
        skillsHave: [],
        privacy: false,
        notification: false
    })

    const [error, setError] = useState({})

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setFormData((prevousData) => ({ ...prevousData, [name]: type === 'checkbox' ? checked : value }))


       if(error [name]){
        setError((prev) => ({...prev, [name] : ""}))
       }
    }

    const valiateForm = () => {
        const newError = {}
        if (!formData.fullName.trim()) {
            newError.fullName = "please enter your full name"
            // return newError
        }

        if (!formData.email.trim()) {
            newError.email = "please valid email"
            // return newError
        }

        if(!formData.role.trim()){
            newError.role = "plese select your role"
            
        }

        if(!formData.experience.trim()){
            newError.experience = "choose how many experience do you have"
            
        }

        if(formData.skillsHave.length === 0){
            newError.skillsHave = "select at least one skill"
        } 

        if(formData.privacy === false){
            newError.privacy = "you must check privacy and conditions"
        }

        return newError

      
    }


    const handleSkillChange = (skill) => {
        const newSkill = formData.skillsHave.includes(skill)
            ? formData.skillsHave.filter(sk => sk !== skill)
            : [...formData.skillsHave, skill]

        setFormData(prev => ({ ...prev, skillsHave: newSkill }))

        if(error.skillsHave){
            setError((prev) => ({...prev, skillsHave : ""}))
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', formData)

        const validateErorrs = valiateForm();
        console.log(validateErorrs)

        if(Object.keys (validateErorrs).length === 0){
            console.log('success')
        } else{
            setError(validateErorrs)
        }
        
        
    }

    


    return (
        <div className='bg-gray-100 min-h-screen m-0 p-0'>

            <div className='w-md min-h-auto px-6 py-2 bg-white shadow-md mx-auto'>
                <h1 className='text-2xl font-medium mb-2'>Developer Application Form</h1>
                <form onSubmit={handleSubmit} className='capitalize'>

                    <div>
                        <label className='text-1xl font-normal m-2' htmlFor="">full name : </label> <br />
                        <input className='border m-2 w-full p-1 rounded-lg' type="text"
                            name='fullName' onChange={handleChange} value={formData.fullName}
                        /> <br />

                        {error.fullName && <p className='text-red-600'>{error.fullName}</p>}

                        <label className='text-1xl font-normal m-2' htmlFor="">email : </label> <br />
                        <input className='border m-2 w-full p-1 rounded-l' type="email"
                            name='email' onChange={handleChange} value={formData.email}
                        />

                        {error.email && <p className='text-red-600'>{error.email}</p>}
                    </div>

                    <div>
                        <div>
                            <label htmlFor="">role</label> <br />

                            <select className='border w-full mt-2 p-1 rounded-l'
                                name='role' onChange={handleChange} value={formData.role}
                            >

                                {
                                    roles.map((role) => (
                                        <option key={role} value={role}>{role}</option>
                                    ))
                                }



                            </select>

                            {error.role && <p className='text-red-600'>{error.role}</p>}

                        </div>
                    </div>

                    <div className='mt-2 p-1'>
                        <label className='mt-2 ' htmlFor="">years of experience</label> <br />
                        <select className='border w-full p-1 rounded-l mt-2'
                            name='experience' onChange={handleChange} value={formData.experience}
                        >
                            <option value="2">2</option>
                            <option value="0">0</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20 +</option>
                        </select>

                        {error.experience && <p className='text-red-600'>{error.experience}</p>}
                    </div>

                    <div className='mt-2'>
                        <label className='capitalize font-medium text-1xl' htmlFor="">skills</label>
                        <div className='grid grid-cols-2 p-2 '>
                            {
                                skillOptions.map((skill) => (
                                    <label key={skill}>
                                        <input className='mr-2 w-4 h-4 rounded-full' type="checkbox"
                                            name='skillsHave' onChange={() => handleSkillChange(skill)} value={formData.skillsHave}
                                        />
                                        <span className='text-1xl font-normal'>{skill}</span>
                                    </label>
                                ))
                            }

                            {error.skillsHave && <p className='text-red-600'>{error.skillsHave}</p>}
                        </div>
                    </div>

                    <div className='p-1'>
                        <div>
                            <input className='mr-2 w-4 h-4 rounded-full ' type="checkbox"
                                name='privacy' onChange={handleChange} value={formData.privacy}
                            />
                            <label htmlFor="">i agree the terms and conditions</label>

                            {error.privacy && <p className='text-red-600'>{error.privacy}</p>}
                        </div>
                    </div>

                    <div className='p-1'>
                        <div>
                            <input className='mr-2 w-4 h-4 rounded-full ' type="checkbox"
                                name='notification' onChange={handleChange} value={formData.notification}
                            />

                            <label htmlFor="">recieve notification about new opprtunities</label>
                        </div>
                    </div>

                    <div className='bg-red-600 text-white p-2 flex justify-center items-center border-none outline-none rounded-lg'>
                        <button type='submit' className='text-1xl capitalize text-center cursor-pointer'>submit application</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default FormValidation;