import js from '@eslint/js'
import prettier from '@vue/eslint-config-prettier'
import { withVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default withVueTs(
  { scriptLangs: ['js', 'ts'] },
  { ignores: ['dist/**', 'postcss.config.js'] },
  {
    files: ['src/**/*.{js,ts,vue}'],
    languageOptions: { globals: globals.browser },
  },
  js.configs.recommended,
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  prettier
)
