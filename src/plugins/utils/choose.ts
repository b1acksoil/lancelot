import { Context } from 'koishi'
import { randomInt, reply } from '../../utils'

export default function enableChoose(ctx: Context) {
  ctx
    .command('choose <...args>', '随机选择')
    .shortcut('帮我选', { fuzzy: true })
    .option('template', '-t <template>', { fallback: '建议你选择#' })
    .action(({ session, options }, ...args) => {
      if (!args || args.length < 2)
        return reply(session) + '请输入至少两个选项！'

      const random = args[randomInt(0, args.length - 1)]
      
      return options?.template
        .toString()
        .replaceAll('#', random)
    })
}