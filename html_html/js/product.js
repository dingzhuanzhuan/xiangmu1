/**
 * 手风琴效果
 */
		var overs = document.getElementsByClassName("_over");
		//默认让它显示一个
       _overflow(0);
    function _overflow(indx) {
	for (var i = 0; i < overs.length; i++) {
		overs[i].getElementsByTagName("ul")[0].style.height = "0px";
		overs[indx].getElementsByTagName("ul")[0].style.height = "187px";
	}
}