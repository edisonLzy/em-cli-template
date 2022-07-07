/**
 * create by core
 */
import { defineCommand } from '@em-cli/core';

export default defineCommand({
  id: '<%= name %>',
  description: '<%= description %>',
  async run({ args, optionsArgs }) {
    console.log('<%= name %> worked');
  },
});
