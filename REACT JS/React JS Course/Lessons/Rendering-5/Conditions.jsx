const Greeting = ({ unreadMessages }) => {
    // if (isLogIn) {
    //     return <h2>welcome back</h2>
    // } else{
    //    return  <h2>please sign in</h2>
    // }
    return (
        <div>
            <h2>unreadMessages</h2>
            {
                unreadMessages.length > 0 && <p>you have {unreadMessages.length} unreaded message</p>
            }

        </div>
    )
}

export default Greeting;