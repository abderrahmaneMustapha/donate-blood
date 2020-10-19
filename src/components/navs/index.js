import React, { useState } from "react";
import {
    Header,
    Avatar,
    Nav,
    DropButton,
    Box,
    Text,
    Button,
    Anchor,
} from "grommet";
import {
    Phone,
    FacebookOption,
    Youtube,
    Instagram,
    Twitter,
} from "grommet-icons";

const gravatarLink =
    "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";

const DropContent = (props) => {
    return (
        <Box
            animation="slideDown"
            background={{ color: "background", dark: false }}
            pad="medium"
            width="70vw"
            gap="medium"
            direction="row-responsive"
            margin={{ top: "2rem" }}
        >
            {props.items.map((element) => (
                <Text>{element}</Text>
            ))}
        </Box>
    );
};

const PhoneBox = () => (
    <Box direction="column">
        <Box direction="row">
            <Phone />
            <Text>00 0000000</Text>
        </Box>
        Écoute, aide, soutien
    </Box>
);

const SocialList = () => {
    const social_list = [
        <Instagram />,
        <Twitter />,
        <FacebookOption />,
        <Youtube />,
    ];

    return (
        <Box direction="row" gap="small">
            {social_list.map((element) => (
                <Anchor
                    href="#"
                    margin={{ top: "1em" }}
                    label={<>{element}</>}
                />
            ))}
        </Box>
    );
};
const items = ["aazeazeazeaze", "bazeazeazeazeazeze"];
export const TopNav = () => {
    const [opendropTrouve, setOpenDropTrouve] = useState(false);
    const [opendropSout, setOpenDropSout] = useState(false);
    const [opendropInfo, setOpenDropInfo] = useState(false);
    return (
        <Header
            background="white"
            pad={{
                left: "1.2em",
                right: "1.2em",
                top: "0.5em",
                bottom: "0.1em",
            }}
        >
            <Avatar src={gravatarLink} size="large" />
            <Box
                direction="column"
                width="90%"
                margin={{ left: "0.3em", right: "0.3em" }}
            >
                <Box direction="row" justify="between">
                    <PhoneBox />
                    <Avatar src="https://www.ligue-cancer.net/sites/all/themes/ligue/images/header/log-don-de-confiance.png" />
                    <Button
                        label={
                            <Text>
                                <strong>Je Donne</strong>
                            </Text>
                        }
                    />

                    <Button
                        label={
                            <Text>
                                <strong>Se Connecter</strong>
                            </Text>
                        }
                    />
                </Box>
                <Nav
                    direction="row"
                    width="100%"
                    align="end"
                    alignSelf="end"
                    justify="between"
                    pad={{ bottom: "1rem" }}
                >
                    <Box direction="row" gap="large" width="70%">
                        <DropButton
                            plain
                            label="Fancy Selector"
                            size="1.188rem"
                            onMouseEnter={() => {
                                setOpenDropTrouve(true);
                            }}
                            onMouseLeave={() => {
                                setOpenDropTrouve(false);
                            }}
                            margin={{ top: "1em" }}
                            open={opendropTrouve}
                            dropAlign={{ top: "bottom", bottom: "bottom" }}
                            dropContent={<DropContent items={items} />}
                        />
                        <DropButton
                            plain
                            size="1.188rem"
                            label="Fancy Selector"
                            onMouseEnter={() => {
                                setOpenDropSout(true);
                            }}
                            onMouseLeave={() => {
                                setOpenDropSout(false);
                            }}
                            margin={{ top: "1em" }}
                            open={opendropSout}
                            dropAlign={{ top: "bottom", bottom: "bottom" }}
                            dropContent={<DropContent items={items} />}
                        />

                        <DropButton
                            plain
                            size="1.188rem"
                            label="Fancy Selector"
                            onMouseEnter={() => {
                                setOpenDropInfo(true);
                            }}
                            onMouseLeave={() => {
                                setOpenDropInfo(false);
                            }}
                            margin={{ top: "1em" }}
                            open={opendropInfo}
                            dropAlign={{ top: "bottom", bottom: "bottom" }}
                            dropContent={<DropContent items={items} />}
                        />
                    </Box>
                    <SocialList />
                </Nav>
            </Box>
        </Header>
    );
};
