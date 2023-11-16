let handler = async (m) => {
 m.reply(`🌟『𝕄𝕒𝕣𝕚𝕒-𝕄𝕕 』🌟
*🌟Description:* A WhatsApp Bot With Rich  features based on Maria
*🚦Uptime:* ${uptime}
*🕸Version:* 2.0
*👤Owner:*  ${global.Owner}
*🎐supportgc:* ${global.support}\n
*Powered by Ayush*
`.trim()) 
}
handler.help = ['info']
handler.tags = ['main']
handler.command = ['info']

export default handler
