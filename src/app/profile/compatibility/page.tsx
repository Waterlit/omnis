import Link from 'next/link'

import { Grid, Link as MuiLink } from '@mui/material'

import CardBlueBordered from '@/components/Card/CardBlueBordered'
import CardDecoration from '@/components/Card/CornerDecorationWrapper'
import PageBox from '@/components/PageBox'

const RunesPage = () => {
    return (
        <PageBox title="Compatibility">
            <Grid container spacing={{ xs: 6, md: 2 }}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <MuiLink
                        href="/profile/compatibility/zodiac"
                        component={Link}
                    >
                        <CardDecoration
                            corners={['bottomCenter', 'bottomLeft']}
                            sx={{
                                '.corner': {
                                    display: { xs: 'none', md: 'block' },
                                },
                            }}
                        >
                            <CardBlueBordered>
                                Zodiac compatibility
                            </CardBlueBordered>
                        </CardDecoration>
                    </MuiLink>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <MuiLink
                        href="/profile/compatibility/date"
                        component={Link}
                    >
                        <CardDecoration
                            corners={[
                                'bottomCenter',
                                'bottomLeft',
                                'bottomRight',
                            ]}
                            sx={{
                                '.corner': {
                                    display: { xs: 'none', md: 'block' },
                                },
                            }}
                        >
                            <CardBlueBordered>
                                Date compatibility
                            </CardBlueBordered>
                        </CardDecoration>
                    </MuiLink>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <MuiLink
                        href="/profile/compatibility/name"
                        component={Link}
                    >
                        <CardDecoration
                            corners={['bottomCenter', 'bottomRight']}
                            sx={{
                                '.corner': {
                                    display: { xs: 'none', md: 'block' },
                                },
                            }}
                        >
                            <CardBlueBordered>
                                Name compatibility
                            </CardBlueBordered>
                        </CardDecoration>
                    </MuiLink>
                </Grid>
            </Grid>
        </PageBox>
    )
}

export default RunesPage
