/**
 * 图片滚动效果
 */
		var arr=["4px","-212px","-428px"]; //定义一个数组用来存放图片的位置变化
		var num=0;//图片的变化
		var flag=true;//图片向上还是向下的标示
		var mid;//定时器返回的id
		var min_box=document.getElementsByClassName("min_box")[0];
	    mid=setInterval(fun,2000);//定时器的调用
	//图片滚动效果
	function fun(){
		min_box.style.top=arr[num];
		if(flag){
			down();
		}else{
			up();
		}
	}
	//图片向下滚动
	function down(){
		num++;
		if(num == 2){
			flag = false;	
		}
	}
	//图片向上滚动
	function up(){
		num--;
		if(num <= 0){
			flag = true;	
		}
	}
//鼠标移入
	function over(index){
		var min_box=document.getElementsByClassName("min_box")[0];
		//清除定时器
		clearInterval(mid);
		num = index;
		min_box.style.top=arr[index];
	}
//鼠标移出
	function out(){
		mid=setInterval(fun,2000);
	}