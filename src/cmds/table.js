import Table from 'cli-table3';

module.exports = (args) => {
    console.log('Table is displayed')
    const request = require('request')
    const csv=require('csvtojson')
    
// Invoking csv returns a promise
    const converter=csv()
    .fromFile('./Currencies.csv')
    .then((json)=>{
       
        //create table using cli-table
        const table = new Table({
            head: ['Country', 'Currency', 'ISO 4217 code'],
            colWidths: [20, 23, 8,],
            wordWrap: true
          });
          
            for(var i = 0; i < json.length; ++i){
               //push values from csv to table 
                table.push([

                    json[i].Country,
                    json[i].Currency,
                    json[i]["ISO 4217 Code"]
                ]);

            }

          //display the table
          console.log(table.toString());
       
        
    })
   

    
}
