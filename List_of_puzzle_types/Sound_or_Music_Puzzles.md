# 声音或音乐类谜题

This repo is maintained by [Nikucyan](https://github.com/Nikucyan) & [bdcformpara](https://github.com/bdcformpara).
  
> This document will record some puzzles related to sound or music
> 说到底，一切都是隐写术 (Steganography)
---
</br></br>


## 1. 声音倒放
制作时需要将音频倒放；而解谜只需要将音频倒放回来恢复为正序播放音频即可。该类谜题较为简单常见。

*Example*</br>
*Retrieved from: Paperclip  回形针 Vol. 100 (2019.11)*</br>

**倒放的录音**：把开头倒放就能听到（录音：十二位数是球赛开始的时间）
</br></br>


## 2. 频谱图案
制作时需要用音频编辑软件在音频频谱上擦出图案；而解谜需要用可以查看频谱的软件查看音频。听该类谜题音频时，可以听到不自然的频率缺失。

*Example*</br>
*Retrieved from: Paperclip  回形针 Vol. 100 (2019.11)*</br>

**声音频谱图**：找到这支视频的 *声音频谱图*，会看到 <u>「REMARKS」</u> 和一个 <u>指向右边的箭头</u>
![paperclip_Remarks](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/paperclip_Remarks.png) 
提示：不自然的声音和结尾闪烁的频谱图
</br></br>

*Example*</br>
*Retrieved from: Game Theory: Doki Doki Decoded! (Doki Doki Literature Club)*</br>

将sayori.chr后缀更改为.ogg，可以发现它是一个无序的白噪音音频。使用频谱软件查看，可以发现一个网页的二维码。
![dlc_ogg](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/dlc_ogg1.png) 
![dlc_ogg](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/dlc_ogg2.png) 
![dlc_ogg](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/dlc_ogg3.png) 
![dlc_ogg](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/dlc_ogg4.png) 
</br></br>


## 3. 双音多频信号
*Retrieved from: [Wikipedia - Dual-tone multi-frequency signaling](https://en.wikipedia.org/wiki/Dual-tone_multi-frequency_signaling)*</br>
双音多频的拨号键盘是4×4的矩阵，每一行代表一个高频，每一列代表一个低频。每按一个键就发送一个高频和低频的正弦信号组合，比如'1'相当于697和1209赫兹（Hz）。交换机可以解码这些频率组合并确定所对应的按键。注意：ABCD四个字母并不使用于拨号键盘，但常做为机器对机器的控制信号，例如DTMF格式的来话显示。</br>

　|1209 Hz|1336 Hz|1477 Hz|1633 Hz
-|-----|------|------|------
697 Hz|1|2|3|A
770 Hz|4|5|6|B
852 Hz|7|8|9|C
941 Hz|\*|0|#|D

*Example*</br>
*Retrieved from: 好和弦，把秘密訊息偷偷藏入音樂中！*</br>

使用频谱分析仪对照DTMF表可以获得拨号数字
![NiceChord_DTMF](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/NiceChord_DTMF1.png)
![NiceChord_DTMF](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/NiceChord_DTMF2.png)
</br></br>


## 4. 赋格的艺术
*Retrieved from: [豆瓣音乐 - 赋格的艺术](https://music.douban.com/review/5335783/)*</br>
*Retrieved from: [Wikipedia - 音名](https://zh.wikipedia.org/wiki/%E9%9F%B3%E5%90%8D)*</br>
巴赫用`降si la do 还原si`表示自己的名字 BACH </br>
其实就是使用**音名**来表达信息，中国现代惯用`C D E F G A B`来表示`do re mi fa so la si`，但是德国会用`H`来表示`si`。注意，德国还有三个特例：`降E`用`es`、`降A`用`as`、降`H`用`B`。
</br></br>


## 5. ASCII与PCM编码
*Retrieved from: [Github - kylophone/ascii-audio](https://github.com/kylophone/ascii-audio)*</br>
Generates PCM audio from an ASCII string. Text is visible on the spectrogram image. </br>
![ascii_pcm](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/ascii_pcm.png)
</br></br>


