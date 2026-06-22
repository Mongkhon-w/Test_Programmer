/**
 * ข้อ 8: เขียนโปรแกรมรับ Input ตัวเลข 1 ตัว แล้วแสดงเป็นรูปสามเหลี่ยมกลับด้าน
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printInvertedPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        
        let spaces = '  '.repeat(rows - i);
        
        let starsArr = [];
        for (let j = 0; j < (2 * i - 1); j++) {
            starsArr.push('*');
        }
        
        console.log(spaces + starsArr.join(' '));
    }
}

rl.question('Enter number of rows: ', (answer) => {
    const num = parseInt(answer);
    if (!isNaN(num) && num > 0) {
        printInvertedPyramid(num);
    } else {
        console.log('Please enter a valid number.');
    }
    rl.close();
});
