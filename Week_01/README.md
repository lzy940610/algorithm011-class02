#### 第3课｜数组、链表、跳表

| 操作 Operation | 数组 Array     | 链表 Linked List | 跳表 Skip List                                                    |
| -------------- | -------------- | ---------------- | ----------------------------------------------------------------- |
| prepend        | O(1)           | O(1)             | O(1)                                                              |
| append         | O(1)           | O(1)             | O(1)                                                              |
| lookup         | O(1)           | O(n)             | O(logn)                                                           |
| insert         | O(n)           | O(1)             | O(logn)                                                           |
| delete         | O(n)           | O(1)             | O(logn)                                                           |
| 空间复杂度     | O(n)           | O(n)             | O(n)                                                              |
| 优劣点         | 适用于随机访问 | 适用于修改操作   | 适用于数据量大、性能要求高（对表二维平衡树 AVL tree 与 二分查找） |

#### 一些常用解题思维

* 一维数据升为二维（升纬思维）多一个维度可以携带更多的信息
* 空间换时间 （在空间不那么紧缺的情况下 可牺牲适当的内存空间换取更快的执行效率）
  * 跳表 -- 运用了 升维（多级索引） + 空间换时间



#### 第4课｜栈、队列、优先队列、双端队列

| 操作/类型 | 栈 Stack                 | 队列 Queue                       | 优先队列 Priority Queue                                  | 双端队列 Deque     |
| --------- | ------------------------ | -------------------------------- | -------------------------------------------------------- | ------------------ |
| 特性      | 先进后出 FILO (阿三飞饼) | 先进先出 FIFO （排队买茶颜悦色） | 出队需要根据优先性 （排队买单 茶颜悦色Super VIP可插队 ） | 可同时两端入队出队 |

#### 实践算法题小结

##### 两数之和

  暴力求解 双重循环 枚举所有组合可能(不重复)
  * 多重循环模版 （如下）
  ```javascript
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        // do something
      }
    }
  ```


##### 盛最多水

  * 双端夹击
  ```javascript
    for (let i = 0, j = nums.length; i < j; ){
      let min = nums[i] < nums[j] ? nums[i++] : nums[j--]
      // calc min area
    }
  ```


##### 三数之和

  * 快慢指针（三指针） + 双端夹击
  ```javascript
    let result = []
    for (let i = 0; i < nums.length; i++) {
      let left = i + 1,
        right = nums.length - 1
      if (nums[left] > 0) break
      if (i > 0 && nums[left] === nums[left + 1]) continue
      while (left < right) {
        let sum = nums[i] + nums[i] + nums[j]
        if (sum < 0) left++
        if (sum > 0) right--
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]])
          while (left < right && nums[left] === nums[left + 1]) left++
          while (left < right && nums[right] === nums[right - 1]) right--
          left++
          right--
        }
      }
    }
  return result
  ```
##### 有效的括号
  * 最近相关性 --> 栈 Stack 洋葱结构 由内向外 或 由外向内 一层一层
  
  ```javascript
    const dic = { '(': ')', '[': ']', '{': '}' }
    let stack = []
    for (let c of s) {
      if (c in dic) {
        stack.push(c)  
      }else if (dic[stack.pop()]  !== c ) {
        return false
      }
    }
    return !stack.length
  ```
##### 删除排序数组中的重复项
  
  * 快慢指针 & 有序
  
  ```javascript
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j] && i < j) {
      nums[++i] = nums[j]
    }
  }
  return i + 1
  ```

##### 爬楼梯

##### 柱状图中最大的矩形

##### 旋转数组

##### 移动窗口最大值

##### 移动零


