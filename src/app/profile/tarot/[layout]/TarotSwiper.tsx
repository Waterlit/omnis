'use client'

import 'swiper/css'
import 'swiper/css/effect-coverflow'

import Image from 'next/image'
import { EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'

import { Box } from '@mui/material'

const TarotSwiper = () => {
    const [displayCard, setDisplayCard] = useState<number | null | undefined>(
        null
    )
    return (
        <Swiper
            style={{
                width: '100%',
                maxWidth: '100vw',
                display: 'flex',
                position: 'relative',
            }}
            breakpoints={{
                0: {
                    slidesPerView: 3,
                },
                990: {
                    slidesPerView: 5,
                },
            }}
            spaceBetween={20}
            loop
            modules={[EffectCoverflow]}
            effect="coverflow"
            centeredSlides
            onSlideChange={() => setDisplayCard(null)}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
        >
            {[1, 2, 3, 4, 5, 6].map((i) => {
                return (
                    <SwiperSlide key={i} onClick={() => setDisplayCard(i)}>
                        <Box
                            position={'relative'}
                            width={'100%'}
                            height={'100%'}
                            minHeight={246}
                        >
                            {i === displayCard ? (
                                <Image
                                    src="/card2.png"
                                    alt="card"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                ></Image>
                            ) : (
                                <Image
                                    src="/card.png"
                                    alt="card"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                ></Image>
                            )}
                        </Box>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default TarotSwiper
