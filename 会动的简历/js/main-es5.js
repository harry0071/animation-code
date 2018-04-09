(function () {

	///////////////////////////////

	/* 把代码字符串插入code标签和style标签中 */
	var writeCode = function writeCode(preCode, code, endFn) {
		var n = 0;
		var timer = setInterval(function () {
			n++;
			domCode.innerHTML = preCode + code.slice(0, n);
			domCode.innerHTML = Prism.highlight(domCode.innerHTML, Prism.languages.css, 'css');
			dompre.scrollTop = dompre.scrollHeight; //每次都将滚动条往下拉1w像素
			myStyle.innerHTML = preCode + code.slice(0, n);
			if (n >= code.length) {
				clearInterval(timer);
				endFn && endFn();
			}
		}, 50);
	};

	var creatPaper = function creatPaper(endFn) {
		var paper = document.createElement('div');
		paper.id = 'paper';
		var content = document.createElement('pre');
		content.className = 'content';
		paper.appendChild(content);
		document.body.appendChild(paper);
		endFn && endFn();
	};

	var writeMarkdown = function writeMarkdown(preCode, code, endFn) {
		var domContent = document.querySelector('#paper>.content');
		var n = 0;
		var timer = setInterval(function () {
			n++;
			domContent.innerHTML = preCode + code.slice(0, n);
			//domContent.innerHTML = Prism.highlight(domContent.innerHTML, Prism.languages.css, 'css');
			dompre.scrollTop = dompre.scrollHeight; //每次都将滚动条往下拉1w像素
			if (n >= code.length) {
				clearInterval(timer);
				endFn && endFn();
			}
		}, 50);
	};

	var mdCode2Markdown = function mdCode2Markdown(mdcode, endFn) {
		var paper = document.getElementById('paper');
		paper.innerHTML = marked(mdcode);
		endFn && endFn();
	};

	var domCode = document.getElementById('dom-code');
	var dompre = document.getElementsByTagName('pre')[0];
	var cssCode = myCodes.cssCode;
	var cssCode2 = myCodes.cssCode2;
	var cssCode3 = myCodes.cssCode3;
	var paperCode = myCodes.paperCode;
	var mdCode = myCodes.mdCode;
	writeCode('', cssCode, function () {
		creatPaper(function () {
			writeCode(cssCode, paperCode, function () {
				writeMarkdown('', mdCode, function () {
					writeCode(cssCode + paperCode, cssCode2, function () {
						mdCode2Markdown(mdCode, function () {
							writeCode(cssCode + paperCode + cssCode2, cssCode3);
						});
					});
				});
			});
		});
	});

	
})();