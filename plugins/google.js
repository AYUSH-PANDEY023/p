import { scrapeIt } from 'google-it';

let handler = async (m, { conn, command, args }) => {
    const fetch = (await import('node-fetch')).default;
    let full = /f$/i.test(command);
    let text = args.join` `;
    if (!text) return conn.reply(m.chat, '✳️ What do you want to search on Google?', m);

    try {
        let search = await scrapeIt(text);
        let msg = search.map(({ title, url, snippet }) => {
            return `*${title}*\n_${url}_\n_${snippet}_`;
        }).join('\n\n');

        let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: search[0].url, full }))).arrayBuffer();

        if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw '';
        await conn.sendFile(m.chat, ss, 'screenshot.png', search[0].url + '\n\n' + msg, m);
    } catch (e) {
        m.reply('An error occurred while processing your request.');
    }
};

handler.help = ['google'];
handler.tags = ['main'];
handler.command = ['google'];

export default handler
