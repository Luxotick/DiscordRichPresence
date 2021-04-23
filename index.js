var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Details", // details, like description change it whatever you want
assets : {
large_image : "YourLargeImageKey", // your large image key, take this on discord developer page
large_text : "YourPlayingStatus" // it will look like "Playing <Status>" 
},
buttons : [{label : "Button1" , url : "Button1's Url"}],{label : "Github Source", url : "https://github.com/Luxotick/DiscordRichPresence"}] // Button on the discord rpc, you can change the name and the url.
}
})
})
client.login({ clientId : "YourClientID on developer page" }).catch(console.error); 
