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
                            The numerological compatibility between the names
                            &quot;Roman&quot; and &quot;Roman&quot; is very
                            high, as they share the same meaning. The name
                            &quot;Roman&quot; has a numerology number of 6. The
                            repetition of this number in both names can
                            strengthen characteristics associated with number 6,
                            such as harmony, balance, responsibility, and
                            compassion. Overall, the compatibility based on
                            numerology suggests a strong and harmonious
                            partnership between individuals with these names.
                        </div>
                    </Typography>
                </CardPaper>
            </CardDecoration>
        </PageBox>
    )
}

export default LifePathNumberPage
