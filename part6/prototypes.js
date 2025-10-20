let computer =  {cpu:12};
let lenvo =     { 
    screen: "HD",
    __proto__: computer,
};
let Apple =     { os: "IOS"};

let genricCar = {tyre : 4};
let tesla = {driver: "AI"};
Object.setPrototypeOf(tesla,genricCar);

console.log(`object`,Object.getPrototypeOf(tesla));