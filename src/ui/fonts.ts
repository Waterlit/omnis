import { Inter, Roboto, Source_Serif_4 } from 'next/font/google'

const inter = Inter({
    fallback: ['Arial', 'sans-serif'],
    weight: ['400', '500', '600', '700'],
    subsets: ['cyrillic'],
})
const SourceSerif = Source_Serif_4({
    fallback: ['Times New Roman', 'serif'],
    weight: ['600', '700', '800', '900'],
    subsets: ['cyrillic'],
})

const roboto = Roboto({
    weight: '600',
    fallback: ['Arial', 'sans-serif'],
    subsets: ['cyrillic'],
})

export { inter, SourceSerif, roboto }
