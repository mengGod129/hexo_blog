import {
	init
} from 'https://npm.elemecdn.com/mengblog@1.0.2/js/waline.mjs';

init({
	el: '#waline-container',
	serverURL: window.aomori.waline.serverURL,
	search: window.aomori.waline.search,
	emoji: [
      'https://npm.elemecdn.com/mengblog@1.0.1/emojis/bmoji',
      'https://npm.elemecdn.com/mengblog@1.0.1/emojis/weibo',
    ],
});
