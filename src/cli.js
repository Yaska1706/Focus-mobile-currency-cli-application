import minimist from 'minimist'
import chalk from 'chalk'

export async function cli(args){
    //we are removing the first two elements in the process.argv array 
    //which is what will be received by the parseArguments  function. 
    const argsobj = minimist(args.slice(2));

    let cmd = argsobj._[0] || 'help'

    if (argsobj.version || argsobj.v) {
      cmd = 'version'
    }
  
    if (argsobj.help || argsobj.h) {
      cmd = 'help'
    }
    //we're passing the arguments to each command to be used
    switch (cmd){
        case 'check':
            require('./cmds/check')(argsobj)
            break
        
        case 'table':
            require('./cmds/table')(argsobj)
            break
        
        case 'version':
            require('./cmds/version')(argsobj)
            break
        
        case 'help':
            require('./cmds/help')(argsobj)
            break
        default:
            console.error(`"${cmd}"${chalk.redBright('is not a valid command')} `)
            require('./cmds/help')(argsobj)
    }
}
  