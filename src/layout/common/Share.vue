<template>
	<div class="share">
		<a href="#" @click="qqFriend" class="qqFriend" style="font-size: 16px">QQ好友分享</a>
		<a href="#" @click="qqZone" class="qqZone" style="font-size: 16px">QQ空间分享</a>
		<a href="#" @click="sinaWeiBo" class="sinaWeiBo" style="font-size: 16px">新浪微博分享</a>
	</div>
</template>

<script>
export default {
	data() {
	return{requstUrl:''}
	},
  methods: {
		//qq好友分享
    //2.分享给QQ好友接口：http://connect.qq.com/widget/shareqq/index.html?url=你的分享网址
                        // &sharesource=qzone
                        // &title=你的分享标题
                        // &pics=你的分享图片地址
                        //&summary=你的分享描述
                        //&desc=你的分享简述
		qqFriend: function() {
			var p = {
				url: this.requstUrl, /*获取URL，可加上来自分享到QQ标识，方便统计*/
				desc: '',            /*分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）*/
				title: '动动小手分享给同学，朋友呗^v^', /*分享标题(可选)*/
				summary: '走过路过不可错过哟!',        /*分享摘要(可选)*/
				pics: '',    /*分享图片地址(可选)*/
				flash: '',   /*分享视频地址(可选)*/
				site: '',    /*分享来源(可选) 如：QQ分享*/
				style: '201',
				width: 32,
				height: 32
			};
			var s = [];
			for (var i in p) {
				s.push(i + '=' + encodeURIComponent(p[i] || ''));
			}
			var url = "http://connect.qq.com/widget/shareqq/index.html?" + s.join('&');
			window.open(url);
		},

    //1.分享到QQ空间接口：https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=你的网址
                        //&sharesource=qzone
                        //&title=你的分享标题
                        //&pics=你的分享图片
                        //&summary=你的分享描述信息
		qqZone: function() {
			var p = {
				url: this.requstUrl, /*你要分享的网址*/
				showcount: '1' /*是否显示分享总数,显示：'1'，不显示：'0' */,
				desc: '' /*默认分享理由(可选)*/,
				summary: '还不赶紧点击进来观看' /*分享摘要(可选)*/,
				title: '好的网站，一起分享', /*分享标题*/
				site: 'this.requstUrl' /*分享来源 如：腾讯网(可选)*/,
				pics: '',   /*分享图片地址(可选)*/
				style: '203',
				width: 98,
				height: 22
			};
			var s = [];
			for (var i in p) {
			  //encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
        //该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。
        //其他字符（比如 ：;/?:@&=+$,# 这些用于分隔 URI 组件的标点符号），都是由一个或多个十六进制的转义序列替换的。
				s.push(i + '=' + encodeURIComponent(p[i] || ''));
			}
			var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + s.join('&');
			console.log("url ====> " +url)
      //url=http%3A%2F%2Flocalhost%2F%23%2F&showcount=1&desc=&summary=还不赶紧点击进来观看&title=好的网站，一起分享&site=this.requstUrl&pics=&style=203&width=98&height=22
			window.open(url);
		},
    //3.分享到新浪微博接口：http://service.weibo.com/share/share.php?
    //                    url=你的分享网址&sharesource=weibo&
    //                    title=你的分享标题&
    //                    pic=你的分享图片&
    //                    appkey=你的key，需要在新浪微博开放平台中申请
		sinaWeiBo12: function() {
			var p = {
				// 表示是否显示当前页面被分享数量(1 显示)(可选， 允许为空)
				count: '1',
				//将页面地址转成短域名， 并显示在内容文字后面。(可选， 允许为空)
				url: this.requstUrl,
				//用于发布微博的来源显示， 为空则分享的内容来源会显示来自互联网。(可选， 允许为空)
				appkey: '',
				//分享时所示的文字内容， 为空则自动抓取分享页面的title值(可选， 允许为空)
				title: '好的网站，一起分享',
				//自定义图片地址， 作为微博配图(可选， 允许为空)
				pic: '',
				//转发时会 @相关的微博账号(可选， 允许为空)
				ralateUid: '',
				//语言设置(zh_cn | zh_tw)(可选)
				language: 'zh_cn'
			};

			var s = [];
			for (var i in p) {
				s.push(i + '=' + encodeURIComponent(p[i] || ''));
			}
			var url = "http://service.weibo.com/share/share.php?" + s.join('&');
			window.open(url);
		}
	},
	created() {
		this.requstUrl = window.location.href;
	}
};
</script>

<style>
	.share{
		/*position: absolute;*/
		bottom: 10px;
		right: 320px;
	}
	.qqFriend{
    font-size: 16px;
		/* background:url(/static/share.jpg) ; */
	}

	@media screen and (max-width: 600px){
	  .share{
	  	position: absolute;
	  	bottom: 20px;
	  	right: 20px;
	  }
	}
</style>
