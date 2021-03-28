const fs = require('fs-extra')

const help = (prefix, cts, pendaftar) => {
    return `
╔══✪〘 INFORMATION 〙✪══
║
╠➥ Asuip Store BOT
╠➥ 0.1
╠➥ DEVELOPER : IWasHuman
╠➥ wa.me/6285955372133
╠➥ ${pendaftar.length} User Registered
║
╠══✪〘 LIST 〙✪══
║
╠➥ *${prefix}list*
╠➥ *${prefix}beli*
╠➥ *${prefix}pesan*
╠➥ *${prefix}windows*
║
╠══✪〘 LIST MENU 〙✪══
║
╠➥ *${prefix}ownermenu*
╠➥ *${prefix}daftar |nama|umur*
╠➥ *${prefix}bugreport [teks]*
╠➥ *${prefix}iklan*
╠➥ *${prefix}runtime*
╠➥ *${prefix}info*
╠➥ *${prefix}limit*
╠➥ *${prefix}snk*
╠➥ *${prefix}donate*
╠➥ *${prefix}ping*
╠➥ *${prefix}groupbot*
╠➥ *${prefix}adminbot*
╠➥ *${prefix}owner*
║
╠══✪〘 RUNTIME 〙✪══
║
╠➥ WAKTU AKTIF :
╠➥ ${cts}
║
╚═〘 Asuip Store BOT BOT 〙
`
}
exports.help = help
const ownercmd = (prefix) => {
    return `
╔══✪〘 OWNER 〙✪══
║
╠➥ *${prefix}bc [ text only ]*
╠➥ *${prefix}ibc [ with image ]*
╠➥ *${prefix}block 62858xxxxx*
╠➥ *${prefix}unblock 62858xxxxx*
╠➥ *${prefix}addadmin @tagmember*
╠➥ *${prefix}deladmin @tagmember*
╠➥ *${prefix}restart*
╠➥ *${prefix}ekickall*
╠➥ *${prefix}banchat*
╠➥ *${prefix}unbanchat*
╠➥ *${prefix}setname [teks]*
╠➥ *${prefix}setstatus [teks]*
╠➥ *${prefix}setprofilepic*
╠➥ *${prefix}eval [kode JavaScript]*
║
╚═〘 Asuip Store BOT BOT 〙`
}
exports.ownercmd = ownercmd
const admincmd = (prefix) => {
    return `
╔══✪〘 ADMIN 〙✪══
║
╠➥ *${prefix}mute*
╠➥ *${prefix}unmute*
╠➥ *${prefix}ban @tagmember*
╠➥ *${prefix}gift @tagmember jumlah*
╠➥ *${prefix}unban @tagmember*
╠➥ *${prefix}daftarulang @tagmember umur*
╠➥ *${prefix}spamcall [81273xxxx]*
╠➥ *${prefix}addbadword [text]*
╠➥ *${prefix}delbadword [text]*
╠➥ *${prefix}listbadword [text]*
╠➥ *${prefix}resetsticker @tagmember*
╠➥ *${prefix}resetbadword @tagmember*
╠➥ *${prefix}kickall*
╠➥ *${prefix}oleave*
╠➥ *${prefix}opromote*
╠➥ *${prefix}odemote*
╠➥ *${prefix}odelete*
╠➥ *${prefix}oadd 62813xxxxx*
╠➥ *${prefix}okickall*
╠➥ *${prefix}otagall*
║
╚═〘 Asuip Store BOT BOT 〙`
}
exports.admincmd = admincmd
const nsfwcmd = (prefix) => {
    return `
╔══✪〘 NSFW 〙✪══

*Coming Soon*

Support me 
Dana : 6285859202162 (Ferlito Pramaditya Y.M)
Indosat Ooredoo : 6285859202162 (Ferlito Pramaditya Y.M)

╚═〘 Asuip Store BOT BOT 〙`
}
exports.nsfwcmd = nsfwcmd
const praycmd = (prefix) => {
    return `
╔══✪〘 PRAY 〙✪══

*Coming Soon*

Support me 
Dana : 6285859202162 (Ferlito Pramaditya Y.M)
Indosat Ooredoo : 6285859202162 (Ferlito Pramaditya Y.M)

╚═〘 Asuip Store BOT BOT 〙`
}
exports.praycmd = praycmd
const kerangcmd = (prefix) => {
    return `
╔══✪〘 KERANG 〙✪══

*Coming Soon*

Support me 
Dana : 6285859202162 (Ferlito Pramaditya Y.M)
Indosat Ooredoo : 6285859202162 (Ferlito Pramaditya Y.M)

╚═〘 Asuip Store BOT BOT 〙`
}
exports.kerangcmd = kerangcmd
const funcmd = (prefix) => {
    return `
╔══✪〘 FUN 〙✪══

*Coming Soon*

Support me 
Dana : 6285859202162 (Ferlito Pramaditya Y.M)
Indosat Ooredoo : 6285859202162 (Ferlito Pramaditya Y.M)

╚═〘 Asuip Store BOT BOT 〙
`
}
exports.funcmd = funcmd
const mediacmd = (prefix) => {
    return `
╔══✪〘 MEDIA 〙✪══

*Coming Soon*

Support me 
Dana : 6285859202162 (Ferlito Pramaditya Y.M)
Indosat Ooredoo : 6285859202162 (Ferlito Pramaditya Y.M)

╚═〘 Asuip Store BOT BOT 〙`
}
exports.mediacmd = mediacmd
const animecmd = (prefix) => {
    return `
╔══✪〘 ANIME 〙✪══

*Coming Soon*

Support me 
Dana : 6285859202162 (Ferlito Pramaditya Y.M)
Indosat Ooredoo : 6285859202162 (Ferlito Pramaditya Y.M)

╚═〘 Asuip Store BOT BOT 〙`
}
exports.animecmd = animecmd
const othercmd = (prefix) => {
    return `
╔══✪〘 OTHER 〙✪══

*Coming Soon*

Support me 
Dana : 6285859202162 (Ferlito Pramaditya Y.M)
Indosat Ooredoo : 6285859202162 (Ferlito Pramaditya Y.M)

╚═〘 Asuip Store BOT BOT 〙`
}
exports.othercmd = othercmd
const downloadcmd = (prefix) => {
    return `
╔══✪〘 DOWNLOADER 〙✪══

*Coming Soon*

Support me 
Dana : 6285859202162 (Ferlito Pramaditya Y.M)
Indosat Ooredoo : 6285859202162 (Ferlito Pramaditya Y.M)

╚═〘 Asuip Store BOT BOT 〙`
}
exports.downloadcmd = downloadcmd
const groupcmd = (prefix) => {
    return `
╔══✪〘 GROUP 〙✪══
║
╠➥ *${prefix}snk*
╠➥ *${prefix}wame*
╠➥ *${prefix}groupinfo*
╠➥ *${prefix}add 62858xxxxx*
╠➥ *${prefix}kick @tagmember*
╠➥ *${prefix}promote @tagmember*
╠➥ *${prefix}demote @tagadmin*
╠➥ *${prefix}tagall*
╠➥ *${prefix}adminList*
╠➥ *${prefix}ownerGroup*
╠➥ *${prefix}leave*
╠➥ *${prefix}delete [replyChatBot]*
╠➥ *${prefix}kickAll*
╠➥ *${prefix}group [open|close]*
╠➥ *${prefix}NSFW [enable|disable]*
╠➥ *${prefix}left [enable|disable]*
╠➥ *${prefix}welcome [enable|disable]*
╠➥ *${prefix}simi [enable|disable]*
╠➥ *${prefix}antisticker [enable|disable]*
╠➥ *${prefix}antilink [enable|disable]*
╠➥ *${prefix}antibadword [enable|disable]*
║
╚═〘 Asuip Store BOT BOT 〙`
}
exports.groupcmd = groupcmd
const readme = (prefix) => {
    return `
            *「 STALK 」*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktokstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}igstalk @tobz2k19*

*[@username]* Diisi dengan Username yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smulestalk @tobz2k19*

            *「 YT SEARCH 」*

*[video]* Diisi dengan Judul Video yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}video Erpan1140*
Jika ingin mendownload video harap ketik #getvideo [IdDownload] atau #getvideo [urutan]

*[lagu]* Diisi dengan Judul Lagu yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}music Alan Walker Alone*
Jika ingin mendownload lagu harap ketik #getmusic [IdDownload] atau #getmusic [urutan]

*[IdDownload] atau [urutan]* Diisi dengan IdDownload yang valid tanpa tanda “[” dan “]”
Contoh : *Jika tidak reply pesan : ${prefix}getmusic Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getmusic 1*
Contoh : *Jika tidak reply pesan : ${prefix}getvideo Iv32bS1*
Contoh : *Jika reply pesan : ${prefix}getvideo 1*

            *「 DOWNLOADER 」*

*[linkStarmaker]* Diisi dengan link Starmaker yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}starmaker https://m.starmakerstudios.com/d/playrecording?app=sm&from_user_id=3096224747920316&is_convert=true&recordingId=10696049124506354&share_type=copyLink*

*[linkTwitter]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}twitter https://twitter.com/PassengersMovie/status/821025484150423557*

*[linkXnxx]* Diisi dengan link Xnxx yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}xnxx http://www.xnxx.com/loli/stev-gay*

*[linkNekopoi]* Diisi dengan link Nekopoi yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}nekopoi https://nekopoi.care/tsunpuri-episode-1-subtitle-indonesia/*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Diisi dengan link YouTube yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ytmp4 https://youtu.be/Bskehapzke8*

*[linkTiktok]* Diisi dengan link Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

*[linkSmule]* Diisi dengan link Smule yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}smule https://www.smule.com/p/767512225_3062360163*

*[linkIg]* Diisi dengan link Instagram yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Diisi dengan link Facebook yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[linkTiktok]* Diisi dengan link facebookt Tiktok yang valid tanpa tanda “[” dan “]”
Contoh : *${prefix}tiktok https://vt.tiktok.com/yqyjPX/*

            *「 OTHER 」*

*[daerah]* Diisi dengan daerah yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalShalat Tangerang*

*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *${prefix}jadwalTv Indosiar*

*[query]* Diisi dengan query/pencarian yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}googlesearch siapa itu Asuip Store BOT*

*[tempat]* Diisi dengan tempat/lokasi yang valid, tanpa tanda “[” dan “]“
Contoh : *${prefix}cuaca tangerang*

*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *${prefix}tts id Test*
Note : Max 250 huruf

*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *${prefix}quotemaker |Odading|Mang Oleh|Shark*

*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *${prefix}lirik aku bukan boneka*

*[ipaddress]* Diisi dengan Ip Address yang valid, tanpa tanda “[” dan “]”.
Contoh : *${prefix}checkip 182.0.144.145*`
}
exports.readme = readme
const info = () => {
    return `
╔══✪〘 INFORMATION 〙✪══
║
╠➥ *BOT TYPE : NODEJS V14*
╠➥ *NAME : Asuip Store BOT BOT*
╠➥ *VERSION : 0.1*
╠➥ *TEAM : @TeamNoob*
║
╚═〘 Asuip Store BOT BOT 〙
`
}

