const UsingTime = 1000;

const generateBlocks = () => {
    const littleSquaresInLine = 5;
    const countOfLittleSquare = 25;
    const littleSquareWidth = 50;
    const littleSquareHeight = 50;
    const bigSquare = document.createElement('div');
    bigSquare.classList.add('bigSquare');
    bigSquare.style.width = littleSquaresInLine * littleSquareWidth + 'px';
    bigSquare.style.display = 'flex';
    bigSquare.style.margin = "100px auto";
    bigSquare.style.flexWrap = 'wrap';
    document.body.prepend(bigSquare);

    for(let i = 1; i <= countOfLittleSquare; i++) {
        const littleSquare = document.createElement('div');
        littleSquare.classList.add('littleSquare');
        littleSquare.style.width = littleSquareWidth + 'px';
        littleSquare.style.height = littleSquareHeight + 'px';
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

setInterval(() => generateBlocksInterval(), UsingTime);