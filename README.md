## 总结

终于实现了,前前后后,一边学习,一边写,简陋版本锤子剪刀布升级版! 鼓掌

现在来总结下,总结-->学习-->修改-->总结,其乐无穷也.

### 电脑出什么

+ 数组存放所有的可能,通过随机一个数字来实现取值
+ Math.random()随机数
+ Math.random()*10 -5 实现(1-5),未完全验证是否合理*
+ Math.floor()求整
+ 刚好学习了jQuery,就用上了
+ 事件绑定
+ 匿名函数
+ css style的获取(大坑,不过填得差不多了)[css-style](../cssstyle/css-style.md)

### 怎么获胜了?

+ 根据路径中rock.paper的不同来匹配不同的case
+ 首字母有重复,就改成了第二字母
+ 通过正则准确定位index,**element.search(/rock/i)**;
+ 又是正则方法*/patter/.test()*来确定css style中background-image值(字符串)时候有对应的字符,而实现最终的*获胜*.

### 方法更新

之前采用了搜寻关键字符: src.search(/rock/i)来获取参考字符的index number.因为是src是变动的,在出其它的时候,如布,就不能在src中匹配到rock,下面的switch会跳到default语句.

改进办法:

1. 利用choices数组中固定rock来获取index number,但是因为html中元素的background-src是跨文件的,所以从choices中获得字符位置远小于src中需求的字符位置.

由1想到既然url不一样,那我就把src地址切割,利用string方法很容易实现,slice(初始位置,结束位置),我们所有的src值都是一个url,通过选找最后的'/'来确定一个索引,而我们需要一个5中情况下能特定的结果,而每种情况对应单词的第二个字母是完全不同的,所以src.slice(src.lastIndexOf('/') +1 , src.lastIndexOf('/') + 2);获取我们判断需要的特定字符,在匹配switch,完成判断过程,具体实现参考源码.




