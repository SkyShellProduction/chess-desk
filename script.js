let amount = +prompt('Введите размер шахматной доски, число 2 - 20');
let symb = prompt('Введите желаемый символ шахматной доски');
function desk(count = 8, symbol = '#'){
    if(count < 2 || count > 20 || symbol.match(/\s/gm) || symbol == ''){
        document.write('Передавайте нормальные аргументы в функцию');
        return false;
    }
    let char = '<div class="block">';
    for (let i = 1; i <= count; i++) {
       for (let k = 1; k <= count; k++) {
           if(i%2 == 0){
                if(k%2 == 0) char += `<span class="white"></span>`;
                else char += `<span class="black">${symbol}</span>`;
           }
           else {
                if(k%2 == 0) char += `<span class="black">${symbol}</span>`;
                else char += `<span class="white"></span>`;
           } 
           
       }
       char += `</div><div class="block">`;
    }
    return char;
}
let pre = `<pre>${desk(amount, symb)}</pre>`
document.body.innerHTML +=  pre;
