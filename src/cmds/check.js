module.exports = (args) => {
    //include readline to allow user input
    const rl = require('readline');

    //function to allow user input
    function prompt(question) {
        const r = rl.createInterface({
          input: process.stdin,
          output: process.stdout,
          terminal: false
        });
        return new Promise((resolve, error) => {
          r.question(question, answer => {
            r.close()
            resolve(answer)
          });
          console.error(error)
        })
      }
      
      //function prompts user to enter iso code and verify if it exists
      function check(){
        const q = ('Enter ISO 4217 Code : ')
        prompt(q).then(iso => {
            //converts csv to json
            const csv=require('csvtojson')

            // Invoking csv to return a promise with user input
            const converter=csv()
            .fromFile('./Currencies.csv')
            .then((json)=>{
                for(var i=0;i<json.length;++i){
                    if(json[i]['ISO 4217 Code'] === iso ){
                        console.log(`${iso} is ISO 4217 Code for `+json[i].Country)
                    }
                   
                }
                
            })
        })
      }
      check()
}