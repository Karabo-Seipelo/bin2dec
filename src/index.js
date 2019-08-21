import _ from 'lodash';

const component = () => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Bin2Dec'], ' ');


    const bin2dec = (bin) => {
        let decimal = 0;
        let index = bin.length - 1;

        for(; index >= 0; index--) {
            decimal += parseInt(bin[index])*Math.pow(2, bin.length - 1 - index)
        }

        return decimal;

    };

    console.log(bin2dec("1000"));

    return element;
}

document.body.appendChild(component());