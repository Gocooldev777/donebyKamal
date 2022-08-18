bill = [
    bill1 = {a : 2000,b : 200,c : 1000},
    bill2 = {a : 1500,b : 0,c : 0,d : 1300},
    bill3 = {x : 1000,y : 0}, 
  ]
  balance = {}
  //Looping Every element to get a Single object of balance amounts and merging the users (what they given - average)
  for (billNo = 0; billNo < bill.length; billNo++) {
   let paidAmount = Object.values(bill[billNo]);
   let paidBy = Object.keys(bill[billNo]);
    //Finding the Sum of Elements in each object
        sumOfbill = 0;
        for (value of paidAmount) {
            sumOfbill = sumOfbill + value;}
            elementsInbill = paidAmount.length;
            //finding the Average of each elements  
            averageOfbill = sumOfbill / elementsInbill;
            //taking paid amount and subtract it from average
                var merge = {}
                for (var billNumber = 0; billNumber < paidBy.length; billNumber++) {
                    originalminusAverage = paidAmount[billNumber] - averageOfbill
                    if(originalminusAverage!=0){
                    merge[paidBy[billNumber]] = originalminusAverage ;}
                }
            //Merging all the users and their Amount_owed in a single Object 
                    for(paidBy in merge){
                        if(!(paidBy in balance)){ balance[paidBy] = merge[paidBy]}
                        else{ balance[paidBy] = balance[paidBy]+merge[paidBy]}
                    }
  }
  
  //Sorting the single object of Amount_owed by Amount_owed
  function sorting(object){
      sortedObject = {}      
      amountVowed = []
      for(paidBy in object){
          if(object[paidBy] != 0){
         amountVowed.push(object[paidBy]) }  
         }          
  
              function st(a,b){
              return(a-b)}
           amountVowed = amountVowed.sort(st)
              for(j of amountVowed){
                  for(k in object){
                       if(j == object[k]){
                          sortedObject[k] = object[k]}}}
          return sortedObject}  
  billtotal = (sorting(balance))
  //Function For Return Who Should pay Whom
  const BillSplit =(Bill) =>{
     let peoplePaid_unsort = {}        //one object for positive values  = People to getback and the amount they should get back
     let peopleOwed = {}              // one object for negative value   = People Owed and how much the owed
     let paidAmount = []
     let owedAmount = []
    for(amount in Bill){
              if(Bill[amount] > 0){
                    paidAmount.push(Bill[amount])
                    for(Amount of paidAmount){
                        for(people in Bill){
                            if(Amount == Bill[people]){peoplePaid_unsort[people] = Bill[people]}}}}
              else{
                  owedAmount.push(Bill[amount])
                  for(Amount of owedAmount){
                    for(people in Bill){
                        if(Amount == Bill[people]){
                            peopleOwed[people] = Bill[people]}}}}}
      //Sorting one object for positive values  = People to getback and the amount they should get back                      
      peoplePaid = {}  
      const revb1 = Object.keys(peoplePaid_unsort).reverse();
      revb1.forEach(key =>{
      peoplePaid[key] = peoplePaid_unsort[key]})
      for(paid_Amount in peoplePaid){
           for(owed_Amount in peopleOwed){
            if(Math.round(Math.abs(peoplePaid[paid_Amount])) != 0 & Math.round(Math.abs(peopleOwed[owed_Amount])) != 0){
              if(peoplePaid[paid_Amount]< Math.abs(peopleOwed[owed_Amount])){
                   console.log(`${owed_Amount} has to pay,Rupees : ${peoplePaid[paid_Amount].toFixed(2)} to ${paid_Amount}`)
                   end = peopleOwed[owed_Amount] + peoplePaid[paid_Amount]
                   peopleOwed[owed_Amount] = end
                   peoplePaid[paid_Amount] = 0
               }
               else if(peoplePaid[paid_Amount]>Math.abs(peopleOwed[owed_Amount])){
                  console.log(`${owed_Amount} has to pay, Rupees: ${Math.abs(peopleOwed[owed_Amount].toFixed(2))} to ${paid_Amount}`)
                  end = peopleOwed[owed_Amount]+peoplePaid[paid_Amount]
                  peopleOwed[owed_Amount] = 0
                  peoplePaid[paid_Amount] = end
                }
              else if(peoplePaid[paid_Amount] == Math.abs(peopleOwed[owed_Amount])){
                console.log(`${owed_Amount} has to pay,Rupees: ${peoplePaid[paid_Amount].toFixed(2)} to ${paid_Amount}`)
                 peoplePaid[paid_Amount] = 0
                 peopleOwed[owed_Amount] = 0}}}}
  }
  console.log("******************************* Bill Splitter ************************************")
  BillSplit(billtotal)
