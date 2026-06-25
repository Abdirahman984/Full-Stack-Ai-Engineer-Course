function oderFoodResturant (){
    return new Promise((resolve, reject)=>{
    setTimeout (()=>{
        let getFood = false
        if(getFood){
            resolve ("thank you so much the food is delicious")
        } else{
        reject ("failure to fetch data")
        }
    },2000)
    })
}

oderFoodResturant()
.then((data)=> {
    console.log(data)
})

.catch((error)=>{
    console.log(error)
})