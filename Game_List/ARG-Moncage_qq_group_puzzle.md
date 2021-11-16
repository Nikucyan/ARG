# ARG - 笼中窥梦群内解谜


<a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/3.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.

---

11 月 15 日凌晨，笼中窥梦粉丝群内 Eureka（其实就是 [bdcformpara](https://github.com/bdcformpara)）发起模仿官方的解谜活动，并附下图（名为 4MN-91Y-1VG.jpg），答案是 7 个汉字。

<img src="https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/4MN-91Y-1VG.png" alt="4MN-91Y-1VG" style="zoom:67%;" />



## 海报

随着群里逐渐活跃，解谜也开始了。

首先是解开海报上的谜题，左上角的 `/s/155rzEDEn3AiY5LqXM_dKaA` 自然最早引起了大家的注意。熟悉网盘分享的老司机肯定一看就明白这是一串**百度云**（或阿里云）的分享链接，补充上度盘的前缀 `pan.baidu.com` 后，要求输入 4 位提取码。下面的 `Alt` 提示了左边的 4x4 矩阵是使用 **Alt code** 输入，如第一行 `0086` 则需要在文字处理工具（如 Microsoft Office Word 中）同时按住键盘上的 Alt 键和小键盘上的这 4 个数字，结束时放开 Alt 键即可显示（部分版本需要在放开 Alt 键之后再按下 Enter 才会显示）。至此，度盘链接和提取码 `V15p` 都输入正确，我们得到了一个名为 `1.rar` 的压缩文件。

但是压缩文件也需要解压密码，这么看还需要从图中寻找更多信息。

接下来这段可能也是卡了最长时间的一段。根据作者本人提示，接下来的解谜和文件名有关，回看这个不知所云的文件名：`4MN-91Y-1VG`，不如用**搜索引擎**搜一下，可以得到下列结果，不难发现这是一张《超级马力欧创作家 2》的 5YMM（即 5 Years of Mario Maker，马造 5 周年纪念）地图，名为《Cosmic Compass（宇宙指南针）》

<img src="https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211115200016403.png" alt="image-20211115200016403" style="zoom:80%;" />

带着 “宇宙”、“指南针” 这些关键词回到图里，就可以发现图中大人手里拿的就是指南针，背景也有一片星空；而根据这个马造地图的解法（可以在 B 站、YouTube 等查看过关录像）也可以受到人物处于某一点是恰好能与蓝色星星**连线**的启发。尝试将指南针与背景的蓝色星星（恰好也是在一条直线上的数字）连接起来。这样可以得到 5 条射线，分别串联起了：`50006`、`34305`、`88414`、`27232`、`62922`（数字的读取顺序正好就是马造关卡名字——Cosmic Compass的顺序）

<img src="https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/image-20211115224446758.png" alt="image-20211115201116988" style="zoom:80%;" />

这些数组以 5 个数字为一组，根据提示 “密码为 5 位汉字” 可推测实际上是使用了**四角号码编码**。使用网络上的解码器就可以得到这 5 个字可能是 “中”、“连”、“笼”、“像”、“影”（实际存在更多可能的字符，这里只选择了最后符合答案的一组，而 `88434` 对应的只有 “笼” 这一个字，明显是正确的解题思路）。将这几个字连接为通顺的句子则是：“**笼中连影像**”，这就是第一个压缩包的密码。

顺道一提，图片里的大部分元素都是笼中窥梦的相关元素，比如大人手里拿的指南针，就是制作组之前动态发的指南针。

<img src="https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/compass.png" alt="image-20211115201116988" style="zoom:80%;" />


## 压缩文件 1

解压缩后可以发现文件夹中是一个 `Game.exe` 可执行文件（怎么看都像 RPGMaker 做的），打开后就是一个过渡游戏的运行界面了（果然是 RM）

<img src="https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211115202156170.png" alt="image-20211115202156170" style="zoom:80%;" />

多次与游戏中唯一物体互动无果后可以看到完整内容，其中 “移开”、“眼睛” 和省略号处都是在抖动的，提示了这几个词是重点。虽然也有人认为可能是移开眼睛放置游戏画面一段时间，但并没有任何变化。经过推断，省略号处应该为`window（窗口）`，而正确的解决方案应该是将这个游戏窗口移开（移动到屏幕之外）。

<img src="https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211115202306417.png" alt="image-20211115202306417" style="zoom:67%;" />

此刻可以发现桌面上突然新增了一个名为 `佛曰：与佛论禅.txt` 的奇怪的文本文件。

![image-20211115202731345](https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211115202731345.png)

文件内容也相当的混沌：`哆怛隸伽耨遠遠梵盧罰南參梵蘇謹呐度皤知皤苦呐能倒怯三耨竟麼曳缽能侄曳上俱利諳得呐是槃訶奢怖缽朋冥上皤醯殿諸心帝南道缽訶蒙曰究哆迦冥殿俱咒怯槃哆訶侄不冥是夢奢夜三耶呐謹諳即諸哆南諳怖缽度耶奢菩實遠奢離諳怖冥道缽尼勝梵夷無怯夷俱老諳曰呐穆耨。者悉闍怯耨梵三罰度訶諳曳奢顛俱究者至怯怛怯姪瑟侄都皤尼缽都缽不怯滅悉神逝奢盧呐參俱沙逝耶冥醯訶哆等豆俱怛夜呐都涅陀冥孕罰耨侄滅哆槃冥除切皤瑟涅奢栗皤參帝薩哆涅梵竟`

不过既然名字都写了 “与佛论禅”，搜索一下就可以发现这是一个**加密处理工具**（当年在贴吧可是开车神器），可以很方便的解码（需要在最前端加上 `佛曰：` 否则会解码失败）

![image-20211115203059355](https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211115203059355.png)

可以得到一串 GitHub 托管下的[网址](https://raw.githubusercontent.com/bdcformpara/arg/master/2.rar)：`https://raw.githubusercontent.com/bdcformpara/arg/master/2.rar`

这样我们就得到了第二个压缩文件。

## 压缩文件 2

打开压缩文件后可以看到这个压缩包包含了两个文件：一个 `.mp3` 格式名为 `METHOD: reverse_the_output` 的音频文件和一个名为 `简.rar` 的压缩文件。接下来这段解谜也是这次解谜中耗时非常长的一段。

![image-20211115203411430](https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211115203411430.png)

打开 MP3 文件可以发现是很奇怪的音频，加上文件名中的 “reverse” 基本可以确定需要**倒放**。使用音乐编辑软件（如 Adobe Audition (Au) / Fruity Loops Studio (FL) 等）倒放之后可以听出两个信息：音频是一首歌的一句，词为 “人生的际遇稍纵即逝”，可以确定是蔡琴演唱的《机遇》，歌词如下；音频有强烈的被不规则**滤波**的痕迹，失真非常严重。

![image-20211115204426409](https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211115204426409.png)

根据大家的推断和对歌词的查找，基本将这首歌需要的**关键词**限定在了：“**地球**”、“**台湾**”、“**岛**”、“**小镇**” 这四个词

而另一边，使用音频编辑软件查看**频谱**的大佬们也发现了频谱中被人为画出来的 `A/4XU3U4FUP FU/6` 

<img src="https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211115204531390.png" alt="image-20211115204531390" style="zoom:80%;" />

但这两者的联系就变得十分困难。

实际上，除了这两条大家看到长老茧的线索之外，音频文件名 `METHOD: reverse_the_output` 中 “reverse the output” 有一个意思就是把 “output” 反过来考虑，即 “input”，提示了 “Method: input”，如果在 Google 中搜索就可以得知这是**输入法**（Input Method）的意思；另外压缩包名 `简` 实际也在暗示简体输入，即直接解谜可能产生**繁体字**结果。这再和歌词信息中的关键词之一 “**台湾**” 也联系了起来。所以最后的解决方法就是：找到台湾常用的输入法（**注音输入法**），将上面的代码在键盘上直接打出来，再转为简体字，就是答案。

<img src="https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211115215636170.png" style="zoom: 33%;" />

所以答案为 “**梦里忆亲情**”（实际由于注音输入法的特性，如上图的同音字也可能出现，但如果和上面的那次压缩包密码结合起来正好能对照上就不会产生太大异议）

两次密码连起来就是 “笼中连影像，梦里忆亲情”。

## 尾声

解决了所有问题后就可以得到两个文件夹（一样的），都是下面的网页，7 个字自然就是 “**祝笼中窥梦大卖**” 啦

![image-20211115205821803](https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211115205821803.png)

