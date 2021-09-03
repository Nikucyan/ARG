# 密码类谜题

This repo is maintained by [Nikucyan](https://github.com/Nikucyan) & [bdcformpara](https://github.com/bdcformpara).
  
> This document will record some puzzles related to cryptography.
---
</br></br>


## 1. 移除
通过矩阵内元素的移除或者说是筛选，获得正确有序的密文。

*Example* </br>
*Retrieved from: [ARG - Six-step Mistery 六阶谜题 (2020.4.24)](https://github.com/Nikucyan/ARG/edit/main/Game_List/ARG-Six-step_Mistery.md)* </br>

剧情上，李郁和夏岚给了男主一张卡片希望男主帮她们破解谜题（无附加线索），男主选择向邬娅求助（为前作《[**七人杀阵**](https://store.steampowered.com/app/885140/__Seven_Sacrifices)》谜题，本作给出解答，不需要玩家自己求解）

![ssm_card](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/ssm_Card.png) 

- 整个图看起来杂乱无章，但最后一列的 “REMOVE” 恰好组成一个单词，意为 “移除”，如果将最后一列移除后矩阵变为 6×6 的大小
- 但换种思维，在矩阵中，按从上到下，从左到右的次序，将每第七个字母移除，第一次的移除结果与上面相同
- 第二次移除出去的字母为 “EXTRA”，第三次为 “LETT”，第四次为 “ERSS”，后续为 “EVE”、“NTI”、“MES”
- 连起来即为 “REMOVE EXTRA LETTERS SEVEN TIMES”（移除 7 次多余字母）
- 答案为移除这 7 次之后剩下的：“I AM WATCHING YOU”

![ssm_card2](https://cdn.jsdelivr.net/gh/Nikucyan/ARG/Images/ssm_Card2.png) 
