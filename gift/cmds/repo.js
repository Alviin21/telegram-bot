// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝗚𝗜𝗙𝗧𝗘𝗗𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨

module.exports = {
    config: {
        name: "repo",
        author: "Gifted Tech",
        description: "Display bot repo",
        category: "ᴛᴏᴏʟs",
        usage: ".feature",
        usePrefix: true
    },

    onStart: async function({ bot, chatId }) {
        try {
            const statsMessage = `
𝗚𝗶𝗳𝘁𝗲𝗱-𝗠𝗱 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 𝗕𝗼𝘁:
           
𝗥𝗲𝗽𝗼 𝗟𝗶𝗻𝗸: https://github.com/mouricedevs/telegram-bot
Kindly fork and Star Repo for Courage...
    Heppy Deployment!!!
    
𝗠𝗮𝗱𝗲 𝗜𝗻 𝗞𝗲𝗻𝘆𝗮 𝗕𝘆 𝗚𝗶𝗳𝘁𝗲𝗱𝗧𝗲𝗰𝗵
            `;

            bot.sendMessage(chatId, statsMessage);
        } catch (error) {
            console.error('[ERROR]', error);
            bot.sendMessage(chatId, 'An error occurred while fetching the features.');
        }
    }
};


// ©𝟮𝟬𝟮𝟰
// 𝗚𝗜𝗙𝗧𝗘𝗗 𝗧𝗘𝗖𝗛
// 𝗧.𝗠𝗘/𝗚𝗜𝗙𝗧𝗘𝗗𝗠𝗗
// 𝗔𝗗𝗗𝗜𝗡𝗚 𝗠𝗢𝗥𝗘 𝗙𝗜𝗟𝗘𝗦 𝗦𝗢𝗢𝗡
// 𝟮𝟬𝟮𝟱 𝗜𝗦 𝗚𝗢𝗡𝗡𝗔 𝗕𝗘 𝗕𝗘𝗧𝗧𝗘𝗥
// 𝗖𝗔𝗡 𝗪𝗘 𝗖𝗢𝗟𝗟𝗔𝗕𝗢𝗥𝗔𝗧𝗘 𝗢𝗡 𝗔 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗪𝗜𝗧𝗛 𝗬𝗢𝗨
