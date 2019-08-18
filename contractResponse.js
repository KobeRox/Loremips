var restaurantName
var address
var allergies =[]

var converted = {
    restaurantName,
    address,
    allergies = []

}

function convertContract(obj){
for(var x=0;x<obj.results_shown;x++){
    this.restaurantName.push(obj.restaurants.restaurant[x].name)
    this.address.push(obj.restaurants.restaurant[x].location.address)
    this.allergies.push(obj.restaurants.restaurant[x].cuisines)
}
console.log(converted)
return converted
}
 