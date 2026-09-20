
const StudentDashboard = () => {

    const courses = [
        { id: 1, name: 'React Fundamentals', progress: 75, instructor: 'Sarah Wilson', nextLesson: 'Components & Props', color: 'blue' },
        { id: 2, name: 'JavaScript Advanced', progress: 45, instructor: 'Mike Johnson', nextLesson: 'Async/Await', color: 'purple' },
        { id: 3, name: 'UI/UX Design', progress: 90, instructor: 'Emily Chen', nextLesson: 'Color Theory', color: 'pink' },
    ];

    const assignments = [
        { id: 1, title: 'Build a Todo App', course: 'React Fundamentals', dueDate: '2024-03-20', status: 'pending' },
        { id: 2, title: 'API Integration', course: 'JavaScript Advanced', dueDate: '2024-03-18', status: 'completed' },
        { id: 3, title: 'Design System', course: 'UI/UX Design', dueDate: '2024-03-25', status: 'in-progress' },
    ];

    const announcements = [
        { id: 1, title: 'New Course Available', message: 'Check out our new TypeScript course!', time: '2 hours ago' },
        { id: 2, title: 'Maintenance Notice', message: 'Platform updates scheduled for tonight', time: '5 hours ago' },
    ];

    const stats = [
        { label: 'Average Grade', value: '88%', icon: '📊' },
        { label: 'Courses', value: '3', icon: '📚' },
        { label: 'Study Hours', value: '45h', icon: '⏰' },
        { label: 'Assignments', value: '12', icon: '✍️' },
    ];

    return (
        <div className='min-h-screen bg-gray-50 capitalize'>
            <div className='mx-auto px-15  text-center'>
                <div className='bg-white shadow-lg flex justify-between items-center px-4 py-2'>
                    <div className='p-4'>
                        <h1 className='text-2xl font-extrabold text-gray-800'>welcome back, student !</h1>
                        <p className='text-gray-600 mt-1'>here are what heppening your course today</p>
                    </div>
                    <div className='flex justify-center gap-4 items-center'>
                        <p className='text-2xl font-bold'>🔔</p>
                        <h1 className='text-2xl fon bg-purple-600 text-white w-10 h-10 rounded-full'>s</h1>
                    </div>
                </div>

                <div>
                    {/* GRIED */}
                    <div className=''>
                        <div >
                            <div className='grid grid-cols-4 gap-4 p-2 rounded-xl'>
                                {
                                    stats.map((item, index) => (
                                        <div key={index} className='bg-white shadow-sm px-2 py-4 rounded-xl'>
                                            <div className='flex items-center'>

                                                <div className='text-2xl font-bold mr-4'>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <div className='text-medium text-gray-600'>{item.label} </div>
                                                    <div className='text-2xl font-bold'>{item.value}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* PROGRESS BAR */}

                <div className='bg-white grid grid-cols-2'>
                    {/* GRID */}
                    <div className=''>
                        <div className='bg-white shadow-2xl grid grid-4'>
                            <h1 className='text-left ml-8 font-medium text-1xl p-2'>course progress</h1>
                            {
                                courses.map((course) => (
                                    <div className='bg-gray-100 p-3'>

                                        <div className='flex justify-between items-center p-4'>
                                            <div className='text-gray-800 text-1xl'>
                                                {course.name}
                                            </div>
                                            <div className='font-medium text-gray-600'>{`${course.progress}%`}
                                            </div>
                                        </div>
                                        <div className='bg-gray-200 p-2 rounded-full'>

                                        </div>
                                        <div className='flex justify-between items-center p-4'>
                                            <div>
                                                {course.nextLesson}
                                            </div>
                                            <div>
                                                {course.instructor}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* ASSIGMENTS */}
                    <div className=''>
                        <div>

                            <div className='w-md mx-auto bg-white shadow-2xl mt-4 p-2'>
                                <h1 className='text-1xl font-medium text-left ml-8 px-2 py-2'>upcoming assigments</h1>
                                {
                                    assignments.map((assignment) => (
                                        <div key={assignment.id} className='flex-1 p-2'>
                                            <div className='flex justify-between items-center'>
                                                <div className=''>
                                                    {assignment.title}
                                                </div>
                                                <div className={` inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                                ${assignment.status === 'pending' ? 'bg-purple-100 text-purple-900' :
                                                    assignment.status === 'completed' ? 'bg-green-100 text-green-800' :
                                                    assignment.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                    {assignment.status}
                                                </div>
                                            </div>
                                            <div className='flex justify-between'>
                                                <div>
                                                    {assignment.course}
                                                </div>
                                                <div className='text-sm text-gray-600 font-light'>
                                                    <p>due date {assignment.dueDate}</p>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                        {/* ANOUNCEMENTS */}
                        <div className='w-md mx-auto bg-white shadow-2xl mt-4 px-2 py-3'>
                            <div>
                                <h1 className='text-gray-900 font-medium text-left ml-8 mb-2'>announcements</h1>
                                {
                                    announcements.map((announce) => (
                                        <div className='flex items-center gap-10'>
                                            <div className='flex gap-4'>
                                                <div>
                                                    <div className='flex-1 gap-4 w-1 h-20 rounded-full bg-blue-500 ml-4'></div>
                                                </div>
                                                <div className='m-2 text-left'>
                                                    <h1>{announce.title}</h1>
                                                    <p>{announce.message}</p>
                                                    <span> {announce.time}</span>
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StudentDashboard