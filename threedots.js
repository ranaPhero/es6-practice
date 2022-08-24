 const ages = [12, 23, 15, 13, 17];
 const ages2 = [15, 16, 12];
 const ages3 = [25, 26, 22];
 const allAges = ages.concat(ages2).concat([5]).concat(ages3);
 const allAges2 = [...ages, ...ages2, 5, ...ages3];
//  console.log(allAges2);
const business = 650;
const minister = 450;
const sochib = 250;
// const maximum = Math.max(business, minister, sochib);
const takaPoisa = [650, 450, 250, 850];
const maximum = Math.max(...takaPoisa);
console.log(maximum); 

const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatazza', 'Spicy mama', 'Mango mama'];

const pizzas = [...featured, 'Rana mama', ...specialty];
console.log(pizzas);