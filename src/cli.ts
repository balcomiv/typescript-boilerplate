import yargs from 'yargs';

//  http://yargs.js.org/
//  https://github.com/yargs/yargs (scroll to bottom)
yargs
  .scriptName('pirate-parser')
  .usage('$0 <cmd> [args]')
  .command(
    'hello [name]',
    'welcome ter yargs!',
    (yargs) => {
      yargs.positional('name', {
        type: 'string',
        default: 'Cambi',
        describe: 'the name to say hello to',
      });
    },
    (argv) => {
      console.log('hello', argv.name, 'welcome to yargs!');
    }
  )
  .help().argv;
