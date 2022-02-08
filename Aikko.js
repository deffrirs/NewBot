 /*NEWBASE BUATAN AIKKO GANZ BEBAS REMCODE
   TQ TO :
    DhaniGans (guru saia)
    rapli (partner)
    arga (tmn)*/

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { fetchJson, fetchText, getBase64, kyun, createExif } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting.json'))



autoread = setting.autoread
owner = setting.OwnerNumber
botname = setting.BotName
ownername = setting.OwnerName

const fakeimage = fs.readFileSync ('./image/logo.jpg')
const thumb = fs.readFileSync ('./image/thumb.jpg')

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')

        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat malam'
}


module.exports = Aikko = async (Aikko, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Jakarta').format('dddd') + ', ' + moment.tz('Asia/Jakarta').format('LL')
		const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Makassar').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Jayapura').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = Aikko.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `62858911732556@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		const sender = isGroup ? mek.participant : mek.key.remoteJid
		const senderr = mek.key.fromMe ? Aikko.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await Aikko.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Aikko.user.jid : Aikko.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Aikko.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)

			
		mess = {
		wait: 'Proses kak',
		eror: 'Maaf terjadi kesalahan !!',
		success: 'Sukses️',
		error: {
		stick: 'Itu bukan sticker kak !!',
		Iv: 'Link invalid !!'
		},
		only: {
		group: 'Fitur khusus grup !!',
		owner: 'Fitur khusus owner !!',
		admin: 'Fitur khusus admin !!',
		Badmin: 'Silakan jadikan bot admin dulu !!'
		}
		}
		const math = (teks) => {
        return Math.floor(teks)
        }
        const runtime = process.uptime()  
 
        
        const reply = (teks) => {
        Aikko.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
        Aikko.sendMessage(hehe, teks, text)
        }
        const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const mentions = (teks, memberr, id) => {
        (id == null || id == undefined || id == false) ? Aikko.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Aikko.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const costum = (pesan, tipe, target, target2) => {
        Aikko.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
        }

		const ftrol = {
	    key : {
        participant : '0@s.whatsapp.net'
        },
        message: {
        orderMessage: {
        itemCount : 123,
        status: 1,
        surface : 1,
        message: `Hi ${pushname} ${ucapanWaktu}👋`, 
        orderTitle: `${botname}`,
        thumbnail: thumb, //Gambarnye
        sellerJid: '0@s.whatsapp.net' 
        }
        }
        }
//══════════[ group ]══════════//
        
        const hideTag = async function(from, text){
           let anu = await Aikko.groupMetadata(from)
           let members = anu.participants
           let ane = []
           for (let i of members){
           ane.push(i.jid)
}
           Aikko.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('image/thumb.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}


//══════════[ Button ]══════════//

  const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            Aikko.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Aikko.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
       );
       };
       
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await Aikko.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            Aikko.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            const buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return Aikko.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await Aikko.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Aikko.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Aikko.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Aikko.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}



if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup`)
setTimeout(() => {
Aikko.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Aikko.groupRemove(from, [sender])
}

if (autoread){
Aikko.chatRead(from, "read")
}

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
switch (command) {

//══════════[ menu ]══════════//

case 'menu':
case 'help':
gambar = fs.readFileSync('./image/logo.jpg')
menunya = 
`╭◪[ Info Botz ]
│➸ぁ *Name Bot* : ${botname}
│➸ぁ *Mode* : Publik
│➸ぁ *Runtime* : ${kyun(runtime)}
│➸ぁ *Baterai* : Tidak Terdeteksi
│➸ぁ *Version* : Beta
│➸ぁ *Nama Own* : ${ownername}
┗━━━━━━━━━━━>`

teks =
`*『 ${botname} 』*`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'SEMUA MENU 😈' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break
case 'allmenu':
menu =
`Hi ${pushname} ${ucapanWaktu}👋

❏ INFO ❏
Prefix : Multi Prefix
Mode : Public

❏ Info Owner ❏
Nama Owner : ${ownername}
Nomor : wa.me/${owner}

*Sertifikat Menu*
╭◪「 *Sertifikat Menu* 」
│➸ぁ ${prefix}serti1
│➸ぁ ${prefix}serti2
│➸ぁ ${prefix}serti3
╰─────────────╯

*Ocr Menu*
╭◪「 *Ocr Menu* 」
│➸ぁ ${prefix}namaninja
│➸ぁ ${prefix}pantun
│➸ぁ ${prefix}tongue
│➸ぁ ${prefix}ssweb
│➸ぁ ${prefix}nickepep
╰─────────────╯

*Maker And Sticker*
╭◪「 *Sticker Menu* 」
│➸ぁ ${prefix}sticker
│➸ぁ ${prefix}ttp
│➸ぁ ${prefix}attp
╰─────────────╯

*Group Menu And Main Menu*
╭◪「 *Group Menu* 」
│➸ぁ ${prefix}lapor
│➸ぁ ${prefix}request
│➸ぁ ${prefix}here
│➸ぁ ${prefix}setgrupname
│➸ぁ ${prefix}setdesc
│➸ぁ ${prefix}promote
│➸ぁ ${prefix}demote
│➸ぁ ${prefix}welcome
│➸ぁ ${prefix}add
│➸ぁ ${prefix}setppgrup
│➸ぁ ${prefix}kick
│➸ぁ ${prefix}antilink
│➸ぁ ${prefix}group
│➸ぁ ${prefix}wame
│➸ぁ ${prefix}notif
╰─────────────╯

*Download Menu*
╭◪「 *Download Menu* 」
│➸ぁ ${prefix}tiktok {link tiktok}
│➸ぁ ${prefix}play {Judul Lagu}
│➸ぁ ${prefix}lirik {Judul Lagu}
│➸ぁ ${prefix}herolist {Hero}
│➸ぁ ${prefix}herodetail {nama Hero}
╰─────────────╯

*Owner Menu*
╭◪「 *Owner Menu* 」
│➸ぁ ${prefix}addcmd
│➸ぁ ${prefix}addprem
│➸ぁ ${prefix}delprem
│➸ぁ ${prefix}premiumlist
│➸ぁ ${prefix}ban
│➸ぁ ${prefix}unban
│➸ぁ ${prefix}delcmd
│➸ぁ ${prefix}listcmd
│➸ぁ ${prefix}exif
│➸ぁ ${prefix}bc
│➸ぁ ${prefix}leaveall
│➸ぁ ${prefix}bc2
╰─────────────╯

*Kerang Menu*
╭◪「 *Kerang Menu* 」
│➸ぁ ${prefix}apakah [query]
│➸ぁ ${prefix}kapankah [query
│➸ぁ ${prefix}bisakah [query]
╰─────────────╯

*Game Menu*
╭◪「 *Game Menu* 」
│➸ぁ ${prefix}ganteng
│➸ぁ ${prefix}cantik
│➸ぁ ${prefix}jelek
│➸ぁ ${prefix}babi
│➸ぁ ${prefix}pinter
│➸ぁ ${prefix}kontol
│➸ぁ ${prefix}anjing
│➸ぁ ${prefix}bego
│➸ぁ ${prefix}nolep
│➸ぁ ${prefix}monyet
│➸ぁ ${prefix}beban
│➸ぁ ${prefix}baik
│➸ぁ ${prefix}jahat
│➸ぁ ${prefix}haram
│➸ぁ ${prefix}wibu
│➸ぁ ${prefix}pakboy
│➸ぁ ${prefix}pakgirl
│➸ぁ ${prefix}sadboy
│➸ぁ ${prefix}sadgirl
│➸ぁ ${prefix}hebat
╰─────────────╯

*Wibu Menu*
╭◪「 *Wibu Menu* 」
│➸ぁ ${prefix}ppcouple
│➸ぁ ${prefix}uniform
│➸ぁ ${prefix}cuckold
│➸ぁ ${prefix}zettairyouiki
│➸ぁ ${prefix}sfwneko
│➸ぁ ${prefix}sao
│➸ぁ ${prefix}cosplay
│➸ぁ ${prefix}milf
│➸ぁ ${prefix}loli
│➸ぁ ${prefix}lovelive
│➸ぁ ${prefix}hsdxd
│➸ぁ ${prefix}husbu
│➸ぁ ${prefix}wallml
│➸ぁ ${prefix}waifu
╰─────────────╯

*Hewan Menu*
╭◪「 *Hewan Menu* 」
│➸ぁ ${prefix}fox
│➸ぁ ${prefix}dog
│➸ぁ ${prefix}cat
│➸ぁ ${prefix}panda
│➸ぁ ${prefix}panda2
│➸ぁ ${prefix}bird
│➸ぁ ${prefix}koala
╰─────────────╯

*Image Random*
╭◪「 *Image Menu* 」
│➸ぁ ${prefix}waifu
│➸ぁ ${prefix}wallm
│➸ぁ ${prefix}loli
│➸ぁ ${prefix}cosplay
│➸ぁ ${prefix}milf
│➸ぁ ${prefix}husbu_
╰─────────────╯

*Gtts*
╭◪「 *GTTS Menu* 」
│➸ぁ ${prefix}tts
│➸ぁ ${prefix}kodenegara
│➸ぁ ${prefix}kodebahasa
╰─────────────╯

*TexPro Menu*
╭◪「 *TextPro Menu* 」
│➸ぁ ${prefix}pornhub
│➸ぁ ${prefix}halloween2
│➸ぁ ${prefix}space3d
│➸ぁ ${prefix}horror
│➸ぁ ${prefix}game8bit
│➸ぁ ${prefix}ninjalogo
│➸ぁ ${prefix}tiktokmt
╰─────────────╯

*Maker Menu*
╭◪「 *Maker Menu* 」
│➸ぁ ${prefix}blackpink {teks}
│➸ぁ ${prefix}pipe {teks}
│➸ぁ ${prefix}heloween {teks}
│➸ぁ ${prefix}heloween2 {teks}
│➸ぁ ${prefix}horor {teks}
│➸ぁ ${prefix}nulis {teks}
│➸ぁ ${prefix}sirkuit {teks}
│➸ぁ ${prefix}discovery {teks}
│➸ぁ ${prefix}fiction {teks}
│➸ぁ ${prefix}8bit {teks}
│➸ぁ ${prefix}demon {teks}
│➸ぁ ${prefix}transformer {teks
│➸ぁ ${prefix}berry {teks}
│➸ぁ ${prefix}leyered {teks}
│➸ぁ ${prefix}thunder {teks}
│➸ぁ ${prefix}magma {teks}
│➸ぁ ${prefix}stone {teks}
│➸ぁ ${prefix}neon3 {teks}
│➸ぁ ${prefix}glitch {teks}
│➸ぁ ${prefix}glitch2 {teks}
│➸ぁ ${prefix}broken {teks}
│➸ぁ ${prefix}nulis2 {teks}
│➸ぁ ${prefix}gradient {teks}
│➸ぁ ${prefix}glossy {teks}
│➸ぁ ${prefix}watercolor {teks}
│➸ぁ ${prefix}multicolor {teks}
│➸ぁ ${prefix}neondevil {teks}
│➸ぁ ${prefix}underwater {teks}
│➸ぁ ${prefix}bear {teks}
╰─────────────╯

*Logo Menu*
╭◪「 *Logo Menu* 」
│➸ぁ ${prefix}logokaneki [query]
│➸ぁ ${prefix}logololi [query]
│➸ぁ ${prefix}logosadboy [query]
│➸ぁ ${prefix}logorem [query]
│➸ぁ ${prefix}logogura [query]
╰─────────────╯

*Sound Menu*
╭◪「 *Sound Menu* 」
│➸ぁ ${prefix}sound1
│➸ぁ ${prefix}sound2
│➸ぁ ${prefix}sound3
│➸ぁ ${prefix}sound4
│➸ぁ ${prefix}sound5
│➸ぁ ${prefix}sound6
│➸ぁ ${prefix}sound7
│➸ぁ ${prefix}sound8
│➸ぁ ${prefix}sound9
│➸ぁ ${prefix}sound10
│➸ぁ ${prefix}sound11
│➸ぁ ${prefix}sound12
│➸ぁ ${prefix}sound13
│➸ぁ ${prefix}sound14
│➸ぁ ${prefix}sound15
│➸ぁ ${prefix}sound16
│➸ぁ ${prefix}sound17
│➸ぁ ${prefix}sound18
│➸ぁ ${prefix}sound19
│➸ぁ ${prefix}sound20
│➸ぁ ${prefix}sound21
│➸ぁ ${prefix}sound22
│➸ぁ ${prefix}sound23
│➸ぁ ${prefix}sound24
│➸ぁ ${prefix}sound25
│➸ぁ ${prefix}sound26
│➸ぁ ${prefix}sound27
│➸ぁ ${prefix}sound28
│➸ぁ ${prefix}sound29
│➸ぁ ${prefix}sound30
│➸ぁ ${prefix}sound31
│➸ぁ ${prefix}sound32
│➸ぁ ${prefix}sound33
│➸ぁ ${prefix}sound34
│➸ぁ ${prefix}sound35
│➸ぁ ${prefix}sound36
│➸ぁ ${prefix}sound37
│➸ぁ ${prefix}sound38
│➸ぁ ${prefix}sound39
│➸ぁ ${prefix}sound40
│➸ぁ ${prefix}sound41
│➸ぁ ${prefix}sound42
│➸ぁ ${prefix}sound43
│➸ぁ ${prefix}sound44
│➸ぁ ${prefix}sound45
│➸ぁ ${prefix}sound46
│➸ぁ ${prefix}sound47
│➸ぁ ${prefix}sound48
│➸ぁ ${prefix}sound49
│➸ぁ ${prefix}sound50
│➸ぁ ${prefix}sound51
│➸ぁ ${prefix}sound52
│➸ぁ ${prefix}sound53
│➸ぁ ${prefix}sound54
│➸ぁ ${prefix}sound55
│➸ぁ ${prefix}sound56
│➸ぁ ${prefix}sound57
│➸ぁ ${prefix}sound58
│➸ぁ ${prefix}sound59
│➸ぁ ${prefix}sound60
│➸ぁ ${prefix}sound61
│➸ぁ ${prefix}sound62
│➸ぁ ${prefix}sound63
│➸ぁ ${prefix}sound64
│➸ぁ ${prefix}sound65
│➸ぁ ${prefix}sound66
│➸ぁ ${prefix}sound67
│➸ぁ ${prefix}sound68
│➸ぁ ${prefix}sound69
│➸ぁ ${prefix}sound70
╰─────────────╯

*Other Menu*
╭◪「 *Other Menu* 」
│➸ぁ ${prefix}sticker
│➸ぁ ${prefix}tomp3
│➸ぁ ${prefix}tomp4
│➸ぁ ${prefix}kalkulator
│➸ぁ ${prefix}caklontong
│➸ぁ ${prefix}memegen [teks atas|teks bawah]
╰─────────────╯`
teks =
`*『 ${botname} 』*
*${tanggal}*`
Aikko.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'sᴇᴡᴀʙᴏᴛ' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'runtime':
		    case 'test':
		            run = process.uptime() 
		            teks = `${kyun(runtime)}`
		            reply(teks)
		            break  

//══════════[ QnA MENU ]════════════════════════════//
case 'kapankah':
				if (args.length < 1) return Aikko.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				kapankah = q
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
			sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await (sender)
					break
case 'bisakah':
		if (args.length < 1) return Aikko.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				bisakah = q
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling beruntung','Gak Bisa','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Aikko.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await (sender)
					break
case 'apakah':
           if (args.length < 1) return Aikko.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
           apakah = q
					const apa =['Iya','Tidak','Bisa Jadi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Aikko.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await (sender)
					break
//══════════[ other ]══════════//
case 'sb':
case 'sewabot':
gambar = fs.readFileSync('./image/logo.jpg')
menunya = `*Hallo Kak ${pushname} mau sewa bot?*

*~ OPEN JASA SEWA BOT ~*

*˒ ࣪ ꉂᥐʾ ֛${ownername}Ꮺ ָ࣪۰*
┈─  ꕀ  ───    ꕀ    ───  ꕀ   ─┈


*- Harga sewa -*
➸ ࣪▸ˑ ִֶָ 🔰 1 minggu : 3K
➸ ࣪▸ˑ ִֶָ 🔰 1 Bulan : 5k
➸ ࣪▸ˑ ִֶָ 🔰 Permanen : 15k

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

➸ ࣪▸ˑ ִֶָ 🦠 Bot antidelay
➸ ࣪▸ˑ ִֶָ 🦠 Bot aktif 24 jam
➸ ࣪▸ˑ ִֶָ 🦠 Bot tidak pasaran
➸ ࣪▸ˑ ִֶָ 🦠 Bukan wibusoft
➸ ࣪▸ˑ ִֶָ 🦠 Bot run menggunakan Heroku

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

*- FITUR BOT -*
➸ ࣪▸ˑ ִֶָ 🍥 Antilink grup
➸ ࣪▸ˑ ִֶָ 🍥 Welcome image
➸ ࣪▸ˑ ִֶָ 🍥 Antivirtex
➸ ࣪▸ˑ ִֶָ 🍥 Kick otomatis
➸ ࣪▸ˑ ִֶָ 🍥 Game menu
➸ ࣪▸ˑ ִֶָ 🍥 Nulis 
➸ ࣪▸ˑ ִֶָ 🍥 Button menu
➸ ࣪▸ˑ ִֶָ 🍥 Asupan menu
*Dan masih banyak lagi fitur lainnya yang lebih seru🔥🤤*

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

*- PAYMENT -*
➸ ࣪▸ˑ ִֶָ 🥧 Dana
➸ ࣪▸ˑ ִֶָ 🥧 Gopay

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

*- Sistem sewa bot -*
𝟷. Masukin bot ke grup
𝟸. Transfer
𝟹. Done

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿
*OWNER*
wa.me/${owner}

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿

█│▌║│▌║│█║▌│█

     *©${ownername}*
`


teks =

`${botname}

*${tanggal}*`

but = [

          { buttonId: `${prefix}menu`, buttonText: { displayText: 'ᴍᴇɴᴜ' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'ᴏᴡɴᴇʀ' }, type: 1 }
          
        ]

        sendButImage(from, menunya, teks, gambar, but)

break
case 'rulesbot':
case 'rules':
gambar = fs.readFileSync('./image/logo.jpg')
menunya = 
`𒍮 𝙍𝙪𝙡𝙚𝙨 𝘽𝙤𝙩𝙯

❒͡ 1. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎 𝑩𝒐𝒕𝒛
sᴀɴᴋsɪ : ᴡᴀʀɴ/sᴏғᴛ ʙʟᴏᴄᴋ

❒͡ 2. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑻𝒆𝒍𝒆𝒑𝒐𝒏 𝑩𝒐𝒕𝒛
sᴀɴᴋsɪ : sᴏғᴛ ʙʟᴏᴄᴋ

❒͡ 3. 𝑱𝒂𝒏𝒈𝒂𝒏 𝑩𝒂𝒏𝒅𝒊𝒏𝒈 𝑩𝒐𝒕𝒛
sᴀɴᴋsɪ : ʙʟᴏᴄᴋ ᴘᴇʀᴍᴀɴᴇɴ

❒͡ 𝙅𝙞𝙠𝙖 𝙎𝙪s𝙖𝙝 𝙋𝙖𝙝𝙖𝙢𝙞 𝙍𝙪𝙡𝙚𝙨𝙣𝙮𝙖 , 
𝙎𝙞𝙡𝙖𝙠𝙖𝙣 𝙆𝙚𝙩𝙞𝙠 #𝙢𝙚𝙣𝙪 𝙐𝙣𝙩𝙪𝙠 𝙈𝙚𝙢𝙪𝙡𝙖𝙞 ! ! !

𒍮 𝑶𝒘𝒏𝒆𝒓 𝑩𝒐𝒕𝒛 ↓↓
https://wa.me/${owner}`

teks =
`*『 ${botname} 』*`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'ᴍᴇɴᴜ 😈' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Aikko.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
//══════════[ SETIFIKAT MENU]════════════════════════════//
case 'serti1':
case 'serti2':
case 'serti3':
if (args.length ==0) return reply('Text Nya Mana Tod?')
txtt = args.join (" ")
reply(mess.wait)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
Aikko.sendMessage(from, buff, image, { quoted: ftrol, caption: 'Nih Bro Hasil nya' })
break
//══════════[ BERMAIN MENU ]════════════════════════════//
case 'nickepep':
anu = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=zakigansha`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'tongue': 
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
reply(anu1)
break 
case 'ssweb':
case 'ss':
if (args.length < 1) return reply('Urlnya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}_*`)
buff = await getBuffer(anu.screenshot)
Aikko.sendMessage(from, buff, image, {quoted: ftrol, caption : teks})
break
//Logo Menu
case 'logokaneki':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/kaneki?nama=${query}&apikey=xZiyy`)
Aikko.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'logololi':

if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/lolimaker?nama=${query}&apikey=xZiyy`)
Aikko.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'logosadboy':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} Deffri|Gans`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/sadboy?text1=${m1}&text2=${m2}&apikey=xZiyy`)
Aikko.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'logorem':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/rem?nama=${query}&apikey=xZiyy`)
Aikko.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'logogura':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DEFFBOTz`)
reply(mess.wait)
query = args.join (" ")
bf = await getBuffer(`https://ziy.herokuapp.com/api/Gura?nama=${query}&apikey=xZiyy`)
Aikko.sendMessage(from, bf, image, { quoted: ftrol, caption: 'Nah Kak Jangan Lupa Support DEFFBOTz yah Kak😁' })
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*
*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
case 'script':
case 'sc':
gambar = fs.readFileSync('./image/logo.jpg')
menunya = 
`SUBSCRIBE DEFFBOTz ye
Link:https://github.com/deffrirs/NewBot`

