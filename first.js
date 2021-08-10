/* =============================== solved question no-1 start ================================== */
function seerToMon(seer) {
    /*--- Error massage start -------*/
    if (typeof seer != 'number') {
        return 'Please give a number';
    }
    if (seer < 40) {
        return 'Please enter a positive number greater than 39'
    }
    /*--- Error massage end -------*/
    var mon = seer / 40;
    return mon;
}
var mySeer = 200;
var mon = seerToMon(mySeer);
console.log(mon);
/* =============================== solved question no-1 end ================================== */
/* =============================== solved question no-2 start ================================== */
const sales = [
    { name: 'shirt', price: 100, quantity: 2 },
    { name: 'pant', price: 200, quantity: 3 },
    { name: 'shoe', price: 500, quantity: 2 }
];
let totalSales = 0;
for (const product of sales) {
    console.log(product);
    productTotal = product.price * product.quantity;
    totalSales = totalSales + productTotal;
}
console.log(totalSales);
/* =============================== solved question no-2 end ================================== */
/* =============================== solved question no-3 start ================================== */
function deliveryCost(cost) {
    /*--- Error massage start -------*/
    if (typeof cost != 'number') {
        return 'Please give a number';
    }
    if (cost < 2) {
        return 'Please enter a positive number greater than 1'
    }
    /*------ Error massage end ----------*/
    const shirtDelivaryFirst100Cost = 100;
    const shirtDelivarySecond100Cost = 80;
    const shirtDelivaryRestCost = 50;
    if (cost <= 100) {
        const count = cost * 100;
        return count;
    } else if (cost <= 200) {
        const shirtDelivaryFirst = 100 * shirtDelivaryFirst100Cost;
        const restCost = cost - 100;
        const shirtDelivarySecond = restCost * shirtDelivarySecond100Cost;
        const totalCost = shirtDelivaryFirst + shirtDelivarySecond;
        return totalCost;
    } else {
        const shirtDelivaryFirst = 100 * shirtDelivaryFirst100Cost;
        const shirtDelivarySecond = 100 * shirtDelivarySecond100Cost;
        const restCost = cost - 200;
        const restDelivaryShart = restCost * shirtDelivaryRestCost;
        const totalCost = shirtDelivaryFirst + shirtDelivarySecond + restDelivaryShart;
        return totalCost;
    }
}
const cost = deliveryCost(35);
console.log(cost);
/* =============================== solved question no-3 end ================================== */
/* =============================== solved question no-4 start ================================== */
function perfectFriend(friend) {
    var string = friend[0];
    for (i = 0; i < friend.length; i++) {
        if (friend[i].length == 5) {
            string = friend[i];
            break;
        }
    }
    return string;
}
var friends = ["Raitul", "sajol", "Rasel", "Samrat", "Rajib"];
var fiveCharacterName = perfectFriend(friends);
console.log(fiveCharacterName);
/* =============================== solved question no-4 end ================================== */