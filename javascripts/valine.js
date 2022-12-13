;(function () {
    if (window.aomori.valine && window.aomori.valine.enable) {
        new Valine({
            el: '#valine-container',
            appId: window.aomori.valine.appId,
            appKey: window.aomori.valine.appKey,
            placeholder: window.aomori.valine.placeholder,
            avatar: window.aomori.valine.avatar,
            pageSize: window.aomori.valine.pageSize,
            lang: window.aomori.valine.lang,
            visitor: window.aomori.valine.visitor,
            highlight: window.aomori.valine.highlight,
            recordIP: window.aomori.valine.recordIP,
            emojiCDN: window.aomori.valine.emojiCDN,
            emojiMaps: {
                "smile":"e3/2018new_weixioa02_org.png",
                "lovely":"09/2018new_keai_org.png",
                // ... 更多表情
            },
            enableQQ: window.aomori.valine.enableQQ,
            requiredFields: window.aomori.valine.requiredFields,
        })
    }
})()