exports.info = info
const snk = () => {
    return `Syarat dan Ketentuan Bot *Asuip Store BOT*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !`
}
exports.snk = snk
const sewa = () => {
    return `
╔══✪〘 IKLAN 〙✪══
║
╠═══════════════════════════
╠➥ *READY RDP / VPS MURMER!!*
╠➥ *4 GB 2 CORE 30K*
╠➥ *8 GB 2 CORE 50K*
╠➥ *8 GB 4 CORE 70K*
╠➥ *16 GB 4 CORE 90K*
╠═══════════════════════════
╠➥ *DAFTAR SEWA & BUAT BOT :*
╠➥ *SEWA : 10K/GRUP (BULAN)*
╠➥ *BUAT : 50K (BISA JADI OWNER)*
╠➥ *PEMBAYARAN BISA MELALUI :*
╠➥ *OVO, PAYPAL, DANA, PULSA +5K*
╠═══════════════════════════
╠➥ *KEUNTUNGAN SEWA BOT :*
╠➥ *1. BISA MENJADI ADMIN Asuip Store BOT*
╠➥ *2. BISA MENDAPATKAN COMMAND ADMIN*
╠➥ *KEUNTUNGAN BUAT BOT :*
╠➥ *1. BISA MENJADI OWNER BOT SENDIRI*
╠➥ *2. BISA MENGGANTI NAMA BOT SENDIRI*
╠➥ *3. BISA MEMBAWA BOT KE GROUP*
╠➥ *4. BISA MENGGUNAKAN COMMAND OWNER*
╠➥ *5. BISA MENYEWAKAN BOT KEMBALI*
║
╠═══════════════════════════
║
╠➥ *JIKA MINAT IKLAN DIATAS*
╠➥ *HARAP HUBUNGI NOMOR DIBAWAH :*
╠➥ *wa.me/6281311850715*
║
╚═〘 Asuip Store BOT BOT 〙
`
}
exports.sewa = sewa
const listbeli = (prefix) => {
	return`
	LIST HARGA RDP/VPS MARET 2021

	RAM | CORE | HARGA
	4GB | 2CORE | 30K
	8GB | 2CORE | 50K
	8GB | 4CORE | 70K
	16GB | 4CORE | 90K

	Silahkan Di Order Ya kak :)`
}
exports.listbeli = listbeli
const belibang = (prefix) => {
	return`
	ISI FORMULIR PEMBELIAN DULU KAK
	
		## FORMULIR ##
	===================
	Nama : 
	Ram : 
	Core :
	Windows : 
	Pembayaran :
	===================
	Dana/Gopay/Atm
	===================
		## ASUIP STORE ##
	
	JIKA SUDAH PASTIKAN DATA YANG INGIN ANDA KIRIM BENAR, KAMI TIDAK INGIN TERJADINYA KESALAHAN ATAS APA YANG ANDA ISI
	#NOREFUND
	
	SILAHKAN KETIK ${prefix}pesan [ kirim data formulir yang sudah di isi ]
`
}
exports.belibang = belibang
const windowsversi = () => {
	return`
	WINDOWS UNTUK RDP / VPS
	
	WINDOWS | VERSI
	
	windows | 2012
	windows | 2016
	windows | 2019
	windows | 10 pro`
}
exports.windowsversi = windowsversi
const sumbang = () => {
    return `
╔══✪〘 DONATE 〙✪══
║
╠➥ *DONASI BISA MELALUI :*
╠➥ *DANA : 085859202162*
╠➥ *TERIMA KASIH BANYAK YANG SUDAH MAU DONASI*
║
╚═〘 Asuip Store BOT BOT 〙
`
}
exports.sumbang = sumbang
const listChannel = () => {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel
const bahasalist = () => {
    return `*List kode Bahasa*\n
  *Code       Bahasa*
    sq        Albanian
    ar        Arabic
    hy        Armenian
    ca        Catalan
    zh        Chinese
    zh-cn     Chinese (China)
    zh-tw     Chinese (Taiwan)
    zh-yue    Chinese (Cantonese)
    hr        Croatian
    cs        Czech
    da        Danish
    nl        Dutch
    en        English
    en-au     English (Australia)
    en-uk     English (United Kingdom)
    en-us     English (United States)
    eo        Esperanto
    fi        Finnish
    fr        French
    de        German
    el        Greek
    ht        Haitian Creole
    hi        Hindi
    hu        Hungarian
    is        Icelandic
    id        Indonesian
    it        Italian
    ja        Japanese
    ko        Korean
    la        Latin
    lv        Latvian
    mk        Macedonian
    no        Norwegian
    pl        Polish
    pt        Portuguese
    pt-br     Portuguese (Brazil)
    ro        Romanian
    ru        Russian
    sr        Serbian
    sk        Slovak
    es        Spanish
    es-es     Spanish (Spain)
    es-us     Spanish (United States)
    sw        Swahili
    sv        Swedish
    ta        Tamil
    th        Thai
    tr        Turkish
    vi        Vietnamese
    cy        Welsh
      `
}
exports.bahasalist = bahasalist
