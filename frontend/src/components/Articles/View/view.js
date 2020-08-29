import React from "react";
import {Link} from "react-router-dom";
import Interweave from 'interweave';
import ReactTimeAgo from 'react-time-ago';
import { Container, Card, Button } from 'reactstrap';
import ArticleHeader from './style/ArticleHeader';
import ArticleFooter from './style/ArticleFooter';
import './view.css';

const Article = props => {
	return (
	<Container className="container">
	  <Card className="card">
	    <ArticleHeader>
		<Link
		   style={{ textDecoration: "none" }}
		   to={"/articles/" + props.slug}
		   key={props.slug}
		>
		<h1>{props.title}</h1>
		</Link>
		<p> By {props.author}, Published <ReactTimeAgo date={props.published_on}/> </p>
		<span/>
		</ArticleHeader>

		<div>
		 <p style={{ textAlign: 'center' }}>
		  <img class="img-fluid center" alt="..." src={props.img1} style={{ marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }} />
		  </p>
		  <Interweave
              tagName="div"
              content={props.short_description}
            />
		  <Link style={{ textDecoration: "none" }} to={"/articles/" + props.slug}>
		     <ArticleFooter style={{ marginBottom: '15px' }}>
		        <p>Continue Reading &#8594;</p>
		     </ArticleFooter>
		  </Link>
		</div>
	   </Card>
	  </Container>
	);
};

export default Article;