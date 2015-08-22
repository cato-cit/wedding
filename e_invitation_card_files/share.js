jQuery(function() {
	jQuery.post('/Mob/Index/share_config', shareData, function(data) {
		    wx.config({
		    appId		: data.appId,
		    timestamp	: data.timestamp,
		    nonceStr	: data.nonceStr,
		    signature	: data.signature,
		    debug	: false,
		    jsApiList: [
		        'onMenuShareTimeline',
		        'onMenuShareAppMessage',
		        'onMenuShareQQ',
		        'onMenuShareWeibo'

		    ]});
		   wx.ready(function() {
			    wx.onMenuShareAppMessage(shareData);
			    wx.onMenuShareTimeline(shareData);
			    wx.onMenuShareQQ(shareData);
			    wx.onMenuShareWeibo(shareData);
			});

			wx.error(function(res) {
				  console.log(res.errMsg);
			});

	},'json');
})