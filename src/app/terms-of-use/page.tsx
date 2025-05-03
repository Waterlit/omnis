import { Box, Stack } from '@mui/material'

import CardSemiTransparentBordered from '@/components/Card/CardSemiTransparentBordered'
import PageBox from '@/components/PageBox'

const page = () => {
    return (
        <Box
            sx={{
                padding: { xs: '86px 0 0', sm: '160px 0 0' },
            }}
        >
            <PageBox title={'Information'}>
                <CardSemiTransparentBordered>
                    <Stack
                        sx={{
                            gap: '1em',
                            fontSize: { xs: '14px', sm: '17px' },
                            lineHeight: 1.6,
                            color: 'text.secondary',
                            letterSpacing: '0.01em',
                        }}
                    >
                        <div>User Agreement</div>
                        <div>
                            Welcome to our platform. By accessing or using our
                            services, you agree to comply with the terms
                            outlined in this User Agreement. Please read this
                            document carefully before using our services. If you
                            do not agree with any part of this agreement, you
                            must not use our services.
                        </div>
                        <div>
                            1. Acceptance of Terms. By using our services, you
                            confirm that you have read, understood, and agree to
                            be bound by these terms and conditions.
                        </div>
                        <div>
                            2. Modifications. We reserve the right to modify
                            these terms at any time. Any changes will be
                            effective immediately upon posting on our website.
                            Your continued use of the services after any changes
                            signifies your acceptance of the new terms.
                        </div>
                        <div>
                            3. User Responsibilities. You are responsible for
                            maintaining the confidentiality of your account
                            information and for all activities that occur under
                            your account. You agree to notify us immediately of
                            any unauthorized use of your account.
                        </div>
                        <div>
                            4. Limitation of Liability. Our liability is limited
                            to the fullest extent permitted by law. We are not
                            liable for any indirect, incidental, or
                            consequential damages arising from your use of our
                            services.
                        </div>
                        <div>
                            5. Governing Law. This agreement shall be governed
                            by and construed in accordance with the laws of the
                            jurisdiction in which our company is registered.
                        </div>
                        <div>
                            By using our services, you acknowledge that you have
                            read and understood this User Agreement and agree to
                            be bound by its terms.
                        </div>
                        <div>
                            Welcome to our platform. By accessing or using our
                            services, you agree to comply with the terms
                            outlined in this User Agreement. Please read this
                            document carefully before using our services. If you
                            do not agree with any part of this agreement, you
                            must not use our services.
                        </div>
                        <div>
                            1. Acceptance of Terms. By using our services, you
                            confirm that you have read, understood, and agree to
                            be bound by these terms and conditions.
                        </div>
                        <div>
                            2. Modifications. We reserve the right to modify
                            these terms at any time. Any changes will be
                            effective immediately upon posting on our website.
                            Your continued use of the services after any changes
                            signifies your acceptance of the new terms.
                        </div>
                        <div>
                            3. User Responsibilities. You are responsible for
                            maintaining the confidentiality of your account
                            information and for all activities that occur under
                            your account. You agree to notify us immediately of
                            any unauthorized use of your account.
                        </div>
                        <div>
                            4. Limitation of Liability. Our liability is limited
                            to the fullest extent permitted by law. We are not
                            liable for any indirect, incidental, or
                            consequential damages arising from your use of our
                            services.
                        </div>
                        <div>
                            5. Governing Law. This agreement shall be governed
                            by and construed in accordance with the laws of the
                            jurisdiction in which our company is registered.
                        </div>
                        <div>
                            By using our services, you acknowledge that you have
                            read and understood this User Agreement and agree to
                            be bound by its terms.
                        </div>
                    </Stack>
                </CardSemiTransparentBordered>
            </PageBox>
        </Box>
    )
}

export default page
