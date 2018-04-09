(function () {

// var cssCode = `
// /* 今天我来用代码画一个小黄人

// * 首先给所有元素加上过渡效果 */
// * {
//   transition: .3s;
// }

// /* 给页面一个背景色 */
// body {
//   background-color: #343338;
// }

// /* 先画出小黄人的身体 */
// #minion {
//   margin: 10px auto;
//   width: 260px;
// }

// #body {
//   height: 300px;
//   background-color: #ffe340;
//   width: 260px;
//   position: relative;
// }

// /* 接着加上小黄人的吊带裤 */
// #pants {
//   height: 50px;
//   width: 260px;
//   background-color: #2f54a2;
// }

// /* 然后画小黄人的眼睛 */
// #strap {
//   top: 110px;
//   background-color: #1c1c1c;
//   width: 260px;
//   height: 50px;
//   position: absolute;
// }
// #glass {
//   margin: -30px auto 0;
//   width: 100px;
//   background-color: #fff;
//   border: 12px solid #707070;
//   height: 100px;
//   border-radius: 50%;
// }
// #eye {
//   width: 40px;
//   background-color: #000;
//   height: 40px;
//   border: 13px solid #5b350a;
//   border-radius: 50%;
//   margin: 17px;
// }
// #shine {
//   background-color: #fff;
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   margin: 1px 5px;
// }

// /* 最后加上头发 */
// #hair {
//   background-color: #1c1c1c;
//   width: 90px;
//   height: 10px;
//   margin: 0 auto;
// }


// /* 完工~~~~~~ */
// `;

/* 由于es6兼容性问题，上面的模板字符串用babel转成如下格式 */
var cssCode = "\n/* \u4ECA\u5929\u6211\u6765\u7528\u4EE3\u7801\u753B\u4E00\u4E2A\u5C0F\u9EC4\u4EBA\n\n* \u9996\u5148\u7ED9\u6240\u6709\u5143\u7D20\u52A0\u4E0A\u8FC7\u6E21\u6548\u679C */\n* {\n  transition: .3s;\n}\n\n/* \u7ED9\u9875\u9762\u4E00\u4E2A\u80CC\u666F\u8272 */\nbody {\n  background-color: #343338;\n}\n\n/* \u5148\u753B\u51FA\u5C0F\u9EC4\u4EBA\u7684\u8EAB\u4F53 */\n#minion {\n  margin: 10px auto;\n  width: 260px;\n}\n\n#body {\n  height: 300px;\n  background-color: #ffe340;\n  width: 260px;\n  position: relative;\n}\n\n/* \u63A5\u7740\u52A0\u4E0A\u5C0F\u9EC4\u4EBA\u7684\u540A\u5E26\u88E4 */\n#pants {\n  height: 50px;\n  width: 260px;\n  background-color: #2f54a2;\n}\n\n/* \u7136\u540E\u753B\u5C0F\u9EC4\u4EBA\u7684\u773C\u775B */\n#strap {\n  top: 110px;\n  background-color: #1c1c1c;\n  width: 260px;\n  height: 50px;\n  position: absolute;\n}\n#glass {\n  margin: -30px auto 0;\n  width: 100px;\n  background-color: #fff;\n  border: 12px solid #707070;\n  height: 100px;\n  border-radius: 50%;\n}\n#eye {\n  width: 40px;\n  background-color: #000;\n  height: 40px;\n  border: 13px solid #5b350a;\n  border-radius: 50%;\n  margin: 17px;\n}\n#shine {\n  background-color: #fff;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin: 1px 5px;\n}\n\n/* \u6700\u540E\u52A0\u4E0A\u5934\u53D1 */\n#hair {\n  background-color: #1c1c1c;\n  width: 90px;\n  height: 10px;\n  margin: 0 auto;\n}\n\n\n/* \u5B8C\u5DE5~~~~~~ */\n";

var myStyle = document.getElementById('mystyle');
var dompre = document.getElementsByTagName('pre')[0];
var domcode = document.getElementById('dom-code');
var speedValue = document.getElementById('speed-value');
var speedRange = document.getElementById('speed-range');
var speed = 110 - speedRange.value;

speedRange.addEventListener('mousemove', function () {
    speedValue.innerHTML = this.value;
});
speedRange.addEventListener('touchmove', function () {
    speedValue.innerHTML = this.value;
});

writeCode('',cssCode,speed);

function writeCode(preCode,code,speed,endFn) {
	var n = 0;
	setTimeout(function loop() {
        speed = 110 - speedRange.value;
	    n++;
	    domcode.innerHTML = preCode + code.slice(0, n);
	    domcode.innerHTML = Prism.highlight(domcode.innerHTML, Prism.languages.css, 'css');
	    window.scrollTo(0,document.body.scrollHeight);
	    myStyle.innerHTML = preCode + code.slice(0, n);
	    if (n >= code.length) {
	        endFn && endFn();
	    } else {
            setTimeout(loop,speed);
        }
	}, speed);
}

})();
