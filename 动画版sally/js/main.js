(function () {

// var cssCode = `
// .sally{
//     background-color: rgb(255,201,14);
//     width: 100%;
//     height: 280px;
// }
// .sally .head{
//     width: 56px;
//     height: 76px;
//     position: relative;
//     left: 50%;
//     margin-left: -28px;
//     top: 50%;
// }
// .sally .head .eyes{
//     width: 20px;
//     height: 20px;
//     background-color: #000;
//     border-radius: 50%;
//     display: inline-block;
// }
// .sally .mouth{
//     position: relative;
// }
// .sally .mouth .top,.sally .mouth .bottom{
//     width: 50px;
//     height: 25px;
//     background-color: #f9540a;
// }
// .sally .mouth .top{
//     border-radius: 75% 78% 25% 41%;
//     border-bottom: 2px solid #df3200;
// }
// .sally .mouth .bottom{
//     border-radius: 31% 0% 39% 38%;
// }
// .sally .mouth .right{
//     width: 10px;
//     height: 32px;
//     left: 44px;
//     background-color: #f9540a;
//     border-radius: 10% 90% 90% 10%;
//     position: absolute;
//     top: 10px;
// }
// `;

var cssCode = "\n.sally{\n    background-color: rgb(255,201,14);\n    width: 100%;\n    height: 280px;\n}\n.sally .head{\n    width: 56px;\n    height: 76px;\n    position: relative;\n    left: 50%;\n    margin-left: -28px;\n    top: 50%;\n}\n.sally .head .eyes{\n    width: 20px;\n    height: 20px;\n    background-color: #000;\n    border-radius: 50%;\n    display: inline-block;\n}\n.sally .mouth{\n    position: relative;\n}\n.sally .mouth .top,.sally .mouth .bottom{\n    width: 50px;\n    height: 25px;\n    background-color: #f9540a;\n}\n.sally .mouth .top{\n    border-radius: 75% 78% 25% 41%;\n    border-bottom: 2px solid #df3200;\n}\n.sally .mouth .bottom{\n    border-radius: 31% 0% 39% 38%;\n}\n.sally .mouth .right{\n    width: 10px;\n    height: 32px;\n    left: 44px;\n    background-color: #f9540a;\n    border-radius: 10% 90% 90% 10%;\n    position: absolute;\n    top: 10px;\n}\n";

var myStyle = document.getElementById('mystyle');
var dompre = document.getElementsByTagName('pre')[0];
var domcode = document.getElementById('dom-code');

writeCode('',cssCode,40);

function writeCode(preCode,code,ms,endFn) {
	var n = 0;
	var timer = setInterval(function () {
	    n++;
	    domcode.innerHTML = preCode + code.slice(0, n);
	    domcode.innerHTML = Prism.highlight(domcode.innerHTML, Prism.languages.css, 'css');
	    window.scrollTo(0,document.body.scrollHeight);
	    myStyle.innerHTML = preCode + code.slice(0, n);
	    if (n >= code.length) {
	        clearInterval(timer);
	        endFn && endFn();
	    }
	}, ms);
}

})();