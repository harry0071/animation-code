(function () {

// var cssCode = `.yinyang {
//     width: 200px;
//     height: 200px;
//     border-radius: 50%;
//     background: linear-gradient(to bottom, white 0%, white 50%, black 50%, black 100%);
//     position: relative;
//     box-shadow: 0 0 20px #ccc;
//     animation: spin 2s linear infinite;
//     margin: 20px auto;
// }
// .yinyang:before {
//     content: '';
//     position: absolute;
//     background: black;
//     border: 40px solid white;
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     top: 25%;
// }
// .yinyang:after {
//     content: '';
//     position: absolute;
//     top: 25%;
//     left: 100px;
//     background: white;
//     border: 40px solid black;
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
// }
// @keyframes spin{
//     0%{transform: rotate(0deg);}
//     100%{transform: rotate(-360deg);}
// }
// `;

var cssCode = ".yinyang {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    background: linear-gradient(to bottom, white 0%, white 50%, black 50%, black 100%);\n    position: relative;\n    box-shadow: 0 0 20px #ccc;\n    animation: spin 2s linear infinite;\n    margin: 20px auto;\n}\n.yinyang:before {\n    content: '';\n    position: absolute;\n    background: black;\n    border: 40px solid white;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    top: 25%;\n}\n.yinyang:after {\n    content: '';\n    position: absolute;\n    top: 25%;\n    left: 100px;\n    background: white;\n    border: 40px solid black;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n}\n@keyframes spin{\n    0%{transform: rotate(0deg);}\n    100%{transform: rotate(-360deg);}\n}\n";

var myStyle = document.getElementById('mystyle');
var dompre = document.getElementsByTagName('pre')[0];
var domcode = document.getElementById('dom-code');

writeCode('',cssCode,50);

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