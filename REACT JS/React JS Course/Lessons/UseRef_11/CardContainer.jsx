import { useRef } from "react"

const CardContainer = () => {

    const cardRef = useRef()


    const handleChange = () => {
        if (cardRef.current) {
            cardRef.current.classList.toggle('highlight')
            console.log(cardRef)
        }

    }



    return (
        <div style={{textAlign : 'center'}}>
            <div ref={cardRef} className='card'>
                <h1>interactive card</h1>
                <p>click the button to highlight button</p>
                <button onClick={handleChange}>click here</button>
            </div>
        </div>

    )
}

export default CardContainer