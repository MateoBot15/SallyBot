let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `ღ ${lenguajeGB['smsAddB5']()} ${pesan}`
let teks = `╭━〔 𝐀𝐍𝐎𝐓𝐀𝐓𝐄‼️ 𝐍𝐎 𝐐𝐔𝐄𝐑𝐄𝐌𝐎𝐒 𝐀𝐃𝐎𝐑𝐍𝐎𝐒 〕━⬣\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃☘️ @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `┃\n`
teks += `╰━━━━━[ 𝐒𝐚𝐥𝐥𝐲 𝐁𝐨𝐭 ${vs} ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
