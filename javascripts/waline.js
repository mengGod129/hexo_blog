import {
	init
} from 'https://npm.elemecdn.com/@waline/client@v2/dist/waline.mjs';

init({
	el: '#waline-container',
	serverURL: window.aomori.waline.serverURL,
	search: window.aomori.waline.search,
	emoji: [
      'https://npm.elemecdn.com/@waline/emojis@1.2.0/bmoji',
      'https://npm.elemecdn.com/@waline/emojis@1.2.0/weibo',
    ],
});
