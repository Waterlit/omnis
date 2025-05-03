import { Typography } from '@mui/material'

import CardDecoration from '@/components/Card/CornerDecorationWrapper'
import PageBox from '@/components/PageBox'

import DreamBookCard from './components/DreamBookCard'

const DreamBookPage = () => {
    return (
        <PageBox
            title={
                <>
                    Dream{' '}
                    <Typography
                        variant="inherit"
                        color="secondary"
                        component={'span'}
                    >
                        Book
                    </Typography>
                </>
            }
            titleProps={{ textAlign: 'center', marginBottom: '47px' }}
        >
            <CardDecoration>
                <DreamBookCard>
                    <Typography variant="body1">
                        Dreaming of a{' '}
                        <Typography color="secondary" component={'span'}>
                            cat meowing
                        </Typography>{' '}
                        in your dream may symbolize independence, mystery, and
                        intuition. It could suggest that you need to listen to
                        your{' '}
                        <Typography color="secondary" component={'span'}>
                            inner voice
                        </Typography>{' '}
                        and trust your instincts in a current situation.
                        Alternatively, it may represent your desire for
                        attention or communication from someone in your waking
                        life.{' '}
                        <Typography color="secondary" component={'span'}>
                            Overall, dreaming of a cat
                        </Typography>{' '}
                        meowing can be a reminder{' '}
                        <Typography color="secondary" component={'span'}>
                            to pay attention to your
                        </Typography>{' '}
                        inner thoughts and emotions.
                    </Typography>
                </DreamBookCard>
            </CardDecoration>
        </PageBox>
    )
}

export default DreamBookPage
