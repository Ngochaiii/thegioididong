var promise = new Promise(
    //excutor 
    function(resolve , reject){
        //Logic
        // Thành công : resolve()
        // Thất bại : reject()
        resolve()
    }
);

promise
        .then(function(){
            console.log("Successully")
        })
        .catch(function(){
            console.log("Failure")
        })
        .finally(function(){
            console.log("Done!")
        })