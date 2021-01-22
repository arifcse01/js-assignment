

// Program for convert kilometer to meter

function kilometerToMeter(kilometer){

    var meter = kilometer * 1000;
    if(meter > 0){
        return meter;
    }
    else{
        return "Invalid Number";
    }
}
var result = kilometerToMeter(12);
console.log(result);


// Program for budgetCalculator

function budgetCalculator(watch, phone, laptop){

    var total = watch * 50 + phone * 100 + laptop * 500;
    return total;
}

var budget = budgetCalculator(8, 10, 5);
console.log(budget);



// Program for hotelCost 

function hotelCost(days){
    var cost = 0;

    if(days <= 10){
        cost = days * 100;       
    }

    else if(days <= 20){
        var firstPart = 10 * 100;
        var remainingDays = days - 10;
        var secondPart = remainingDays * 80;
        cost = firstPart + secondPart;
    }

    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remainingDays = days - 20;
        var thirdPart = remainingDays * 50;
        cost = firstPart + secondPart + thirdPart;
    }

    return cost;
}

var totalCost = hotelCost(25);
console.log(totalCost);



// Program for megaFriend  

function megaFriend(array){
    var max = array[0];

    for(var i = 0; i < array.length; i++){        
        var element = array[i].length;
        if(element > max.length){
            max = array[i];
        }                           
    }

    return max;    
}
    var outcome = megaFriend(['Kamal Uddin', 'Abul Bashar', 'Jamal uddin', 'abdul kashem', 'Arifur Rahman Arif']);
    console.log(outcome);
