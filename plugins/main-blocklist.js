
let handler = async (m, { conn }) => {
	
	await conn.fetchBlocklist().then(async data => {
		let txt = `*here the list of block users🚫*\n\n*Total :* ${data.length}\n\n┌─⊷\n`
		for (let i of data) {
			txt += `▢ @${i.split("@")[0]}\n`
		}
		txt += "└───────────\n\n *if you don't want to block then follow the rules.*"
		return conn.reply(m.chat, txt, m, { mentions: await conn.parseMention(txt) })
	}).catch(err => {
		console.log(err);
		throw 'no numbers blocked'
	})
}

handler.help = ['blocklist']
handler.tags = ['owner']
handler.command = ['blocklist', 'listblock'] 

export default handler
