let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = m.sender
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`${toM(a)} ❤️ ${toM(b)}\nCongratulations 💖🍻`, null, {
        mentions: [a, b]
    })
}
handler.help = ['soulmate']
handler.tags = ['fun']
handler.command = ['mylove','soulmate']

handler.group = true

export default handler   
