describe('  The greet function ' , function(){
    it("It should greet Mxolisi with 'Hello,Mxolisi'" , function(){
        assert.equal("Hello, Mxolisi",greet("Mxolisi"));

        
    });
    it("It should greet MX with 'Hello,MX'" , function(){
        assert.equal("Hello, MX",greet("MX"));
    });

});