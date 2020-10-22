import React, { useContext } from "react";
import { TopNav } from "../../components/navs/index";
import { WebFooter } from "../../components/footer/index";

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
    Layer,
} from "grommet";
import { Next, Search, Chat, Help } from "grommet-icons";
import { useHistory } from "react-router-dom";
import bgOne from "../../assets/images/bg-1.png";
import bgTwo from "../../assets/images/bg-2.jpg";
import ALgeriaPhoto from "../../assets/images/algeria.png";
import handClosedUp from "../../assets/images/picto1.png";
import twoHands from "../../assets/images/picto2.png";

const NewsLetterForm = () => (
    <Form  id="news-letter-form" margin={{ top: "0.2em", bottom: "2em" }}>
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
            Toute et tous Unis
        </Text>
        <Box
            fill="horizontal"
            height="40%"
            pad="medium"
            background={{ color: "#fb6929", opacity: "strong" }}
            margin={{ top: "0.8em" }}
        >
            <Text size="1.75em" color="white">
                NSCRIVEZ-VOUS À NOTRE NEWSLETTER
            </Text>
            <Text
                size="1.1675em"
                margin={{ top: "0.2em", bottom: "2em" }}
                color="white"
            >
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
                        pad={{ left: "2em", right: "0.6em" }}
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

const HomeSideBar = () => {
    let history = useHistory();
    return (
        <Layer
            full="vertical"
            position="top-right"
            margin={{ right: "80vw", left: "auto", top: "122%" }}
            modal={false}
            style={{ position: "absolute", minHeight: "120vh" }}
            plain
        >
            <Box
                margin={{ left: "2em", right: "2em" }}
                pad={{ top: "2em", bottom: "2em" }}
                background={{ color: "#4E79A2" }}
                align="center"
            >
                <Text
                    textAlign="center"
                    size="1.75rem"
                    width="medium"
                    margin={{ bottom: "2em" }}
                >
                    Comment pouvons-nous <br></br> vous aider ?
                </Text>

                <Box margin={{ top: "1em", bottom: "5em" }}>
                    <Button
                        secondary
                        icon={<Search />}
                        label={ 
                            <Text>
                                <strong>Chercher</strong>
                            </Text>
                        }
                        onClick={() => {
                            history.push("/chercher");
                        }}
                    />
                </Box>

                <hr width="80%"></hr>

                <Text size={"1.75rem"} margin={{ top: "1em", bottom: "2em" }}>
                    Vos outils
                </Text>

                <Box
                    direction="row-responsive"
                    justify="around"
                    width="medium"
                    margin={{ bottom: "6em" }}
                >
                    <Box direction="column">
                        <Chat size="30em" />
                        <Text>Forum</Text>
                    </Box>

                    <Box direction="column">
                        <Help size="30em" />
                        <Text>Help</Text>
                    </Box>
                </Box>
            </Box>
        </Layer>
    );
};
const HomePage = () => {
    return (
        <MainSection>
            <HomeSideBar />
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
            <WebFooter />
        </>
    );
};
