import {
	init
} from 'https://cdn.jsdelivr.net/gh/mengGods/Blog_CDN_2@1.9.5/meng.me/waline.mjs';

init({
	el: '#waline-container',
	serverURL: window.aomori.waline.serverURL,
	search: window.aomori.waline.search,
	emoji: [
      '//cdn.jsdelivr.net/gh/walinejs/emojis@1.1.0/alus',
    ],
});
