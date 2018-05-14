const XLSX = require('xlsx');
const fs = require('fs');
const PATH = require('path');
const beautify = require('json-beautify');

function xlsGenerated() {

    var str = 'SolarSystemData.xlsx';
    var filePath = './doc/' + str;
    var outFilePath = './src/frameworks/Config/planet.json';

    if (PATH.extname(str) === '.xlsx' || PATH.extname(str) === '.xls') {
        var workbook = XLSX.readFile(filePath);
        var sheetNames = workbook.SheetNames;
        var worksheet = workbook.Sheets[sheetNames[0]];
        // json是一个对象数组
        var json = XLSX.utils.sheet_to_json(worksheet);
        assetgenerate(json);
        
        console.log(json);
        var result = beautify(json, null, 2, 100);
        fs.writeFileSync(outFilePath, result, 'utf8', (err) => {
            if (err) throw err;
            console.log('The data was appended to file!');
        });
    }
}

function assetgenerate(objs) {
    let pre = 'assets/texture/';
    for(let i = 0; i < objs.length; ++i) {
        let obj = objs[i];
        if (obj.map === 'TRUE') {
            obj.map = `${pre}${obj.name}map.jpg`;
        } else {
            delete obj.map;
        }
        if (obj.bump === 'TRUE') {
            obj.bump = `${pre}${obj.name}bump.jpg`;
        } else {
            delete obj.bump;
        }
        if (obj.normal === 'TRUE') {
            obj.normal = `${pre}${obj.name}normal.jpg`;
        } else {
            delete obj.normal;
        }
    }
    console.log(objs);
    return objs;
}

xlsGenerated();