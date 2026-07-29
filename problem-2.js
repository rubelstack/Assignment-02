function isElevatorSafe(weights) {
  let total_weight = 0;

  if (!Array.isArray(weights)) {
    return "Invalid";
  }
  for (const number of weights) {
    total_weight += number;
  }
  if (total_weight <= 400) {
    return true;
  } else return false;
}

