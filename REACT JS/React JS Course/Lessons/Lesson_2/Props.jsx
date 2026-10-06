function Greeting ({currentUser, Role}){
    // console.log(Props)
    return (
       <>
        <h2>Hellow, {currentUser}</h2>
        <span>you role is {Role}</span>
       </>
    )
}

export default Greeting;