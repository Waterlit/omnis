// @ts-check
/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    bracketSpacing: true,
    plugins: ['@ianvs/prettier-plugin-sort-imports'], // наш плагин для сортировки
    importOrder: [
        // и тут начинается порядок импортов
        '^[react]', // все что идет со словом react
        '',
        '^./hooks', // затем пользовательские хуки
        '^(@mui/material)$', // все файлы начинающиеся с @ без /
        '^@(?!/)', // все файлы начинающиеся с @ без /
        '',
        '^@/assets/icons', // наши иконки
        '',
        '^@/', // все доп компоненты лежащие рядом с основным
        '',
        '^[../]', // стили которые лежат в файлах ts (мы используем cva для стилей)
        '^[./]', // стили которые лежат в файлах ts (мы используем cva для стилей)
    ],
    // importOrderSeparation: true, // импорты у нас разделены пробелами
    // importOrderSortSpecifiers: true, // а это для чего? вопрос для читателей)
}

export default config
