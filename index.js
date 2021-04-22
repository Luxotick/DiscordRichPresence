var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Notus Owns Me And All", 
assets : {
large_image : "nw",
large_text : "NotusNetwork" // Dışarıdan bu şekilde görünecek "Oynuyor <Status>" 
},
buttons : [{label : "Discord" , url : "https://discord.gg/ywTtdJpFJR"}]
}
})
})
client.login({ clientId : "809089108861386772" }).catch(console.error); 