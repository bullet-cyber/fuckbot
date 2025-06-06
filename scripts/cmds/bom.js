module.exports = {
    config: {
      name: "bom",
      aliases: [],
      version: "1.0",
      author: "MOHAMMAD-BADOL",
  description: "Text translation", //**your needed my cmd but don't change My credit & share this cmd***and original author fb I'd : https://m.me/B4D9L **//
      countDown: 5,
      role: 0,
      shortDescription: "gc for bom bom",
      longDescription: "gc for bom bom",
      category: "OWNER",
      guide: "{pn}",
    },
    
  onStart: async function ({ api, event, Users }) {
      var { threadID, messageID } = event;
      var k = function(k) { api.sendMessage(k, threadID) };
      
      //*create Mohammad Badol
      
      for (i = 0; i < 10; i++) {
        k("fuck you baby😡😡");
      }
  }  
    }
