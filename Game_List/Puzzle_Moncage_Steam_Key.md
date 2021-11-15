# Puzzle - Moncage 笼中窥梦 藏 Key 活动 (Nov, 2021)

> 本文为游戏《笼中窥梦 - Moncage》（[Steam](https://store.steampowered.com/app/1195290/_Moncage/)）制作组在发售前陆续放出的藏 Key 解谜活动的记录，形式是每次都是固定发出一张图，并将 Steam Key 的前十位（XXXXX-XXXXX）藏在图里，第一个解出谜题者就能提前白嫖到 Key
>
> ![image-20211114220742487](https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211114220742487.png)



## 微博 1

> [Weibo（@笼中窥梦-Moncage）](https://weibo.com/u/7331210756)：[原 po](https://weibo.com/7331210756/KEFW8b0k1) 

![image-20211114220805905](https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211114220805905.png)

官方明示了看[大图](https://static01.imgkr.com/temp/89f8f2e6091d4fa8bab14801c2a8b7d1.jpg)，那就是要考眼力了

眼尖的网友很快就找出来了（说实话单纯这么藏难度相对没那么高）：



## 小红书部分

> [小红书 - 心动]()

小红书部分的谜题是个人认为最有意思的谜题

<img src="https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/d4511379-12fd-e0f3-1368-1ff95c841c8a.jpg" alt="d4511379-12fd-e0f3-1368-1ff95c841c8a" style="zoom:67%;" />

看起来似乎有点乱，气球上的信息很多很明显需要一次过滤。

根据群里提供的解法，应该是在原图层上加一层**纯黑色图层**并将**混合模式改为 “Saturation（饱和度）”**，结果为：（后期提高了对比度使结果更明显）

![image-20211114224906629](https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211114224906629.png)

可以看到很多气球上的字符被神奇地去掉了，留下来的自然就是答案 `MNQ86-5ERY0`

**解释**：

- **混合模式 - 饱和度**：根据 Adobe 官方解释，Ps 等图片处理工具中，“混合模式 - 饱和度” 的解释即为 “用基色的明亮度和色相以及混合色的饱和度创建结果色。在无 (0) 饱和度（灰度）区域上用此模式绘画不会产生任何变化。”[^1] 说人话就是：把上面一层（即应用这一混合模式的一层）仅留下饱和度信息，并映射到下层，让下层饱和度与上层一致，适合用于**局部饱和度调整**且不影响**感知亮度**。

  在这个案例中，纯黑色饱和度为 0（用黑白灰也是一样的结果），下层仅留下**色相（Hue）**和**明度/亮度（Lightness/Value/Brightness）**信息，如果文字的色相和明度的结果和气球**一致**就会被**抹除**，如果有**较大对比**则会**保留**。

- **混合模式应用的色彩空间**：要理解制作原理还要理解相应色彩模型。

  在通常的色彩选择中，HSV 的色彩空间可以理解为一个圆锥型，选择需要的色相、饱和度、亮度就可以得到需要的颜色，当饱和度为 0 时画面呈现黑白灰。

  <img src="https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/640px-HSV_color_solid_cone_chroma_gray.png" style="zoom:50%;" /><img src="https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/Triangulo_HSV.png" style="zoom:67%;" /> 
  
  > Triangulo_HSV, Samus_, [CC BY-SA 3.0 ](http://creativecommons.org/licenses/by-sa/3.0/), via Wikimedia Commons;
  >
  > Hcl-hcv_models.svg: Jacob RusHSV_color_solid_cone.png: SharkDderivative work: SharkD Talk, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via Wikimedia Commons 
  
  而 Ps 的混合模式中，色相、亮度和饱和度采用 **HSY（电视）色彩模型**，在这里 Y 表示光度 Luma，与常见的颜色调整 HSL / 颜色选择 HSV (HSB) 空间并不相同，需要注意。
  
  在 HSY 色彩中，亮度和饱和度更接近于人眼的**视觉感受**而非原始色彩数据。如在 HSV 模型中，饱和度、光度均为 100% 的蓝色给人的视觉感受明显暗于红色和绿色，这样饱和度拉满的色彩在 HSY 色彩模型中经过饱和度叠加后就会出现蓝色部分显著暗于其他颜色的情况（如果是直接按照 HSV 模型进行饱和度叠加则全图应该为统一亮度）[^2] 
  
  具体到 Adobe 的算法模型中，光度则可以表示为下式[^3] 
  $$
  \mathrm{Lum}(C) =  0.3 \times C_{\mathrm{red}} + 0.59\times C_{\mathrm{blue}} + 0.21\times C_{\mathrm{green}}
  $$
  这个比例可以理解为根据人眼**视杆细胞**对不同颜色的明暗感知情况设定。
  
  所以在此题中如果单纯使用 “图像调整 - 去色（desaturate）” 或使用其他去饱和度的方案都是不能得到需要的答案的。



## Reddit 部分

> [Reddit (u/MoncageTheGame)](https://www.reddit.com/r/indiegames/comments/qhozqm/i_accidentally_lost_some_steam_keys_some_on/)

本人（捡漏）拿到的 Key 是在 Reddit 的唯一一个 Key（也是整个宣发过程中最后一个）

一开始 Reddit 有 Key 的消息被放在了玩家群里，但是开发表示在 Reddit 茫茫 “帖海” 中找到他们沉掉的帖子也是解谜的一环（草）

解谜咱不行但找东西还是可以的，虽然直接在 Reddit 上搜索 “Moncage” 只能找到一些报道文章还有开发团队的モノクラ（[u/monokura](https://www.reddit.com/user/monokura/)）的宣传帖，点进主页也不见谜题；使用 “Hidden steam key”（也就是 Twitter 宣传时用到的关键词之一）也找不到任何信息。这时候本着不试白不试的精神用了外部搜索引擎如 Google 搜索 “Moncage **site:** reddit.com”，没想到意外出现了另一个被埋了的官号 “[u/MoncageTheGame](https://www.reddit.com/user/MoncageTheGame/)” 发布的[帖子](https://www.reddit.com/r/indiegames/comments/qhozqm/i_accidentally_lost_some_steam_keys_some_on/)：（[高清版本的图](https://static01.imgkr.com/temp/adf4635610354422aaae5c92242bd0fb.jpg) / [备份](https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/adf4635610354422aaae5c92242bd0fb.jpg)）

![image-20211114214118571](https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211114214118571.png)

官方专门提了一嘴：图有点糊，记得看原图（明示直接藏考眼力了）

拿到图片事情就变得简单了，这个谜题相比起前面需要用额外技术手段解决容易多了，直接在微波炉（我以为是电视被嘲了）的按钮上就可以看到一些很淡的数字，稍微调整一下曲线处理一下就可以看得很清楚了: 

<img src="https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211114214522325.png" alt="image-20211114214522325" style="zoom:50%;" />

`4 22 4 51 22 | 7 31 23 83 92` 

长度刚好也和 Key 前十位的位数对应上了，但具体的解决方式我们一开始想的是个位数是数字，十位数是 url code（并不是）；后来又想到了所有两位数字第二位都被限制在 1 到 3 之间，就尝试在**九宫格输入法**对应起来使用（我有点怀疑这个 9 图也有一点暗示的成分），个位数就直接使用，那么 `22 -> B`、`51 -> J` 等等，答案即是 `4B4JB-7DCVX` 

![image-20211114215236881](https://cdn.jsdelivr.net/gh/Nikucyan/MD_IMG//img/image-20211114215236881.png)

至此，《笼中窥梦》发售预热的藏 Key 活动全都得到了破解



## Reference

[^1]: [Adobe Photoshop 中的混合模式](https://helpx.adobe.com/cn/photoshop/using/blending-modes.html)
[^2]: [神的孩子 01 号](https://www.zhihu.com/people/shen-de-hai-zi-8-7)，[Ps 混合模式计算原理，宇宙最穷的进阶笔记](https://zhuanlan.zhihu.com/p/112234511) 

[^3]: Adobe, [PDF Blend Modes: Addendum](https://www.adobe.com/content/dam/acom/en/devnet/pdf/pdfs/pdf_reference_archives/blend_modes.pdf)

