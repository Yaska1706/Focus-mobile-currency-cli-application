import Table from 'cli-table3';

module.exports = (args) => {
    console.log('Table is displayed')
    const request = require('request')
    const csv=require('csvtojson')
    
// Invoking csv returns a promise
    const converter=csv()

    csv()
        .fromStream(request.get('https://focusmobile-interview-materials.s3.eu-west-3.amazonaws.com/Cheap.Stocks.Internationalization.Currencies.csv'))
        .then((json)=>{
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
