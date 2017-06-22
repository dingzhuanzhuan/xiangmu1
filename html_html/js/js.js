//获取banner图中li的集合(banner图的循环出现)
var lis = document.getElementsByClassName("banner_tu1");
//定义个全局变量用来显示li
var _li = 0;
//获取banner图下面的按钮
var annius = document.getElementsByClassName("anniu");
//定义一个全局变量用来显示anniu(按钮)
var _anniu = 0;
//定义一个返回定时器的id
var tz_id=setInterval(_banner, 1000);
/**
 * 左右按钮点击事件
 */
var flage;
function pgup(){
			if (flage) {//如果定时器正在运行
				--_li;//让索引回到自身
				flage=false;//修改标示
			}
			--_li;
			//处理第四张的特殊情况
			if (_li==-2) {
				_li=2;
			}
			if (_li<0) {
				_li=3;
			}
		}
function pgdown(){
			if (flage) {//如果定时器正在运行
				--_li;//让索引回到自身
				flage=false;//修改标示
			}
			++_li;
			if (_li>3) {
				_li=0;
			}
		}
//var _bouttons = document.getElementsByClassName("_button");
//for (var i = 0; i < _buttons.length; i++) {
//	(function(num) {
//		_bouttons[i].onclick = function() {
//			if (num == 0) {
//				_li -= 2;
//				_anniu -= 2;
//				if (_li == -2) {
//					_li = 2;
//					_anniu = 2;
//				}
//				if (_li < 0) {
//					_li = 3;
//					_anniu = 3;
//				}
//			}
//			_banner(); //调用函数
//			//清除定时器
//			clearInterval(tz_id);
//			//更新Int_id值，并重开时间函数
//					tz_id=setInterval(_banner, 1000);
//		}
//	})(i)
//}
/***
 * 点击哪一个按钮跳到相应图片
 */
		for(var i = 0; i < annius.length; i++) {
			(function(num) {
				annius[i].onclick = function() {
					//banner图的动态效果和按钮的背景颜色一样
					_li=num;
					_anniu=num;
					_banner();
					//清除定时器
					clearInterval(tz_id);
					tz_id=setInterval(_banner, 1000);
				}
			})(i)
		}
/**
 * banner图的效果
 */
function _banner() {
	//先让每一个li先隐藏
	for (var i = 0; i < lis.length; i++) {
		lis[i].style.opacity = "0";
	}
	//修改li让它显示
	lis[_li].style.opacity = "1";
	_li++;
	//li有上限要判断
	if (_li > 3) {
		_li = 0;
	}
//bannertu下面的按钮背景颜色的改变
	for (var j = 0; j < annius.length; j++) {
		annius[j].style.background = "rgba(0,0,0,0.5)";
	}
	annius[_anniu].style.background = "red";
	_anniu++;
	//li有上限要判断
	if (_anniu >= 4) {
		_anniu = 0;
	}
}