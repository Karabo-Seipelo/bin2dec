import _ from 'lodash';
import bin2dec from './services/bin2dec';

const component = () => {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Bin2Dec'], ' ');

    return element;
};

document.body.appendChild(component());
