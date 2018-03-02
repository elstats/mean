import test from 'ava';
import mean from './index';

test('should calculate mean', t => {
    const result = mean([1, 10, 100, 45, -4, 0.5, -16]);

    t.is(result, 19.5);
});
