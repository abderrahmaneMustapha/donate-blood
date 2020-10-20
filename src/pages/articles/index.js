import React from "react";
import { TopNav } from "../../components/navs/index";
import { WebFooter } from "../../components/footer/index";
import { Main, Box, Markdown, Heading } from "grommet";
import { useParams } from "react-router-dom";
import  articles from "../../assets/data/json/articles.json"
import {getArticlesBySlug} from "../../hooks/index"

function ArticleTextMd(props) {
    let  [data, setdata ]= React.useState("")
    props.text.then(data=>
        {
            setdata(data)
        })
    if (!data)  return <div>Loading ...</div>
    return <Markdown>{data}</Markdown>;
}
function MainArticle(props) {
   const article = props.article
    console.log(article)
    return (
        <Box direction="row" pad="small" gap="large" fill="horizontal">
            <Box width="70%" pad="large" background="white">
            <Heading level="2" size="medium">{article.result.title}</Heading>
                <hr width="80%"></hr>
                <ArticleTextMd  text={article.text}/>
            </Box>

            <Box width="30%" pad="small" background="white"></Box>
        </Box>
    );
}
export default function Article() {
    const params = useParams();
    const slug = params.slug;
    const article =   getArticlesBySlug(articles, slug)
    console.log(article)
    return (
        <Main fill="horizontal" background={{ color: "#E6E6E6" }}>
            <TopNav />
            <MainArticle article={article}  />
            <WebFooter />
        </Main>
    );
}
