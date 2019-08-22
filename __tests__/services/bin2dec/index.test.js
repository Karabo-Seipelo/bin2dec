import bin2dec from '../../../src/services/bin2dec';

describe('bin2dec', () => {
    test('1000 binary to decimal', () => {
        expect(bin2dec('1000')).toEqual(8);
    });
});
