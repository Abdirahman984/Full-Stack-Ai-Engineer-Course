const Button = ({ id }) => {
    const handleClick = (id) => {
        alert("click me ! " + id)
    }
    return (
        <div>
            <button onClick={() => handleClick(id)}>click me</button>
        </div>
    )
}

export default Button;