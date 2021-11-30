# 计算机类谜题

This repo is maintained by [Nikucyan](https://github.com/Nikucyan) & [bdcformpara](https://github.com/bdcformpara).
  
> This document will record some puzzles related to computer
---
</br></br>


## 1. 网络搜索
通过铺设让人无法第一眼就看明白的讯息，需用通过搜索之类的方式，间接查询到与之相关的关键信息。

*Example*</br>
比如题目是`4MN-91Y-1VG`，通过谷歌可以搜索到`Cosmic_Compass`，这个关键词。所以解谜内容可能与宇宙或者指南针有关。 </br>

![5YMM_Cosmic_Compass](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/5YMM_Cosmic_Compass.png)
</br></br>

*Example*</br>
根据图片上发布者的微博id，去翻该发布者的微博相册，可以找到相对应的发布时间和与图片同时发布的配文，有可能是线索。 </br>

![computer_puzzles_example1](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/computer_puzzles_example1.jpg)
</br></br>

*Example*</br>
*Retrieved from: wxwoo's blog，[Nazo_Game 攻略](https://wxwoo.blog.luogu.org/nazo-game-guide)* </br>

level-11 </br>
由于此题，google 搜索已经受到污染 </br>
现在去 google 搜 TKw4YRR17dg 会出现 </br>
连图片搜索也未能幸免 </br>
但 Nazo_Game 1.0 时这关的字符串是 zNGQXChu9P8 </br>
而越过长城，走向世界的真实含义就是翻墙了 </br>
正解： google 搜索 zNGQXChu9P8 </br>

![nazo_game_level_11](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/nazo_game_level_11.png)
</br></br>

*Example*</br>
比如提到某人喜欢哼一首歌，其中歌词似乎包含`人生的际遇，稍纵即逝`。搜索后发现这首歌是蔡琴的《机遇》，歌中的旁白提到了“台湾”。那么或许暗示这个唱歌的人，是个台湾人，平时使用注音拼音之类的。


## 2. 编码间转化
通过不同编码之间的转换，来达成加密的效果。注意：由于utf-8的特殊性，有些其它编码的字符用utf-8编码会出错。 </br>
*Retrieved from: 木林森淼，[UTF-8与GBK互转，为什么会乱码](https://blog.csdn.net/yangfengjueqi/article/details/79486162)* </br>

尝试过通过word和纯文本 (plain text, txt) ，之间的转换来进行编码的转化，暂不成功。</br>
*Retrieved from: Microsoft，[在打开和保存文件时选择文本编码](https://support.microsoft.com/zh-cn/office/%E5%9C%A8%E6%89%93%E5%BC%80%E5%92%8C%E4%BF%9D%E5%AD%98%E6%96%87%E4%BB%B6%E6%97%B6%E9%80%89%E6%8B%A9%E6%96%87%E6%9C%AC%E7%BC%96%E7%A0%81-60d59c21-88b5-4006-831c-d536d42fd861)* 

**？（待解决）** 可能必须需要代码才能进行编码上的转化，还是说有其它简易方法

*Example*</br>
*Retrieved from: 变态人生欢乐多，[A站ARG - 方枝联动解谜活动 - 凿饮](https://www.acfun.cn/a/ac21015884?)* </br>

**谜面：** </br>
璇峰湪瀵嗗皝绾垮唴浣滅瓟、鍑块ギ

**谜底：** </br>
请在密封线内作答、凿饮

**解谜过程：** </br>
两段乱码一般的谜面其实是由UTF-8编码的谜底转换为GBK编码后得到的文字。反过来将谜面从GBK编码转换为UTF-8编码即可得到原文，分别为“请在密封线内作答”、“凿饮”。
</br></br>


## Alt Code
*Retrieved from: Wikipedia，[Alt码](https://zh.wikipedia.org/wiki/Alt%E7%A0%81)，[Alt code](https://en.wikipedia.org/wiki/Alt_code)* </br>
Alt码（Alt code）即在IBM兼容个人电脑上，许多字符没有直接对应的按键，此时就可通过Alt-数字键盘输入法（Alt码）输入，方法是按住Alt键再通过数字键区输入字符代码。 </br>
可以通过十进制的方式输入[ASCII](https://zh.wikipedia.org/wiki/ASCII)，[Unicode](https://zh.wikipedia.org/wiki/Unicode%E5%AD%97%E7%AC%A6%E5%88%97%E8%A1%A8)（[Unicode 也可以通过十六进制输入](https://zh.wikipedia.org/wiki/Unicode%E8%BE%93%E5%85%A5%E6%B3%95)），[GBK](https://www.qqxiuzi.cn/bianma/zifuji.php)

**注意**
- windows 系统进行该操作时，如果要输入 GBK 编码内容（也即中文），则需要切换输入法为 ENG
- 不同编辑器因为使用的编码不同，可能会有不同的显示内容，甚至不同的字体也可能会出现编码不同的问题。比如 txt 和 word ，word 内不同字体

*Example* </br>
按紧`Alt键`，然后在小键盘输入`50403`，松开`Alt键`，屏幕上就会显示`你`。

![GBK](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/GBK.png)
</br></br>

*Example* </br>
*Retrieved from: [ARG与我的游戏旅程 ( 中 ) - YesterMorrow](https://mp.weixin.qq.com/s/d4PPhiBVGXUSqctij_c77g)* </br>

> WORD </br>
> Alt + Numeric keypod </br>
> 71 97 109 101 32 83 116 945 114 116 0160 9734

![alt_code](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/alt_code.png)
</br></br>

## 网址问号
这个问号后面的当前页面跳转到下一页面时的参数传递，每一个等于号的两边分别的key和value，下一个页面可以通过这些参数生成适当的页面内容。但如果网址实际上不需要输入什么参数，他就会无视掉。所以可以用这个来提示东西。

*Example* </br>
*Retrieved from: [A站ARG - 方枝联动解谜活动 - 凿饮](https://www.acfun.cn/a/ac21015884)* </br>

第二阶段 - 青布·其十 的谜题中有这么个网址：</br>
`https://www.windows.com/stopcode?go=active.hjxsy.cn&see=be_careful`</br>
当你使用的时候可以发现，真正有效的网址只有前半部分：</br>
`https://www.windows.com/stopcode`</br>
剩下的`?go=active.hjxsy.cn&see=be_careful`都为提示所用。
