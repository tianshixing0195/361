function createCar(data){
	    let goodsList = data;
		let index =1;
		let colors = goodsList[0].beiyong1.split(","); //颜色
		let n= colors.length;
		let allimgs = goodsList[0].goodsImg.split(","); //图片
		let sizes = goodsList[0].beiyong3.split(","); //尺寸
	//单个商品显示的大盒子
	 let $oneGoodsBox = $("<div></div>");
	     $oneGoodsBox.attr("class","shop-details");
	     $("#goodsMessage").append($oneGoodsBox);
	 
	 //左边选择按钮的盒子
	let $chooseBox = $("<div></div>");
	    $chooseBox.attr("class","choose");
	    $oneGoodsBox.append($chooseBox);
	 
	 //盒子里的span 现实选择状态
	let $checkBox = $("<input/>");
	    $checkBox.attr("type","checkbox");
	    $chooseBox.append($checkBox);
	 
	 //商品详情的盒子
	let $dl=$("<dl></dl>");
	 $oneGoodsBox.append($dl);
	 
	 //dt中显示商品图片
	let $dt =$("<dt></dt>");
	    $dl.append($dt);
	let $imgbox = $("<img />");
		$imgbox.attr("src",'../img/manshoseImg/'+allimgs[n*index]);
		$dt.append($imgbox);
	
	
	//dd中显示文字
	let $dd= $("<dd></dd>");
	    $dl.append($dd);
	let $h3 = $("<h3></h3>");  //鞋名
	    $h3.html(goodsList[0].goodsName);
	    $dd.append($h3);
	
	let $ulbox = $("<ul></ul>");
	    $dd.append($ulbox);
	    //颜色
	let $liLeftBox = $("<li></li>");
	    $liLeftBox.html("颜色：");
	   
	    $leftSpan = $("<span></span>");
	    $leftSpan.html(colors[index]);
	    $liLeftBox.append($leftSpan);
	    $ulbox.append($liLeftBox);
	    //尺寸
	let $liRightBox = $("<li></li>");
	    $liRightBox.html("尺寸:");
	   
	    $rightSpan = $("<span></span>");
	    $rightSpan.html(sizes[1]);
	    $liRightBox.append($rightSpan);
	    $ulbox.append($liRightBox);
	//显示商品单价的盒子
	let $priceBox = $("<div></div>");
	    $priceBox.attr("class","goods-price");
	    $oneGoodsBox.append($priceBox);
	  //现价
	let $currPrice = $("<h4></h4>");
		$currPrice.html(goodsList[0].goodsPrice);
		$priceBox.append($currPrice);
	    //原价
	let $p1Box = $("<p></p>");
		$p1Box.html(goodsList[0].beiyong2);
		$priceBox.append($p1Box);
	
	//数量
	let $numberBox = $("<div></div>");
	    $numberBox.attr("class","goods-number-change");
	    $oneGoodsBox.append($numberBox);
    //减号
    let $lessButton = $("<button></button>");
	    $lessButton.attr("class","less-count");
	    $numberBox.append($lessButton);
    //数量显示
    let $num = $("<input/>");
		$num.attr("type","text");
		$num.val(goodsList[0].goodsCount);
		$numberBox.append($num);
		
		//加号
    let $addButton = $("<button></button>");
	    $addButton.attr("class","add-count");
	    $numberBox.append($addButton);
	
	//显示商品单个商品总价格的大盒子
	let $subTotalBox = $("<div></div>");
	    $subTotalBox.attr("class","subTotal");
	    $oneGoodsBox.append($subTotalBox);
	//单个商品总价格
	let $p2Box = $("<p></p>");
		$p2Box.html("10.00");
		$subTotalBox.append($p2Box);
		
		
    //操作
    let $deleteBox = $("<div></div>");
	    $deleteBox.attr("class","operate");
	    $oneGoodsBox.append($deleteBox);
	    //移到收藏夹
	let $moveBox = $("<h4></h4>");
	    $moveBox.html("移到收藏夹");
	    $deleteBox.append($moveBox);
	    //删除
	let $p3Box = $("<p></p>");
		$p3Box.html("删除");
		$deleteBox.append($p3Box);
		    
}