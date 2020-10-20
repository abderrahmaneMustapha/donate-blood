
let  fetchdata  = async (path)=>{
    let response = await fetch(path)
    let text_md = await response.text()

    return text_md
}

export const getArticlesBySlug = (articles, slug) => {
    let result = {};
    let text_md = "";
    articles.articles.forEach((element) => {
         if (element.slug === slug) {
            result = element                
        }
    })

    const text_file_path =   require(`../assets/data/md/${result.slug}.md`);
    text_md = fetchdata(text_file_path)  

  
    return { result: result, text: text_md };
};
