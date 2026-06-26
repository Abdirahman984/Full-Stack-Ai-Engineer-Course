function oderFoodResturant() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let getFood = true
            if(getFood){
                resolve ("i get the food thank you so much")
            } else{
                reject ("failed to get the food please try again")
            }
        }, 1000)
    })
}

async function getFood(){
try{
    let food = await oderFoodResturant();
    console.log(food)
} catch(error){
    console.log(error)
}
}

getFood();