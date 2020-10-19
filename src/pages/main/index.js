import React, { useContext } from "react";
import { TopNav } from "../../components/navs/index";

import {
    Main as MainSection,
    Box,
    Text,
    Heading,
    Form,
    FormField,
    TextInput,
    Button,
    Image,
    Grid,
    ResponsiveContext,
} from "grommet";
import { Next } from "grommet-icons";

import bgOne from "../../assets/images/bg-1.png";
import bgTwo from "../../assets/images/bg-2.jpg";
import ALgeriaPhoto from "../../assets/images/algeria.png";
import handClosedUp from "../../assets/images/picto1.png";
import twoHands from "../../assets/images/picto2.png";

const NewsLetterForm = () => (
    <Form margin={{ top: "0.2em", bottom: "2em" }}>
        <Box direction="row" gap="medium">
            <FormField htmlFor="text-input">
                <TextInput
                    id="text-input"
                    placeholder="Email"
                    background="white"
                />
            </FormField>

            <FormField htmlFor="text-input">
                <TextInput
                    id="text-input"
                    placeholder="Departement"
                    background="white"
                />
            </FormField>
            <Button icon={<Next />}></Button>
        </Box>
    </Form>
);

const FirstHomeSection = () => (
    <Box
        justify="start"
        align="start"
        pad={{ top: "2em" }}
        fill
        background={{
            color: "neutral-1",
            dark: true,
            opacity: false,
            position: "bottom",
            repeat: "no-repeat",
            size: "cover",
            image: `url(${bgTwo})`,
        }}
    >
        <Heading
            level="2"
            size="3.625em"
            margin={{ top: "0", bottom: "0", left: "1em" }}
        >
            Header here
        </Heading>
        <Text margin={{ bottom: "3em", left: "1em" }} size="2.625em">
            Comment pouvons-nous vous aider ?
        </Text>
        <Box
            fill="horizontal"
            height="40%"
            pad="medium"
            background={{ color: "#fb6929", opacity: "strong" }}
            margin={{ top: "0.8em" }}
        >
            <Text size="1.75em">NSCRIVEZ-VOUS À NOTRE NEWSLETTER</Text>
            <Text size="1.1875em" margin={{ top: "0.2em", bottom: "2em" }}>
                <strong>
                    Chaque semaine, recevez l'actualité de la Ligue dans votre
                    boîte mail
                </strong>
            </Text>
            <NewsLetterForm />
        </Box>
    </Box>
);
const SecendHomeSection = () => {
    const size = useContext(ResponsiveContext);

    return (
        <Box
            background={{
                color: "neutral-1",
                dark: true,
                opacity: false,
                position: "bottom",
                repeat: "no-repeat",
                size: "cover",
                image: `url(${bgOne})`,
            }}
        >
            <Box height="medium" width="medium">
                <Image src={ALgeriaPhoto} fit="cover" />
            </Box>

            <Box
                fill="horizontal"
                height="40%"
                pad="medium"
                background={{ color: "#fb6929" }}
                margin={{ top: "0.8em" }}
            >
                <Grid
                    rows={["xsmall"]}
                    margin={{ bottom: "xsmall", top: "medium" }}
                    columns={
                        size !== "small" ? ["1/2", "1/2"] : ["100%", "100%"]
                    }
                    areas={[
                        ["first", "second"],
                        ["first", "second"],
                    ]}
                    gap="small"
                >
                    <Box
                        gridArea="first"
                        direction="row"
                        gap="medium"
                        pad={{ left: "2em", right: "0.6em" }}
                    >
                        <Box width="8%" height="10%">
                            <Image src={handClosedUp} full />
                        </Box>
                        <Box>
                            <Text
                                color="white"
                                width="50%"
                                margin={{ bottom: "1em" }}
                                size="1.75em"
                            >
                                Avec vous, nous luttons chaque jour contre le
                                cancer
                            </Text>
                            <Text color="white" size="1.1875em">
                                <strong>
                                    Grâce à la mobilisation des ligueurs et vos
                                    dons.
                                </strong>
                            </Text>
                        </Box>
                    </Box>

                    <Box
                        gridArea="second"
                        direction="row"
                        gap="medium"
                        pad={{ left: "2em", right: "2em" }}
                    >
                        <Box width="12%" height="10%">
                            <Image src={twoHands} full />
                        </Box>
                        <Box>
                            <Text
                                color="white"
                                width="50%"
                                margin={{ bottom: "1em" }}
                                size="1.75em"
                            >
                                Nous sommes engagés contre le cancer
                            </Text>
                            <Text color="white" size="1.1875em">
                                <strong>
                                    Depuis 1918, la Ligue lutte contre le cancer
                                    en étant le premier financeur indépendant de
                                    la recherche.
                                </strong>
                            </Text>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
};
const HomePage = () => {
    return (
        <MainSection>
            <FirstHomeSection />
            <SecendHomeSection />
        </MainSection>
    );
};
export const Main = () => {
    return (
        <>
            <TopNav />
            <HomePage />
        </>
    );
};
