// https://github.com/arifcse01/js-assignment.git


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



// Program for budgetCalculator

function budgetCalculator(watch, phone, laptop){
    var total = watch * 50 + phone * 100 + laptop * 500;

    if(watch >= 0 && phone >= 0 && laptop >= 0){
        return total;
    }
    else{
        return "Invalid Budget";
    }    
}

var budget = budgetCalculator(8, 5, 5);




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




// Program for megaFriend  

function megaFriend(array){
    var max = array[0];

    for(var i = 0; i < array.length; i++){        
        var element = array[i].length;
        if(element == []){
            return "Invalid Array";
        } 
        else if(element > max.length ) {
            max = array[i];
        }                             
    }   
    return max;  
       
}

var outcome = megaFriend(['Rimon Biswas', 'Rano Kumar Nath', 'Mohammed Shahjahan', 'Shafiqul Islam']);

    
