let count = 1;
let totalMoney = 1 
function rf1(money,year,interest) {    
    if (count <= year){
        totalMoney = Math.round(money * (1 + interest)*100)/100
        console.log(`year ${count}: deposit = ${totalMoney}`);
        money = totalMoney
        count++
        rf1(money,year,interest)
    } else {
        console.log('--------------- end ---------------');
    }
}

let amount = 1
function rf2(oil,sYear,eYear,use) {
    let year = eYear - sYear
    if(count <= year){
        amount = Math.round(oil * (1 - use)*100)/100
        console.log(`year ${sYear+count}: Oil = ${amount}`);
        oil = amount
        count++
        rf2(oil,sYear,eYear,use)
    } else {
        console.log('--------------- end ---------------');
    }
}

let temp1 = 1
let temp2 = 0
let total = 0
function rf3(month) {
    if (count <= month) {
        temp2 = total + temp1
        total = temp1
        temp1 = temp2
        console.log(`Month ${count}: Rabbit = ${total}`);
        count++
        rf3(month)
    } else {
        console.log('--------------- end ---------------');
    }
}

let acc = 0
function rf4(num) {
    if(count <= num) {
        acc = acc + count
        count++
        rf4(num)
    } else {
        console.log(acc);
        console.log('--------------- end ---------------');
    }
}

// rf1(10000,30,0.05)
// rf2(25000000,2557,2580,0.1)
// rf3(5)
// rf4(5)