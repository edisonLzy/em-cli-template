/**
 * create by em-cli
 */
import { defineCommand } from '@em-cli/em-cli';

export default defineCommand({
  id: '<%= name %>',
  description: '本地开发服务器',
  async run({ args, optionsArgs }) {
    console.log('<%= name %> worked');
  },
});
