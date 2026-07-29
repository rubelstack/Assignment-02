function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  } else if (tokensUsed <= 500) {
    return 0;
  } else {
    let extra_token = tokensUsed - 500;
    let cost = Math.floor(extra_token / 100) * 5;
    return cost;
  }
}
