const bin2dec = (bin) => {
    let decimal = 0;
    let index = bin.length - 1;

    for (; index >= 0; index--) {
        decimal += parseInt(bin[index]) * Math.pow(2, bin.length - 1 - index);
    }

    return decimal;
};

export default bin2dec;
