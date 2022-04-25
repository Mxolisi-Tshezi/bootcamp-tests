function countRegNumber(regcount){

    //  plates=["CA 563, CB 3345,43589 GP"]
     return regcount.split(["",""],).length
      
    
    } 
    console.log(countRegNumber("CA 182736,CY 523519,CJ 812328"))
    console.log(countRegNumber("CA 182736"))