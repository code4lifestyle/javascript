let Teas = ['greentea', 'blacktea', 'chai', 'oolangtea'];
let selectedtea = [];
for(i=0; i<Teas.length; i++){
    if(Teas[i]==='chai'){
        break;
    }
    selectedtea.push(Teas[i]);

}
console.log(selectedtea);