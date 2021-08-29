# ARG - PaperClip Vol. 100 (2019.11)



*注意：关联制作组存在争议。仅供学习之用*



> - [Vol.100 来自回形针的挑战信](https://www.youtube.com/watch?v=flEeT6jW1H4)
> - [Sp. 003 解谜 PaperClip100：球赛、机票、 脚本和 DDos 攻击](https://www.youtube.com/watch?v=8t5Q9gdbwNA) 



## 第一阶段

1. **倒放的录音**：把开头倒放就能听到（录音：十二位数是球赛开始的时间）

2. **声音频谱图**：找到这支视频的 <u>声音频谱图</u>，会看到 <u>「REMARKS」</u> 和一个 <u>指向右边的箭头</u>

   提示：不自然的声音和结尾闪烁的频谱图

   ![paperclip_Remarks](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/paperclip_Remarks.png) 

3. **隐藏在电脑桌面上的路线图**：做自动 <u>色调处理</u> 后，可以看清全貌，关键在于各个元素之间的连接关系

   - 右上角的 ipaperclip.net 与左上角的 Vol.G.56-1-1 相连，Vol.G.56-1-1 再链接左下角的两个 Vol，最后链接左上角的 12 个 X
   - 右下角 1111100s：把 2 进制转换成 10 进制就是 124s，也就是 2 分 04 秒。而Vol 当然是我们的节目的编号前缀

   ![paperclip_bg](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/paperclip_bg.png) 

通过 ipaperclip.net 找到左上角的节目，根据左上角的节目找到 <u>左下角两个红圈</u> 里的节目编号，再通过这两期节目的 <u>2 分 04 秒</u> 推理出左上角的 12 位数，结合倒放声音的线索，这 12 位数也就是比赛开始的时间（ipaperclip.net 已经停止运营）

ipaperclip.net（回形针手册）的首页，可以很轻松的找到 <u>G 类</u>：交通运输/仓储/邮政业，展开这个类目下的 <u>子条目就能找到 56-1-1：航空旅客运输</u>。在这个条目的底部有一个相关视频，这就是左上角这串字符对应的视频——第 21 期：<u>如何科学的给机票定价</u>。

在机票这期，在登机牌上找到 REMARKS——一串备注编号（REMARK 对应了上文的线索），即使没发现，如果注意到 <u>原视频的系统时间 1 分 50 秒</u> 的话也可以找到这张登机牌。红圈、数字、箭头，把备注编码移动到右边的红圈里，<u>对齐</u>，答案是 69 和 52。

![paperclip_Remarks2](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/paperclip_Remarks2.png) 

在回形针 <u>第 69 期和 52 期的 2 分 04 秒</u> 可以找到一张 <u>验光单</u> 和 <u>球赛结束的画面</u>，<u>时间相减</u>，就是球赛开始的时间：<u>2019 年 5 月 20 日 9 点 50 分</u>。（即使不把 7 对齐，两个红圈也只能圈出 8 种组合，但只有 69 和 52 这一组才能找到球赛。）

![paperclip_Remarks2](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/paperclip_time.png)  

把 <u>时间代入右上角的网址</u> (201905200950.ipaperclip.net)，输入机票上的常旅客号码，拔插头插上，开启第二阶段的倒计时。

（暴力破解方式：ping 以时间为前缀的网址）

## 第二阶段倒计时

倒计时可以由访问用户插上或拔下。

由于受到大规模 DDoS 攻击，停止计时重新上线后制作组为 15 分 13 秒设计了一个新谜题，谜底是第二阶段的新网站。

![paperclip_countdown4](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/paperclip_countdown4.png) 

![paperclip_countdown3](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/paperclip_countdown3.png) 

时间线索会提示找到 <u>1 分 33 秒和 3 分 11 秒</u>，对比第 15 期和 13 期这两个时间点的画面，可以很容易找到这位大叔的脱发面积，也就是右下角新网站的地址：100-140cm.ipaperclip.net。

## 第二阶段

第二阶段为一个 <u>实时反馈</u>，并且需要参与者 <u>相互协作完成通关</u> 的游戏。红色色块是障碍物，碰到就失败，蓝色色块是敌人，可以用攻击消灭。通关条件是碰到这两个黄色色块。而下面的 20 个跳和 20 个攻击按钮则对应回形针在这个位置做出的动作，每个按键点击的人数越多，跳的越高，攻击力越大。前四格的的设计目标主要是教学，玩家需要在前三格不跳，用攻击消灭第一个敌人，然后用一个足够高的跳跃数值跳过后两个障碍物。

解决方案：脚本 + bug

Bug：游戏帧率为 45 帧。理论上来说，只要每秒瞬移的距离够大，可以直接穿过障碍物而不判定为死亡。

![paperclip_second](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/paperclip_second.png) 

## 第三阶段

**SHA-1：哈希加密算法**

任何数值经过哈希加密都可以得到一串 40 位 16 进制的字符串。把左边的信息用 SHA-1 加密，加上后缀 ipaperclip.net，就是最终阶段的页面了。

 ![paperclip_third](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/paperclip_third.png)

下列任何一种组合都可以成立

 ![paperclip_sha1](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/paperclip_sha1.png) 

## 结尾

根据这个页面线索推理出 ABC 三个路线的对应条目，完成编辑，就能获得对应的奖品，编辑记录的时间会作为最终排名的依据。

- **页面背景里的图像**：奖品的剪影图像

-  ABC 路线奖品图片里**左上角的数字**：分别是 0300、0235、0350（对应时间）

- 原视频里三个奖品的**黑白闪烁**：<u>二进制换算</u>

  奖品 A 是黑白黑白黑白，也就是 101010，换上成十进制为 42，即第 42 期节目。同理，奖品 B 是 10101 ，第 21 期，奖品 C 是 101，第 5 期。所以路线 A 对应的条目是回形针第 42 期的 3 分 0 秒——宠物饲养，所以路线 B 对应的条目是回形针第 21 期的 2 分 35 秒——航空旅客运输，而路线 C 对应的条目是回形针第 5 期的 3 分 50 秒——影视特效创作。

## 设计基本原则

1. 为了让尽可能多的观众参与，所有谜题 <u>不需用到复杂的专业知识</u> 也能解开。
2. <u>所有刻意给出的线索都有意义，都是推理链条里的必须要素</u>。而其他辅助线索即使找不到也可以完成解谜。
3. <u>尽可能让逻辑链相互衔接</u>。比如通过对常旅客号码、球赛画面、二进制、节目编号等 <u>线索的重复使用</u>，<u>即使单个环节被暴力破解，也无法完成顺利通关</u>。





