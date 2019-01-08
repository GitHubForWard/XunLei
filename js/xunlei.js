/**
 * Created by 丞象 on 2018/9/5.
 */
//获取图片
var img=document.getElementById("img");
//存储图片
var imgArr=["201806261053564966.jpg","201806082104343468.jpg","201702151452533692.jpg","201702151452362548.jpg","201804171831356107.png"]
//定义函数
function shuffling(j){
    for(var x=0;x<imgArr.length;x++){
        if(x==j){
            img.src="image/"+imgArr[x];
        }
    }
}
var box=document.querySelectorAll(".box");
console.log(box);
//定义函数
function anchor(a){
    for(var x=0;x<box.length;x++){
        if(x==a){
        box[x].style.display="block";
        }else{
            box[x].style.display="none";
        }
    }
}