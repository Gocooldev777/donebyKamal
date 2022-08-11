bill = [
    bill1 = { a : 1000,b : 2000,c : 1000},
    bill2 = {a : 1000,b : 250,c : 750,d : 1250}, 
    bill3 ={a : 3000,b : 100,d : 200}
  ]
  //Function For finding  Bill Sum(separately)
  const sumfind = (a) =>{
      let s = Object.values(bill[a])
      let k = 0
      for(i of s){
          k = k + i}
      return k}   
  let bill1_sum = (sumfind(0))  
  let bill2_sum = (sumfind(1))  
  let bill3_sum = (sumfind(2))  
  let bill1_average =  (bill1_sum / Object.keys(bill[0]).length) 
  let bill2_average =  (bill2_sum / Object.keys(bill[1]).length) 
  let bill3_average =  (bill3_sum / Object.keys(bill[2]).length) 
  //Function to find The remaining balance After average tally (Separately)
  const remaining = (x,avei) =>{
          x = x - 1 
          let k1     = Object.keys(bill[x])                 
          let v1     = Object.values(bill[x])               
          var bal = {}
          for (var i = 0;i<k1.length;i++){                 
              bal[k1[i]]= v1[i] - avei
          }
          return bal}    
  let bill1_balance = (remaining(1,bill1_average))   
  let bill2_balance = (remaining(2,bill2_average))   
  let bill3_balance = (remaining(3,bill3_average))  
  //Function for Merging All 3 Bills
  function combine(a,b){
  let c = {}
  for (j in b){
      if (j in a){
          a[j]=a[j]+b[j]
      }
      else{
          a[j]=b[j]
      }
  }return a }   
  let bill1nd2 =(combine(bill1_balance,bill2_balance))
  let bill_pending =(combine(bill1nd2,bill3_balance))
  //Function for Sorting the bill Share(From Who doesn't paid to Who paid extra)and Removing Those Who paid correct share
  function sorting(x){
      d = {}       
      arr = []
      for(i in x){ 
          if(x[i] != 0){
           arr.push(x[i]) }   
          else{
             m = 1
           } }          
  
              function st(a,b){
              return(a-b)}
              arr = arr.sort(st)
              for(j of arr){
                  for(k in x){
                       if(j == x[k]){
                          d[k] = x[k]}}}
          return d}   
  billtot = (sorting(bill_pending))
  //Function For Return Who Should pay Whom
  const BillSplit =(x) =>{
     let d1 = {}       //one object for positive values
     let d2 = {}      // one object for negative value
     let arr = []
     let arr2 = []
      for(i in x){
              if(x[i] > 0){
                  arr.push(x[i])
                  for(j of arr){
                  for(k in x){
                  if(j == x[k]){
                      d1[k] = x[k]}}}
              }
              else{
                  arr2.push(x[i])
                  for(j of arr2){
                  for(k in x){
                  if(j == x[k]){
                      d2[k] = x[k]}}}
                  }
      }
      x= {}   //Sorting the Positive Values(Person who needs to get money from who doesn't paid Corrct Share)
      const revb1 = Object.keys(d1).reverse();
      revb1.forEach(key =>{
      x[key] = d1[key]})
      y = d2
      for(i in x){
           for(j in y){
               if(x[i] != 0 & y[j] !=0 &x[i]< Math.abs(y[j])){
                   console.log(`${j} has to pay,Rupees : ${x[i].toFixed(2)} to ${i}`)
                   end = y[j] + x[i]
                   y[j] = end
                   x[i] = 0
               }
               else if(x[i] != 0 & y[j] !=0&x[i]>Math.abs(y[j])){
                  console.log(`${j} has to pay, Rupees: ${Math.abs(y[j].toFixed(2))} to ${i}`)
                  end = y[j]+x[i]
                  y[j] = 0
                  x[i] = end}
              else if(x[i] != 0 & y[j] !=0 & x[i] == Math.abs(y[j])){
                  console.log(`${j} has to pay,Rupees: ${x[i].toFixed(2)} to ${i}`)
                 x[i] = 0
                 y[j] = 0}}}
  }
  console.log("******************************* Bill Splitting ************************************")
  BillSplit(billtot)