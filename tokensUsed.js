function calculateAiCost(tokensUsed) {

if (typeof tokensUsed ==='number' ){
    if(tokensUsed >=0){
    let token_consumed= tokensUsed - 500;
    let cost = Math.floor(token_consumed/100)*5
    if (cost < 0){
        return 0
    } else return cost
    } return "Invalid"
       
} else return "Invalid"


}