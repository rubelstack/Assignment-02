function topRatedRestaurant(restaurants) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid";
  }
  let toprestaurnt = "";
  let calculate = 0;
  for (const number of restaurants) {
    restaurantname = "";
    let name = number.name;
    let ratings = number.rating;
    if (ratings > calculate) {
      calculate += ratings;
      toprestaurnt = name;
    }
  }
  return toprestaurnt.toUpperCase();
}
