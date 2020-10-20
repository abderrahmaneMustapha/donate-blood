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
    Grid,
} from "grommet";
import {
    Phone,
    FacebookOption,
    Youtube,
    Instagram,
    Twitter,
} from "grommet-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAssistiveListeningSystems,
    faHandHoldingHeart,
    faHandshake,
    faSearch,
    faPills,
    faProjectDiagram,
    faPrayingHands,
    faSmokingBan,
    faCommentDots
} from "@fortawesome/free-solid-svg-icons";

//import {useHistory} from "react-router-dom"

const gravatarLink =
    "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";

const DropContent = (props) => {
    return (
        <Grid
            animation="slideDown"
            background={{ color: "background", dark: false }}
            pad={{ left: "medium", bottom: "medium", top: "medium" }}
            width="75vw"
            gap="small"
            style={{ overflow: "hidden" }}
            columns={["1/4", "1/4", "1/4", "1/4"]}
            margin={{ top: "2rem", left: "2em", right: "2em" }}
        >
            {props.items.map((element) => (
                <>{element}</>
            ))}
        </Grid>
    );
};

export const PhoneBox = () => (
    <Box  align="center" justify="center" direction="column">
        <Box direction="row" gap="small">
            <Phone color="#FB6929" weight="bold" size="30em" />
            <Text weight="bold" color="#FB6929" size="1.5em">
                00 0000000
            </Text>
        </Box>
        <Text textAlign="center" size="0.7em">
            {" "}
            Écoute, aide, soutien
        </Text>
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
        <Box direction="row-responsive" gap="small">
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

const IconsBox = (props) => {
    return (
        <Anchor color="#575757" href={props.link}>
            <Box direction="column" gap="small" width="small" margin={{bottom:"2em"}} align="center">
                <FontAwesomeIcon
                    color={props.color}
                    icon={props.icon}
                    size="3x"
                />
                <Text textAlign="center" size=".7em">
                    <strong>{props.text}</strong>
                </Text>
            </Box>
        </Anchor>
    );
};

const trouve_items = [
    <IconsBox
        text="Le Soutien psychologique et l’écoute"
        icon={faAssistiveListeningSystems}
        color="#06A991"
        link="/articles/27991_avec-vous-chaque-etape-de-la-maladie"
    />,
];
const soutiens_items = [
    <IconsBox
        text="Faire un don"
        icon={faHandHoldingHeart}
        color="#4C99EC"
        link="/faire-un-don"
    />,
    <IconsBox
        text="Devenir une entreprise partenaire"
        icon={faHandshake}
        color="#4C99EC"
        link="/articles/26025_devenir-partenaire-de-la-ligue"
    />,
];

const informe_items = [
    <IconsBox
        text="Le cancer, définition et chiffres"
        icon={faSearch}
        color="#F9496B"
        link="/faire-un-don"
    />,
    <IconsBox
        text="Traitement et conseil"
        icon={faPills}
        color="#F9496B"
        link="/articles/26025_devenir-partenaire-de-la-ligue"
    />,
    <IconsBox
        text="Tous les cancers"
        icon={faProjectDiagram}
        color="#F9496B"
        link="/articles/26025_devenir-partenaire-de-la-ligue"
    />,
    <IconsBox
        text="Prévention et dépistage"
        icon={faPrayingHands}
        color="#F9496B"
        link="/articles/26025_devenir-partenaire-de-la-ligue"
    />,

    <IconsBox
        text="Tabac et cancer"
        icon={faSmokingBan}
        color="#F9496B"
        link="/articles/26025_devenir-partenaire-de-la-ligue"
    />,

    <IconsBox
        text="Les témoignages"
        icon={faCommentDots}
        color="#F9496B"
        link="/articles/26025_devenir-partenaire-de-la-ligue"
    />
];
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
                        icon={<FontAwesomeIcon icon={faHandHoldingHeart} />}
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
                            label={(
                                <Text>
                                    <strong>JE TROUVE</strong>
                                </Text>
                            )}
                            size="1.188rem"
                            onMouseEnter={() => {
                                setOpenDropTrouve(true);
                                setOpenDropSout(false);
                                setOpenDropInfo(false);
                            }}
                            onClose={() => {
                                setOpenDropTrouve(false);
                            }}
                            margin={{ top: "1em" }}
                            open={opendropTrouve}
                            dropAlign={{ top: "bottom", bottom: "bottom" }}
                            dropContent={<DropContent items={trouve_items} />}
                        />
                        <DropButton
                            plain
                            size="1.188rem"
                            label={(
                                <Text>
                                    <strong>JE SOUTIEN</strong>
                                </Text>
                            )}
                            onMouseEnter={() => {
                                setOpenDropTrouve(false);
                                setOpenDropSout(true);
                                setOpenDropInfo(false);
                            }}
                            onClose={() => {
                                setOpenDropSout(false);
                            }}
                            margin={{ top: "1em" }}
                            open={opendropSout}
                            dropAlign={{ top: "bottom", bottom: "bottom" }}
                            dropContent={<DropContent items={soutiens_items} />}
                        />

                        <DropButton
                            plain
                            size="1.188rem"
                            label={(
                                <Text>
                                    <strong>JE M'INFORME</strong>
                                </Text>
                            )}
                            onMouseEnter={() => {
                                setOpenDropTrouve(false);
                                setOpenDropSout(false);
                                setOpenDropInfo(true);
                            }}
                            onClose={() => {
                                setOpenDropInfo(false);
                            }}
                            margin={{ top: "1em" }}
                            open={opendropInfo}
                            dropAlign={{ top: "bottom", bottom: "bottom" }}
                            dropContent={<DropContent items={informe_items} />}
                        />
                    </Box>
                    <SocialList />
                </Nav>
            </Box>
        </Header>
    );
};

