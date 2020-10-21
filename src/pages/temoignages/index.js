import React from "react";
import { WebFooter } from "../../components/footer/index";
import { TopNav } from "../../components/navs/index";
import { Main, Grid, Card, Text, Box, Heading, Markdown } from "grommet";
import TemoignagesJson from "../../assets/data/json/temoignages.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useParams } from "react-router-dom";
import { getTemoignageById } from "../../hooks/index";
// 6
function TemoignagesGrids() {
    const temoignages = TemoignagesJson.temoignages;
    let history = useHistory();
    return (
        <Grid
            rows={["medium", "medium", "medium"]}
            columns={["1/3", "1/3", "1/3"]}
            areas={[
                ["big_one", "big_one", "temoigne"],
                ["small_one", "small_two", "small_three"],
                ["big_two", "big_two", "small_four"],
            ]}
            gap="small"
            margin={{ top: "2em" }}
        >
            <Card
                background={{ image: `url(${temoignages[0].image})` }}
                gridArea="big_one"
                margin={{ left: "1em", right: "1em" }}
                onClick={() => {
                    history.push(`/temoignages/${temoignages[0].id}`);
                }}
                animation={{ type: "zoomIn", duration: 1000 }}
            >
                <Box
                    pad={{ left: "1em", right: "1em" }}
                    background="white"
                    style={{
                        position: "absolute",
                        top: "auto",
                        bottom: "5.1em",
                    }}
                >
                    <Text size="1.875rem">{temoignages[0].title}</Text>
                </Box>
            </Card>

            <Card
                background={{ color: "#F44D6C" }}
                gridArea="temoigne"
                margin={{ left: "1em", right: "2em" }}
                animation={{ type: "zoomIn", duration: 1000 }}
            >
                <Heading
                    className="article-sub-title"
                    color="white"
                    textAlign="center"
                    level="3"
                    size="1.7em"
                >
                    Vous aussi<br></br>
                    vous souhaitez<br></br>
                    témoigner?
                </Heading>
                <Text color="white" textAlign="center">
                    Parce que le partage d'expériences est fondamental, pour
                    vous comme pour nous, témoignez sur le sujet, la situation
                    que vous souhaitez.
                </Text>
            </Card>

            <Card
                background={{ color: "white" }}
                gridArea="small_one"
                margin={{ left: "1em" }}
                direction="column"
                align="center"
                pad={{ top: "3em" }}
                onClick={() => {
                    history.push(`/temoignages/${temoignages[1].id}`);
                }}
                animation={{ type: "zoomIn", duration: 1000 }}
            >
                <FontAwesomeIcon icon={faComment} size="5x" color="#F44D6C" />

                <Heading
                    className="article-sub-title"
                    color="#F44D6C"
                    textAlign="center"
                    level="3"
                    size="1.7em"
                >
                    {temoignages[1].title}
                </Heading>
            </Card>
            <Card
                background={{ color: "white" }}
                gridArea="small_two"
                direction="column"
                align="center"
                pad={{ top: "3em" }}
                onClick={() => {
                    history.push(`/temoignages/${temoignages[2].id}`);
                }}
                animation={{ type: "zoomIn", duration: 1000 }}
            >
                <FontAwesomeIcon icon={faComment} size="5x" color="#F44D6C" />
                <Heading
                    className="article-sub-title"
                    color="#F44D6C"
                    textAlign="center"
                    level="3"
                    size="1.7em"
                >
                    {temoignages[2].title}
                </Heading>
            </Card>
            <Card
                background={{ color: "white" }}
                gridArea="small_three"
                margin={{ right: "2em" }}
                direction="column"
                align="center"
                pad={{ top: "3em" }}
                onClick={() => {
                    history.push(`/temoignages/${temoignages[3].id}`);
                }}
                animation={{ type: "zoomIn", duration: 1000 }}
            >
                <FontAwesomeIcon icon={faComment} size="5x" color="#F44D6C" />
                <Heading
                    className="article-sub-title"
                    color="#F44D6C"
                    textAlign="center"
                    level="3"
                    size="1.7em"
                >
                    {temoignages[4].title}
                </Heading>
            </Card>

            <Card
                background={{ color: "white" }}
                gridArea="big_two"
                margin={{ left: "1em" }}
                direction="column"
                align="center"
                pad={{ top: "3em" }}
                onClick={() => {
                    history.push(`/temoignages/${temoignages[5].id}`);
                }}
                animation={{ type: "zoomIn", duration: 1000 }}
            >
                <FontAwesomeIcon icon={faComment} size="5x" color="#F44D6C" />
                <Heading
                    className="article-sub-title"
                    color="#F44D6C"
                    textAlign="center"
                    level="3"
                    size="1.7em"
                >
                    {temoignages[5].title}
                </Heading>
            </Card>

            <Card
                background={{ image: `url(${temoignages[4].image})` }}
                gridArea="small_four"
                margin={{ right: "2em" }}
                direction="column"
                align="center"
                style={{ position: "relative" }}
                onClick={() => {
                    history.push(`/temoignages/${temoignages[4].id}`);
                }}
                animation={{ type: "zoomIn", duration: 1000 }}
            >
                <Box
                    pad={{ left: "1em", right: "1em" }}
                    background="white"
                    style={{
                        position: "absolute",
                        top: "auto",
                        bottom: "0",
                    }}
                >
                    <Text size="1.875rem"> {temoignages[4].title}</Text>
                </Box>
            </Card>
        </Grid>
    );
}
function MainTemoignages() {
    return (
        <Main pad={{ bottom: "2em" }} background={{ color: "#E6E6E6" }}>
            <TemoignagesGrids />
        </Main>
    );
}
export default function Temoignages() {
    return (
        <>
            <TopNav />
            <MainTemoignages />
            <WebFooter />
        </>
    );
}

export function OneTemoignagesPage() {
    let [text, settext] = React.useState("");
    const params = useParams();
    const tem = getTemoignageById(TemoignagesJson, parseInt(params.id));
    tem.text.then((data) => {
        settext(data);
    });

    return (
        <>
            <TopNav />
            <Main background={{ color: "#E6E6E6" }} pad="large">
                <Box
                    fill="horizontal"
                    pad="medium"
                    background={{ color: "white" }}
                >
                    <Heading
                        level="2"
                        textAlign="center"
                        width="100%"
                        size="medium"
                        margin={{ bottom: "2em" }}
                    >
                        {tem.result.title}
                    </Heading>

                    <hr width="80%"></hr>
                    {text ? (
                        <Markdown className="markdown">{text}</Markdown>
                    ) : (
                        <div> Loading ....</div>
                    )}
                </Box>
            </Main>
            <WebFooter />
        </>
    );
}
