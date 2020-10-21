import React from "react";
import { TopNav } from "../../components/navs/index";
import { WebFooter } from "../../components/footer/index";
import { Main, Box, Markdown, Heading, Text, List } from "grommet";
import { useParams } from "react-router-dom";
import articles from "../../assets/data/json/articles.json";
import { getArticlesBySlug } from "../../hooks/index";
import { PhoneBox } from "../../components/navs/index";
import {useHistory} from "react-router-dom"
function ArticleTextMd(props) {
    let [data, setdata] = React.useState("");
    props.text.then((data) => {
        setdata(data);
    });
    if (!data) return <div>Loading ...</div>;
    return <Markdown className="markdown">{data}</Markdown>;
}
function MainArticle(props) {
    const article = props.article;
    const url_slug = props.url_slug;
    let history= useHistory()
    const [selected, setSelected] = React.useState(
        props.article.result.serie.findIndex(
            (element) => element.slug === url_slug
        )
    );
    return (
        <Box
            direction="row"
            pad="small"
            margin={{ top: "2rem" }}
            gap="medium"
            fill="horizontal"
        >
            <Box width="70%" pad="large" background="white">
                <Box
                    fill="horizontal"
                    margin={{ bottom: "2em", top: "2em" }}
                    align="center"
                    direction="row"
                    gap="medium"
                >
                    <i
                        className={article.result.icon + " fa-2x"}
                        color={article.result.color}
                    ></i>
                    <Box fill="horizontal" direction="column">
                        <Heading
                            level="2"
                            margin={{ top: "0", bottom: "0" }}
                            size="1.500rem"
                        >
                            {article.result.title}
                        </Heading>
                        <Heading
                            level="3"
                            margin={{ top: "0", bottom: "0" }}
                            color={article.result.color}
                            size="1.75rem"
                        >
                            {" "}
                            <strong>{article.result.overview}</strong>
                        </Heading>
                    </Box>
                </Box>

                <hr width="80%"></hr>
                <ArticleTextMd text={article.text} />
            </Box>

            <Box
                width="30%"
                pad={{ top: "0", left: "2em" }}
                gap="large"
                background="#E6E6E6"
                direction="column"
            >
                {article.result.serie ? (
                    <Box pad="small" background="white" margin={{ top: "0" }}>
                        <List
                            width="100%"
                            primaryKey="overview"
                            data={article.result.serie}
                            itemProps={
                                selected >= 0
                                    ? {
                                          [selected]: {
                                              background: `${article.result.color}`,
                                          },
                                      }
                                    : undefined
                            }
                            onClickItem={(event) =>{
                                history.push(`/articles/${event.item.slug}`)
                                setSelected(
                                    selected === event.index
                                        ? undefined
                                        : event.index
                                )
                            }
                               
                            }
                        />
                    </Box>
                ) : undefined}
                <Box pad="small" background="white" margin={{ top: "0" }}>
                    <Text
                        textAlign="center"
                        size="medium"
                        margin={{ top: "1em", bottom: "1em" }}
                    >
                        {" "}
                        Pour tout renseignement, appelez le{" "}
                    </Text>
                    <PhoneBox />
                </Box>
            </Box>
        </Box>
    );
}
export default function Article() {
    const params = useParams();
    const slug = params.slug;
    const article = getArticlesBySlug(articles, slug);
    console.log(article);
    return (
        <Main fill="horizontal" background={{ color: "#E6E6E6" }}>
            <TopNav />
            <MainArticle url_slug={slug} article={article} />
            <WebFooter />
        </Main>
    );
}
