let myCodes = {
  cssCode: `/* Inspired by http://strml.net/
* 面试官你好，我是xxx
* 接下来我要用代码写一个会动的简历。
* 说做就做！
*/
/* 首先给代码区域加点样式 */
* {
    transition:.3s;
  }

/* 给代码加上高亮 */
.token.comment {
  color:slategray;
}
.token.selector {
  color:#a6e22e;
}
.token.property {
  color:#f92672;
}
.token.punctuation {
  color:#f8f8f2;
}
pre[class*="language-"] {
  padding:16px;
}

/* 加上背景色 */
body {
  background:#272822;
}
pre[class*="language-"] {
  width:100%;
}
code[class*="language-"],
pre[class*="language-"] {
   background:#272822;
   color:#f8f8f2;
   text-shadow:0 1px rgba(0, 0, 0, .3);
}
`,
paperCode: `
/* 接下来给左侧的简历区域添加点样式 */

/* 首先需要一张白纸 */
pre[class*="language-"] {
  width:40%;
  position:fixed;
  height:100%;
}
#paper {
  position:fixed;
  right:10%;
  height:96%;
  width:40%;
  background:white;
  top:2%;
}
#paper .content {
  width:100%;
  height:100%;
}

/* 然后就可以在白纸上写简历啦 */

`,
mdCode: `
# 我叫xxx
前端开发工程师

### 技能
- HTML
- CSS
- javascript
- VUE

### 项目
- 项目1
- 项目2
- 项目3
- 项目4

### 链接
- [GitHub](https://github.com/harry0071)
- [个人博客](https://harry0071.github.io)

>如果你喜欢这个效果，Fork [我的项目](https://github.com/harry0071)，打造你自己的简历!
`,
cssCode2: `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的
 * 我需要变成对 HR 更友好的格式
 * 简单，用开源工具将Markdown格式转成 HTML 就行了
 */

`,
cssCode3: `
/* 再给 HTML 加点样式 */
#paper {
  padding: 0 2em;
}
#paper h1,h2,h3 {
  border-bottom:1px solid #eaecef;;
}

#paper blockquote {
  margin: 0 auto;
  background:#ddd;
}
#paper blockquote p{
  padding:.6em;
}


/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`
}