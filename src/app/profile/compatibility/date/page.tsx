import { Stack, Typography } from '@mui/material'

import CardPaper from '@/components/Card/CardPaper'
import CardDecoration from '@/components/Card/CornerDecorationWrapper'
import PageBox from '@/components/PageBox'

const LifePathNumberPage = () => {
    return (
        <PageBox
            title={<Typography variant="inherit">Compatibility</Typography>}
            titleProps={{ textAlign: 'center', marginBottom: '47px' }}
            size={'md'}
        >
            <CardDecoration
                corners={[
                    'bottomCenter',
                    'bottomLeft',
                    'bottomRight',
                    'topCenter',
                    'topLeft',
                    'topRight',
                ]}
            >
                <CardPaper>
                    <Typography
                        variant="body1"
                        component={Stack}
                        useFlexGap
                        gap={'1.6em'}
                        sx={{ opacity: 0.6 }}
                    >
                        <div>
                            Based on the provided birth dates, here is how the
                            compatibility looks like from a numerological
                            standpoint:
                        </div>

                        <div>
                            1. Physical Compatibility: Both individuals have the
                            same birth path number, 4. This can indicate a
                            strong physical connection, as they may understand
                            each other&apos;s needs and preferences.
                        </div>

                        <div>
                            2. Emotional Compatibility: The emotional
                            compatibility is also promising as both individuals
                            share the same birth path number. This can suggest a
                            deep emotional understanding and similarity in how
                            they express and handle their emotions.
                        </div>

                        <div>
                            3. Smart Compatibility: Both individuals have a
                            birth path number of 4. They may have a similar
                            approach to intellectual pursuits and
                            problem-solving, which can lead to good
                            communication and shared interests in intellectual
                            matters.
                        </div>

                        <div>
                            4. Heart Compatibility: With both partners having
                            the same birth path number, 4, there may be a
                            harmonious connection in matters of the heart. They
                            might understand each other&apos;s emotional needs
                            and be able to support each other emotionally.
                        </div>

                        <div>
                            5. Creative Compatibility: The shared birth path
                            number of 4 may indicate a compatibility in creative
                            pursuits as well. They may appreciate each
                            other&apos;s creativity and work well together on
                            creative projects.
                        </div>

                        <div>
                            6. Intuitive Compatibility: The intuitive connection
                            is likely strong due to the same birth path number.
                            They may have a deep understanding of each
                            other&apos;s intuitive insights and support each
                            other in following their instincts.
                        </div>

                        <div>
                            Overall, based on the numerological analysis, the
                            compatibility between the individuals with birth
                            dates 20 September 2000 and 18 September 2000
                            appears to be quite favorable across various aspects
                            of compatibility.
                        </div>
                    </Typography>
                </CardPaper>
            </CardDecoration>
        </PageBox>
    )
}

export default LifePathNumberPage
