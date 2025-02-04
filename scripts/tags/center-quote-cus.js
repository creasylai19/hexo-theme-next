/**
 * center-quote-cus.js | https://theme-next.js.org/docs/tag-plugins/
 */

'use strict';

module.exports = ctx => function(args, content) {
  return `<blockquote class="blockquote-center-cus">
${ctx.render.renderSync({ text: content, engine: 'markdown' })}
</blockquote>`;
};
