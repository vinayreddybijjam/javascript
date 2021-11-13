let result=function(score){
    return new Promise(function(resolve,reject){
        console.log("calculation results...")
        if(score>50)
                resolve("you have passed") 
        else
                 reject("you failied")
    })
    }
