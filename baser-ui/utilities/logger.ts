// import chalk from 'chalk'
// import log from 'loglevel'
// import prefix from 'loglevel-plugin-prefix'

// const colors = {
//   TRACE: chalk.magenta,
//   DEBUG: chalk.cyan,
//   INFO: chalk.blue,
//   WARN: chalk.yellow,
//   ERROR: chalk.red
// }

// prefix.reg(log)
// log.setLevel((process.env.LOG_LEVEL as any) || 'info')

// prefix.apply(log, {
//   format(level: any, name: any, timestamp: any) {
//     // @ts-ignore
//     return `${chalk.gray(`[${timestamp}]`)} ${colors[level.toUpperCase()](level)} ${chalk.green(
//       `${name}:`
//     )}`
//   }
// })

// prefix.apply(log.getLogger('critical'), {
//   format(level: any, name: any, timestamp: any) {
//     return chalk.red.bold(`[${timestamp}] ${level} ${name}:`)
//   }
// })

// // log.trace('trace')
// // log.debug('debug')
// // log.getLogger('critical').info('Something significant happened')
// // log.log('log')
// // log.info('info')
// // log.warn('warn')
// // log.error(new Error('123'))

// export default log

const logger = () => {
  return ;
};

export default logger;


