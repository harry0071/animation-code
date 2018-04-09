{
	let domCode = document.getElementById('dom-code');
	let dompre = document.getElementsByTagName('pre')[0];
	let cssCode = myCodes.cssCode;
	let cssCode2 = myCodes.cssCode2;
	let cssCode3 = myCodes.cssCode3;
	let paperCode = myCodes.paperCode;
	let mdCode = myCodes.mdCode;
	writeCode('',cssCode,()=>{
		creatPaper(()=>{
			writeCode(cssCode,paperCode,()=>{
				writeMarkdown('',mdCode,()=>{
					writeCode((cssCode+paperCode),cssCode2,()=>{
						mdCode2Markdown(mdCode,()=>{
							writeCode((cssCode+paperCode+cssCode2),cssCode3);
						});
					});
				});
			});
		});
	});

///////////////////////////////
   
/* 把代码字符串插入code标签和style标签中 */
	function writeCode(preCode,code,endFn) {
		let n = 0;
	 	let timer = setInterval(() => {
	        n++;
	        domCode.innerHTML = preCode + code.slice(0, n);
	        domCode.innerHTML = Prism.highlight(domCode.innerHTML, Prism.languages.css, 'css');
	        dompre.scrollTop = dompre.scrollHeight;//每次都将滚动条往下拉1w像素
	        myStyle.innerHTML = preCode + code.slice(0, n);
	        if (n >= code.length) {
	            clearInterval(timer);
	            endFn && endFn();
	        }
	    }, 50);

	}

    function creatPaper(endFn) {
    	let paper = document.createElement('div');
    	paper.id = 'paper';
    	let content = document.createElement('pre');
    	content.className = 'content';
    	paper.appendChild(content);
    	document.body.appendChild(paper);
    	endFn && endFn();
    }

    function writeMarkdown(preCode,code,endFn) {
    	let domContent = document.querySelector('#paper>.content');
		let n = 0;
	 	let timer = setInterval(() => {
	        n++;
	        domContent.innerHTML = preCode + code.slice(0, n);
	        //domContent.innerHTML = Prism.highlight(domContent.innerHTML, Prism.languages.css, 'css');
	        dompre.scrollTop = dompre.scrollHeight;//每次都将滚动条往下拉1w像素
	        if (n >= code.length) {
	            clearInterval(timer);
	            endFn && endFn();
	        }
	    }, 50);
    }

    function mdCode2Markdown(mdcode,endFn) {
    	let paper = document.getElementById('paper');
    	paper.innerHTML = marked(mdcode);
    	endFn && endFn();
    }
}