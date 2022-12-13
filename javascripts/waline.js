import {
	init
} from 'https://unpkg.com/@waline/client@v2/dist/waline.mjs';

init({
	el: '#waline-container',
	serverURL: window.aomori.waline.serverURL,
});
