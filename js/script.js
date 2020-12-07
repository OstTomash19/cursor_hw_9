const generateBlocks = () => {
    const bigSquare = document.createElement('div');
    bigSquare.classList.add('bigSquare');
    bigSquare.style.width = 5 * 50 + 'px';
    bigSquare.style.display = 'flex';
    bigSquare.style.margin = "100px auto";
    bigSquare.style.flexWrap = 'wrap';
    document.body.prepend(bigSquare);

    const countOfLittleSquare = 25;

    for(let i = 1; i <= countOfLittleSquare; i++) {
        const littleSquare = document.createElement('div');
        littleSquare.classList.add('littleSquare');
        littleSquare.style.width = 50 + 'px';
        littleSquare.style.height = 50 + 'px';
        littleSquare.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        bigSquare.append(littleSquare);
    }
}

generateBlocks();

const generateBlocksInterval = () => {
    document.querySelectorAll('.littleSquare').forEach(el => {
        el.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    });
}

setInterval(() => generateBlocksInterval(), 1000);