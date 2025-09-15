// declare an array name teaflavors that contain the strings 'greentea', 'blacktea',
//  'olangtea'
// access the first element and store it in variable and name firsttea
let teaFlavors = ['greenTea', 'blackTea', 'olangtea']
const firstTea = teaFlavors[0]
// console.log(firstTea)

// declear an array of cities containing 'londo', 'tokyo', 'paris' and 'newyork'
// access the third name and store it in a variable called favCity
let cities = ['london', 'tokyo', 'paris', 'newyork']
favCity = cities[2]
// console.log(favCity);
//  you have an array named Teatypes containing 'herbaltea' 'whitetea, masalachai change
// the second name into jasmine
let teaTypes = ['herbaltea', 'whitetea', 'masala chai']
teaTypes[1] = 'jasmine'
// console.log(teaTypes);
// declear an array named citiesVisited containing 'dubai', 'abudhabi' add berling using push method
let cityVisited = ['dubai', 'abudhabi']
cityVisited.push('berlin')
// console.log(cityVisited);
let teaOrders = ['chai, icetea', 'mocha', 'earlgrey']
const lastOrder =  teaOrders.pop()
// console.log(lastOrder)
// creating soft copy of an array
const popularTea = ['greentea', 'oolongtea', 'chai']
let softCopyTea = popularTea;
popularTea.pop();
// console.log(softCopyTea);
// console.log(popularTea)

const topCites = ['berlin', 'singapore', 'newyork']
let hardcopyCities = [...topCites]
topCites.pop();
// console.log(topCites)
// console.log(hardcopyCities)

const europianCities = ['parseInt', 'Rome']
const asianCities = ['tokyo', 'bankok']
const worlCites = europianCities.concat(asianCities)
// console.log(worlCites)

let teamenu = ['masala chai', 'oolang tea', 'green tea', 'earl tea']
const menulength = teamenu.length
// console.log(menulength)
let cityBucketlist = ['tokyo', 'london', 'captown', 'vancouver']
const isLondoninList = cityBucketlist.includes('london')
console.log(isLondoninList);