'use-strict';
// import { Buffer } from 'buffer';

const buf = Buffer.alloc(100),
  buf2 = Buffer.alloc(26);
buf.write('abcd', 0, 4, 'ascii');
let str = '';
console.log(buf, buf.toString('ascii'));
