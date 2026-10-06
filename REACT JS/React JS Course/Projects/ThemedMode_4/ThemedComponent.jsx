import React, { useContext } from 'react'
import ThemedContext from './Theme'

const ThemedComponent = () => {
    const theme = useContext(ThemedContext)

    const style = {
        backgroundColor : theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        padding : "20px",
        textAlign : "center"
    }
    return (
        <div style={style}>
            <h2> {theme === "light" ? "dark" : "light"}Themed Component</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Obcaecati earum quia dignissimos eum. Tempore dolor optio ipsa quod sit blanditiis. <br /> Maxime, at saepe earum tempora nobis iure laboriosam quas doloremque!</p>

        </div>
    )
}

export default ThemedComponent