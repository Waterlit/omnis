'use client'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Box, Stack, Typography } from '@mui/material'

import CardDecoration from '../Card/CornerDecorationWrapper'

import 'swiper/css'

const reviews = [
    {
        name: 'Sophie',
        text: '“I just wanted to ‘pull some cards about this guy’... ended up crying my eyes out. The reader saw everything — my past, my fears, even the stuff I don’t admit to myself. I felt lighter after.”',
    },
    {
        name: 'Luca',
        text: '“I came in asking why things always fall apart… and she hit me with something so deep, I sat there in silence for 10 minutes. It wasn’t just cards — it was like someone turned the lights on inside me.”',
    },
    {
        name: 'Isabelle',
        text: '“I was done trusting people. Then she said one sentence that shattered me — I realized how I’ve been betraying myself. It hit so hard.”',
    },
    {
        name: 'Thomas',
        text: '“We did the session at night — she told me I might have a dream with answers. I laughed. But that night… I did. Still gives me goosebumps.”',
    },
    {
        name: 'Anna',
        text: '“I lost my child and just wanted to know… why. She didn’t just explain — she brought peace into my heart. I didn’t think that was possible.”',
    },
    {
        name: 'Max',
        text: '“I asked about money, and somehow we uncovered a childhood wound I never healed. I cried hard — next day, I got unexpected money. That was wild.”',
    },
    {
        name: 'Charlotte',
        text: '“Same relationship pattern, over and over. I didn’t get it. But during the reading, everything clicked. Scary clear. And finally… I’m done repeating it.”',
    },
    {
        name: 'Daniel',
        text: '“I just wanted to know if I should move… and left the session feeling like I knew who I am* for the first time in years.',
    },
    {
        name: 'Emily',
        text: '“She said my ancestral line was blocked. We did a quick clearing. Three days later, my father — who I hadn’t spoken to in 7 years — called me. I still can’t explain it.”',
    },
    {
        name: 'Jonas',
        text: '“I was at rock bottom. Just opened the app randomly and booked a session. She said exactly what I needed to hear. It felt like someone breathed life back into me.”',
    },
    {
        name: 'Mia',
        text: '“I’d had the same nightmare for years. One reading, one explanation — and boom. It stopped. Just like that.” ',
    },
    {
        name: 'Nicolas',
        text: '“I thought it was BS at first. Then she said a phrase only my mom used to say to me as a kid. My jaw dropped. That moment changed everything.”',
    },
]

const ReviewsSection = () => {
    return (
        <CardDecoration
            corners={[
                'topRight',
                'topLeft',
                'topCenter',
                'bottomRight',
                'bottomLeft',
            ]}
        >
            <Box
                sx={{
                    padding: '19px 25px',
                    position: 'relative',
                }}
            >
                <Stack
                    direction={'row'}
                    sx={(theme) => ({
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translate(-50%, 0)',
                        color: '#C49362',
                        fontSize: '28px',
                        gap: '24px',
                        [theme.breakpoints.up(1690)]: {
                            top: '50%',
                            left: '-127px',
                            right: '-127px',
                            zIndex: 3,
                            justifyContent: 'space-between',
                            transform: 'translate(0, -50%)',
                        },
                    })}
                >
                    <Box
                        sx={{
                            width: 60,
                            height: 60,
                            borderRadius: 999,
                            border: '2px solid #C49362',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                        className={'elPrev'}
                    >
                        {'<'}
                    </Box>
                    <Box
                        sx={{
                            width: 60,
                            height: 60,
                            borderRadius: 999,
                            border: '2px solid #C49362',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}
                        className={'elNext'}
                    >
                        {'>'}
                    </Box>
                </Stack>
                <Swiper
                    spaceBetween={45}
                    modules={[Navigation]}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.elNext',
                        prevEl: '.elPrev',
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {reviews.map((it) => (
                        <SwiperSlide key={it.name}>
                            <Stack
                                alignItems={'center'}
                                useFlexGap
                                gap={'29px'}
                                sx={{
                                    textAlign: 'center',
                                }}
                            >
                                <Box
                                    width={90}
                                    height={90}
                                    sx={{
                                        borderRadius: 999,
                                        backgroundColor: '#6F90C01A',
                                        position: 'relative',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            borderRadius: 999,
                                            border: '1.4px solid transparent',
                                            background:
                                                'linear-gradient(180deg, rgba(209, 233, 255, 0.2) 0%, rgba(82, 91, 141, 0.2) 54.16%)',
                                            mask: 'linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)',
                                            maskComposite: 'exclude',
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0,
                                        }}
                                    ></Box>
                                </Box>
                                <Typography
                                    textTransform={'uppercase'}
                                    fontSize={{ xs: '26px', sm: '28px' }}
                                    lineHeight={1}
                                    letterSpacing={'0.01em'}
                                    fontWeight={600}
                                >
                                    {it.name}
                                </Typography>
                                <Typography
                                    fontSize={{ xs: '18px', sm: '20px' }}
                                    lineHeight={1.5}
                                    letterSpacing={'0.01em'}
                                >
                                    {it.text}
                                </Typography>
                            </Stack>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </CardDecoration>
    )
}

export default ReviewsSection
