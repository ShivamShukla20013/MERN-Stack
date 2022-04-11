function couponCode(cost, dis = 0.3) {
    return cost * (1 - dis);
}

console.log(couponCode(100));

function findday (year: number = new Date().getFullYear(), month:number) {
    let day = 0;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            
            break;
        
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        
        case 2:
                if (((year % 4 == 0) &&
                    !(year % 100 == 0))
                    || (year % 400 == 0))
                    day = 29;
                else
                    day = 28;
                break;
    
        default:
            throw Error('invalid Month');
    }
    return day;
}

let fday = findday(2020,3);
console.log(fday);

let fday1 = findday(2016,2);
console.log(fday1);