let handler = async (m) => {
 m.reply(`👋🏻 Hi *${pushname}*, i am  *Maria-Md*📍\nA whatsapp bot created by: Ayush \n\n I don't have time for chit-chat Darling. Use command from *${prefix}help* list if you want me to do anything.
 `.trim()) 
}
handler.help = ['Hi']
handler.tags = ['main']
handler.command = ['hi']

export default handler
