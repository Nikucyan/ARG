# ARG - Six-step Mistery  六阶谜题 (2020.4.24)



严格意义上，此部分谜题仅为由 **章鱼罐头制作组**（[官网](http://cannedoctopus.club/)，[微博：@罐头里有很多章鱼](https://weibo.com/u/3150627172?sudaref=cannedoctopus.club)）制作的国产悬疑解谜向 AVG《**[六阶谜题](https://store.steampowered.com/app/1164000/_sixstep_mystery/)**》的 **甲结局后日谈** （章节 5-13）的一段谜题，但由于形式接近于 ARG 谜题形式所以收录于这个列表中。

![ssm](https://cdn.cloudflare.steamstatic.com/steam/apps/1164000/library_600x900.jpg?t=1574995916)

**本文不会过多涉及剧情上的剧透，但涉及玩法上的剧透，建议先玩过游戏本体再看本文**

![ssm_hero](https://cdn.cloudflare.steamstatic.com/steam/apps/1164000/page_bg_raw.jpg?t=1574997013)

</br>



## 0. 卡片

剧情上，李郁和夏岚给了男主一张卡片希望男主帮她们破解谜题（无附加线索），男主选择向邬娅求助（为前作《[**七人杀阵**](https://store.steampowered.com/app/885140/__Seven_Sacrifices)》谜题，本作给出解答，不需要玩家自己求解）

![ssm_card](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/ssm_Card.png) 

- 整个图看起来杂乱无章，但最后一列的 “REMOVE” 恰好组成一个单词，意为 “移除”，如果将最后一列移除后矩阵变为 6×6 的大小
- 但换种思维，在矩阵中，按从上到下，从左到右的次序，将每第七个字母移除，第一次的移除结果与上面相同
- 第二次移除出去的字母为 “EXTRA”，第三次为 “LETT”，第四次为 “ERSS”，后续为 “EVE”、“NTI”、“MES”
- 连起来即为 “REMOVE EXTRA LETTERS SEVEN TIMES”（移除 7 次多余字母）
- 答案为移除这 7 次之后剩下的：“I AM WATCHING YOU”

![ssm_card2](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/ssm_Card2.png) 



</br>

## 1. 二维码

第二回合，李郁又给了男主一叠卡片：

![ssm_qr0](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/ssm_qr0.png)

上面 6 张图片使用简单的 <u>叠加（如正片叠底等处理方法）</u> 后可以得到

![ssm_qr](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/ssm_QRCODE.png)

</br>

## 2. 倒置

扫描二维码进入游戏官网设置的 [特殊页面](http://cannedoctopus.club/website/mPxtQY_06.html)（网址 `http://cannedoctopus.club/website/mPxtQY_06.html`），页面中出现 4 个空格需要玩家填空

- 当玩家输入 “1234”，会自动弹出窗口显示 “4321”；当玩家输入 “abcd”，会自动弹出窗口显示 “dcba”

  ![ssm_hint](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/ssm_hint.png)

- 由于网址后缀带有 `mPxtQY_06`，可以尝试反过来在网址导航栏里将后缀改为 `60_YQtxPm`，即 `http://cannedoctopus.club/website/60_YQtxPm.html`，进入下一谜题

</br>

## 3. 数织

进入[新的网页](http://cannedoctopus.club/website/60_YQtxPm.html)之后出现了下面的图案，可以看出是类似[**数织**](https://zh.wikipedia.org/wiki/%E6%95%B8%E7%B9%94)的题目（有指定顺序：red - orange - yellow - green）

> 数织：お絵かきロジック，指逻辑绘图，在一个网格中，每一行和列都有一组数，玩家需根据它们来填满或留空格子，最后就可以由此得出一幅图画。在如果数字不止一个（以空格隔开），则该行 / 列上的填充线段不止一条，而且一定有间隔。
>
> 在此处只是借用了类似的方式，并不完全是最传统的数织，数字只代表了会有多少个格子需要被涂色，<u>没有包含涂色格子是否连续的信息</u>。

![ssm_pc](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/ssm_picross.png)

依次用红、橙、黄、绿上色，得到的 “四”、“七”、“五”、“三”（4753）即为该阶段的密码（即将导航栏的网址改为：`http://cannedoctopus.club/website/4753.html`）

![ssm_pc2](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/ssm_picross2.png)

</br>

## 4. 求和

![ssm_sum](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/ssm_sum.png)

- 将他们 6 个人按某个次序排列，问题是 “总和”，首先需要将他们几个人换算成数字（根据游戏内剧情可知此题实际为他们 6 人的暗号，分别为：刘（男主） 13；夏岚 29；李郁 41；邬娅 11；孟筱雨 23；上官千儿 7）
- 将原点左边的人视为负数，求和得 sum = - 41 - 11 - 7 + 13 + 23 + 29 = 6（填入空白内即可）

</br>

## 5. 二进制

进入此关后出现下面图片

![ssm_bin](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/ssm_bin.jpg)

- 根据二进制：**白 0 黑 1** 的规则 直接把这个画面转化为**二进制**，可得 `01011110 10101110 01010001 00000001`
- 全部合并起来即可，<u>转化为十进制</u>就是 1588482305（正确）或 2706484990（错误，在图片转二进制的时候 1 和 0 搞反了）

网址为：`http://cannedoctopus.club/website/1588482305.html`，这样就得到了最后的消息

> 恭喜你抵达了终点，我认可你的实力</br>
> 我将在1588482305等候你的到来...
> ——魔女管理委员会 T

根据游戏后续推理，<u>十位数字</u> 可以转化为 <u>时间戳</u>：2020 年 05 月 03 日  13:05:05（标准时间格式）
