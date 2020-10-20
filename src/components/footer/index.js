import React from "react"
import {Text, Footer, Box, Anchor} from "grommet"
import {Instagram, FacebookOption, Twitter} from "grommet-icons"
const Media = () => (
    <Box direction="row" gap="xxsmall" justify="center">
        <Anchor
            a11yTitle="Share feedback on Github"
            href="https://www.instagram.com/"
            icon={<Instagram color="white" />}
        />
        <Anchor
            a11yTitle="Chat with us on Slack"
            href="https://www.facebook.com/"
            icon={<FacebookOption color="white" />}
        />
        <Anchor
            a11yTitle="Follow us on Twitter"
            href="https://twitter.com/"
            icon={<Twitter color="white" />}
        />
    </Box>
);

export const WebFooter = () => (
    <Box background="#3A4B69" direction="column" pad={{top:"2em", bottom:"1em"}}>
      <Text size="0.8em" textAlign="center" ><strong>SUIVEZ-NOUS SUR LES RÉSEAUX SOCIAUX</strong></Text>
    <Footer  pad="small">
        <Box align="center" direction="row" gap="xsmall">
            <Text alignSelf="center" color="white" size="small">
                Website name
            </Text>
        </Box>
        <Media />
        <Text textAlign="center" size="xsmall">
            ©Copyright
        </Text>
    </Footer>
    </Box>
);