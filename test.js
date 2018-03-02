import test from 'ava';
import { calc } from './index';

test('should calculate mean', t => {
  const mean = calc([1, 10, 100, 45, -4, 0.5, -16]);

  t.is(mean, 19.5);
});
