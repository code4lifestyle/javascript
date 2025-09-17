let computer =  {cpu:12};
let lenvo =     { 
    screen: "HD",
    __proto__: computer,
};
let Apple =     { os: "IOS"};

// console.log( `lenovo`, computer.__proto__)
let genricCar = {tyre : 4};
let tesla = {driver: "AI"};
Object.setPrototypeOf(tesla,genricCar);
// console.log(`tesla`, genricCar.driver);
console.log(`object`,Object.getPrototypeOf(tesla));