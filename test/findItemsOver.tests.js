describe('findItemsOver' , function(){
    it('quantity higher than the threshold' , function(){
        assert.deepEqual(findItemsOver(itemList, threshold), results);
    })
  

});