teks =
`*『 ${botname} 』*`
but = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: 'ᴍᴇɴᴜ 😈' }, type: 1 }
        ]
        sendButLocation(from, menunya, teks, gambar, but)
break

//══════════[GAME MENU]════════════════════════════//
case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'sound62':
      case 'sound63':
      case 'sound64':
      case 'sound65':
      case 'sound66':
      case 'sound67':
      case 'sound68':
      case 'sound69':
      case 'sound70':
      reply(mess.wait)
      omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
      Aikko.sendMessage(from, omkeh, MessageType.audio, { quoted: ftrol, mimetype: 'audio/mp4', ptt: true })
          break
//══════════[ owner ]══════════//
case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Aikko.sendMessage(from, {displayName: `Ownernya ${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply(`_Tuh Kak Ownerku_`)
break
case 'join':
              if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return reply('pastikan link sudah benar!')
            var response = await deff.acceptInvite(codeInvite)
            reply('SUKSES')
            } catch {
            reply('LINK ERROR!')
            }
        break
case 'wa.me':
case 'wame':
Aikko.updatePresence(from, Presence.composing) 
options = {
text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: { mentionedJid: [sender] }
}
Aikko.sendMessage(from, options, text, { quoted: mek } )
break
case 'bc':
             if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu100 = await Aikko.chats.all()
             if (isMedia && !Aikko.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Aikko).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Aikko
             bc100 = await Aikko.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Aikko.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 SIARAN DEFFBOTz 」*\n\n${body.slice(4)}`})
}
             fakeyt('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Aikko.sendMessage(_.jid, 
			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,
			"footerText": `${tanggal}`,
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "ᴍᴇɴᴜ"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break

//══════════[ Fitur Download ]══════════//

case 'play':
if (args.length ==0)return reply('Judul Lagunya Apa?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${q}&apikey=Alphabot`)
thmb = await getBuffer(ini.results.thumb)
ply1 =`Judul: ${ini.results.title}\nSize: ${ini.results.size}\nChannel: ${ini.results.channel}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
but = [
{ buttonId: `${prefix}ytmp3 ${args.join(" ")}`, buttonText: { displayText: '️ᴍᴜsɪᴋ 🎵' }, type: 1 },
{ buttonId: `${prefix}ytmp4 ${args.join(" ")}`, buttonText: { displayText: 'ᴠɪᴅᴇᴏ 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'ytmp3':
if (args.length ==0)return reply('Link Nya Mana Banh?')
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp3?query=${q}&apikey=Alphabot`)
thmb = await getBuffer(ini.results.thumb)
ply1 =`Judul: ${ini.results.title}\nSize: ${ini.results.size}\nChannel: ${ini.results.channel}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
mp3 = await getBuffer(ini.results.result)
Aikko.sendMessage(from, mp3, audio, {quoted: mek})
break
case 'ytmp4':
if (args.length ==0)return reply('Link nya Mana banh?')
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/playmp4?query=${q}&apikey=Alphabot`)
thmb = await getBuffer(ini.results.thumb)
ply1 =`Judul: ${ini.results.title}\nSize: ${ini.results.size}\nChannel: ${ini.results.channel}`
ply2 =`Silahkan Pilih Media Di Bawah ini`
mp4 = await getBuffer(ini.results.result)
Aikko.sendMessage(from, mp4, video)
break
case 'tiktoknowm':

anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=NisaaCantik`)

tiktok = await getBuffer(anu.result.nowatermark)

Aikko.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})

break

case 'tiktokwm':

anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=NisaaCantik`)

tiktok = await getBuffer(anu.result.watermark)

Aikko.sendMessage(from, tiktok, video, {quoted: mek, caption : 'Done bro'})

break

case 'tiktokaudio':

anu = await fetchJson(`https://apidhani.herokuapp.com/api/download/tiktok?url=${q}&apikey=NisaaCantik`)

tiktok = await getBuffer(anu.result.audio)

Aikko.sendMessage(from, tiktok, audio, {quoted: mek})

break
//══════════[ Fitur Grup ]══════════//

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('*welcome sudah aktif !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('*welcome sudah off sebelumnya !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('*on untuk mengaktifkan, off untuk menonaktifkan*')
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply(`Udah aktif`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antilink di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Pilih on atau off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return reply(`Udah aktif`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Mengaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
let anu = _antivirtex.indexOf(from)
_antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses ✅, Menonaktifkan fitur antivirtex di grup\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_Pilih on atau off_`)
}
break
case 'report':
case 'lapor':
					const laporan = body.slice(7)
					if (args.length > 300) return deff.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
							var options = {
							text: lapor,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					Aikko.sendMessage(`${owner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main² tidak akan ditanggapi.')
					break
case 'group':
case 'grup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[0] === 'buka') {
reply(`*Berhasil Membuka Grup ${groupMetadata.subject}*`)
Aikko.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
reply(`*Berhasil Memtutup Grup ${groupMetadata.subject}*`)
Aikko.groupSettingChange(from, GroupSettingChange.messageSend, true)
}
break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await Aikko.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Aikko.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Aikko.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Aikko.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Aikko.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Aikko.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Aikko.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case "kick":
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("Tag target yang ingin di kick!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
Aikko.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anu = mek.message.extendedTextMessage.contextInfo.participant;
Aikko.groupRemove(from, [anu]);
reply(mess.success);
} else {
Aikko.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Aikko.groupUpdateSubject(from, `${body.slice(9)}`)
Aikko.sendMessage(from, `\`\`\`Sukses ✅, Mengganti nama grup menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Aikko.groupUpdateDescription(from, `${body.slice(9)}`)
Aikko.sendMessage(from, `\`\`\`Sukses ✅, Mengganti deskripsi grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setppgrup':
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Aikko.downloadMediaMessage(encmedia)
Aikko.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'groupinfo':
if (!isGroup) return reply(mess.only.group)
try {
var pic = await Aikko.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
Aikko.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
Aikko.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break
case 'online':
case 'listonline':
case 'here':          
if (!isGroup) return reply(mess.only.group)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(Aikko.chats.get(ido).presences), Aikko.user.jid]
Aikko.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fkon, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
//══════════[ Fitur Sticker ]══════════//

case 'gifstiker':
case 's':
case 'stickergif':  
case 'sticker':
case 'stiker':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Aikko.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
Aikko.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Aikko.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Aikko.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply('reply stickernya')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Aikko.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
buffer = fs.readFileSync(ran)
Aikko.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
fs.unlinkSync(ran)
})
break
default:
if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    
