function fromWhere(regNo){
    if(regNo.startsWith("CA")){
    
    return "Cape Town";}
      else if(regNo.startsWith("CJ")){
      
      return "Paarl";}
      else if(regNo.startsWith("CY")){
      return "Bellville";}
      else{
      
      return "Some other place!"}
      
    }
    console.log(fromWhere("CY 1000"))