const fs = require('fs');
let isWarn = false;
// 需要生成资源调用的文件夹
let folderAry = [
                    {path: './../src/assets/texture',        reg: /\.(png|jpg|jpeg|json)$/i} 
                ];
build();
// 对每一个文件夹编译index.js
function build() {
	folderAry.forEach((data)=> {
        let path = data.path;
        if (!fs.existsSync(path)) {
            return;
        }
		let list = fs.readdirSync(path);
        list.forEach((f)=> {
            let stat = fs.statSync(path + '/' + f);
            if (stat.isDirectory()) {
                generateResConfig(path + '/' + f, data);
            }
        });
	});

    if (isWarn) {
        throw '不符合规范，请先调整!';
    }

}


function generateResConfig(path, config) {
    let output = `
let data = {}; 
    `;
    let data = '{';
    let flag = false;
    let images = fs.readdirSync(path);
    try {
        let reg = config.reg;
        images.forEach((f)=> {
            if (reg.test(f)) {
                let fn = f.replace(reg, '');
                output += `\nimport ${fn} from "./${f}";\n`;
                let item = f.replace(reg, '');
                output += `data.${item} = ${item};\n`;
                data += `${item}: ${item}`;

                let maxSize = 0;
                // 图片文件不超过512kb
                if (/\.(png|jpg|jpeg|json)$/i.test(f)) {
                    maxSize = 0.5 * 1024 * 1024;
                } 

                if (maxSize) {
                    let fStatus = fs.statSync(path + '/' + f);
                    if (fStatus.size > maxSize) {
                        let size = (fStatus.size / 1024 / 1024).toFixed(2);
                        console.warn('warn: ', path + '/' + f, ' 文件过大! 当前' + size + 'M, 超出' + maxSize / 1024 / 1024 + 'M');
                        isWarn = true;
                    }
                }

            }
        });
    } catch (e) {
        console.log(e);
        console.log(`没有资源${item.path}`);
    }
    output += `\nexport default data;`;
    fs.writeFileSync(path + '/index.js', output);
}
