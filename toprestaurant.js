function topRatedRestaurant(restaurants) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid";
  }
  let toprestaurant = "";
  let calculate = 0;
  for (const number of restaurants) {
    let name = number.name;
    let ratings = number.rating;
    if (ratings > calculate) {
      calculate = ratings;
      toprestaurant = name;
    }
  }
  return toprestaurant.toUpperCase();
}
