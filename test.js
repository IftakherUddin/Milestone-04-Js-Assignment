function findingBadData(data) {
    let  amount = 0; 
    for (let i = 0;  i  < data.length ; i++)
    if (data[i] < 0 ) {
        amount++;
    }
    
    
        return amount;
    
    }
    