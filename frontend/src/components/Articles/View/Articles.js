import React from "react";

import Article from "./view";

const Articles = props => {
	let articleList = null;
	if( props.articleList.length>0 ){
		articleList = props.articleList.map( article => (
		   <Article
		     key={article.slug}
		     slug={article.slug}
		     title={article.title}
		     img1={article.img1}
		     author={article.author_full_name}
		     published_on={article.published_on}
		     short_description={article.short_description}
		   />	
		));
	}
	else {
		articleList = (
			<div>No Articles Yet</div>
		);
	}
	return <div>{articleList}</div>
};

export default Articles;