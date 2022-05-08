function handler(m) {
  /*const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)*/
  
  m.reply(`
*≡ OWNER*

▢ Instagram :
  • https://instagram.com/bayashenry06
▢ WhatsApp :
  • wa.me/593939362849
▢ Telegram : 
  • t.me/
  • t.me/ (canal)
  • t.me/ (grupo)
▢ Facebook : 
  • https://facebook.com/
  • https://facebook.com/
▢ YouTube : 
  • https://youtube.com/
`) 


}

handler.help = ['Creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
