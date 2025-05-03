import { Stack, Typography } from '@mui/material'

import CardPaper from '@/components/Card/CardPaper'
import CardDecoration from '@/components/Card/CornerDecorationWrapper'
import PageBox from '@/components/PageBox'

import BiorhythmChart from './components/BiorhythmChart'

const BiorhythmsDetailsPage = () => {
    return (
        <PageBox
            title={
                <Typography variant="inherit">
                    <Typography
                        variant="inherit"
                        color="secondary"
                        component={'span'}
                    >
                        Bio
                    </Typography>
                    rhythms
                </Typography>
            }
            titleProps={{ textAlign: 'center', marginBottom: '55px' }}
            size={'md'}
        >
            <BiorhythmChart></BiorhythmChart>
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
                    <Typography variant="body1" component={Stack}>
                        <div>
                            Physical biorhythm: 100% -{' '}
                            <Typography component={'span'} color="secondary">
                                Peak physical energy and coordination today.
                            </Typography>
                        </div>
                        <div>
                            Emotional biorhythm: 65% -{' '}
                            <Typography component={'span'} color="secondary">
                                Some fluctuations in mood and emotions can be
                                expected.
                            </Typography>
                        </div>
                        <div>
                            Intellectual biorhythm: 45% -{' '}
                            <Typography component={'span'} color="secondary">
                                Potential for decreased mental alertness and
                                focus today.
                            </Typography>
                        </div>
                        <div>
                            Overall biorhythm: 70% -{' '}
                            <Typography component={'span'} color="secondary">
                                A balanced day with variations in different
                                aspects of life.
                            </Typography>
                        </div>
                    </Typography>
                </CardPaper>
            </CardDecoration>
        </PageBox>
    )
}

export default BiorhythmsDetailsPage
