import { defineConfig } from '@rsbuild/core';
import { pluginVue2 } from '@rsbuild/plugin-vue2';
import { pluginUmd } from '@rsbuild/plugin-umd';

export default defineConfig({
  plugins: [pluginVue2()],
  output: {
    sourceMap: {
      js: 'eval-cheap-module-source-map',
      css: false
    }
  }
});
