import TelegramBot from 'node-telegram-bot-api';

var BOT_TOKEN = '512381639:AAFj7ZUXSAQef-ZY0SHDwQBZp-P8zOgMt1M';
const bot = new TelegramBot(BOT_TOKEN, {polling: true});

bot.on('message', msg => {
  const {chat: { id }} = msg
  bot.sendMessage(id,'Pong')
})
