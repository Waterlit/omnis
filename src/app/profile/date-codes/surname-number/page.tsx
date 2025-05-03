import { Stack, Typography } from '@mui/material'

import CardPaper from '@/components/Card/CardPaper'
import CardDecoration from '@/components/Card/CornerDecorationWrapper'
import PageBox from '@/components/PageBox'

const LifePathNumberPage = () => {
    return (
        <PageBox
            title={
                <Typography variant="inherit">
                    Date{' '}
                    <Typography
                        variant="inherit"
                        color="secondary"
                        component={'span'}
                    >
                        Codes
                    </Typography>
                </Typography>
            }
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
                            <Typography color="secondary" component={'span'}>
                                To calculate the life path number,
                            </Typography>{' '}
                            we first need to find the individual root numbers of
                            the date of birth provided.
                        </div>
                        <Typography color="secondary">
                            <Typography>20.09.2000</Typography>
                            <Typography>2+0 = 2 (Day)</Typography>
                            <Typography>0+9 = 9 (Month)</Typography>
                            <Typography>2+0+0+0 = 2 (Year)</Typography>
                        </Typography>
                        <div>
                            <Typography>
                                Next, let&apos;s add these individual root
                                numbers together:
                            </Typography>
                            <Typography>
                                2 (Day) + 9 (Month) + 2 (Year) = 13
                            </Typography>
                        </div>
                        <div>
                            <Typography>
                                We then reduce this total number to a single
                                digit:
                            </Typography>
                            <Typography>1 + 3 = 4</Typography>
                        </div>
                        <div>
                            Therefore, the life path number for the date of
                            birth 20.09.2000 is 4.
                        </div>
                        <div>
                            Life Path{' '}
                            <Typography component={'span'} color="secondary">
                                Number 4
                            </Typography>{' '}
                            signifies someone who is practical, disciplined, and
                            organized. People with this life path number are
                            known for their reliability, hard work, and ability
                            to create stability in their lives and the lives of
                            those around them. They are often seen as the{' '}
                            <Typography component={'span'} color="secondary">
                                &quot;rock&quot;
                            </Typography>{' '}
                            in relationships and are dedicated to building a
                            strong foundation for success. Those with a life
                            path number of{' '}
                            <Typography component={'span'} color="secondary">
                                4
                            </Typography>{' '}
                            are also detail-oriented and excel in roles that
                            require structure and planning.
                        </div>
                    </Typography>
                </CardPaper>
            </CardDecoration>
        </PageBox>
    )
}

export default LifePathNumberPage
