import chalk from 'chalk'

//main to help user to use the cli
const menus = {
    main: `
      currency-test [${chalk.blueBright('command')}] <options>
  
      ${chalk.greenBright('check')} .............. show if currency iso exists
      ${chalk.greenBright('table')} ............... display currency table 
      ${chalk.greenBright('version')} ............ show package version
      ${chalk.greenBright('help')} ............... show help menu for a command`,
  
    check: `
      currency-test check `
  
      
  }
  
 //function to take help arguments
  module.exports = (args) => {
    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
  
    console.log(menus[subCmd] || menus.main)
  }