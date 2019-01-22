import { pugToJsx } from 'pug-as-jsx-utils';
import babel from '@babel/core';

export default {
  process(src, filename = '') {
    const { jsxTemplate } = pugToJsx(src, { template: true });
    const basename = filename.split('/').pop().replace(/\.[a-zA-Z0-9]+$/, '');
    const { code } = babel.transformSync(jsxTemplate.replace(/%BASENAME%/g, `./${basename}`), {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    });
    return code;
  },
};
