// uno.config.ts
import { defineConfig } from 'unocss';
import presetWebFonts from '@unocss/preset-web-fonts';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
    // ...UnoCSS options
    presets: [
        presetUno(),
        presetWebFonts({
            // use axios with an https proxy

            provider: 'google',
            fonts: {
                sans: 'Source Sans 3',
                // mono: ['Fira Code', 'Fira Mono:400,700'],
            },
        }),
    ],
})
