function convertContract(input) {
  var results = [];

  for (var x = 0; x < input.results_shown; x++) {
    results.push({
      restaurantName: input.restaurants[x].restaurant.name,
      address: input.restaurants[x].restaurant.location.address,
      allergies: input.restaurants[x].restaurant.cuisines.split(",")
    });
  }
  return results;
}
