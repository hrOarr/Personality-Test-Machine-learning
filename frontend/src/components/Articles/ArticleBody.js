import React, { Component } from 'react';

import axios from 'axios';
import Preloader from '../helpers/preloader';
import Interweave from 'interweave';
import ReactTimeAgo from 'react-time-ago';
import { Container, Card } from 'reactstrap';
import ArticleHeader from './style/ArticleHeader';
import './View/view.css';
import Footer from '../helpers/footer';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SubHeader from './subheader';

function AsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}

class ArticleBody extends Component {
	state = {
		loading: true,
		articleBody: null
	}

	getArticleBody = () =>{
		axios.get("/api/" + this.props.match.params.slug)
		.then(response =>
			this.setState({ articleBody: response.data })
		)
		.catch(err => console.log("Error from ArticleBody.js",err));
	}

	renderWholePage = () => {
		this.getArticleBody();
	}

	componentDidMount(){
		AsyncCall().then(() => this.setState({ loading: false }));
		this.renderWholePage();
	}

	render(){
		let articleBody = <Preloader />;
		if( !this.state.loading && this.state.articleBody ){
			articleBody = (
				<Container className="container">
	                  <Card className="card">
	                    <ArticleHeader>
				        <h1>
				          {this.state.articleBody.title}
				        </h1>
				        <p> By {this.state.articleBody.author_full_name}, Published <ReactTimeAgo date={this.state.articleBody.published_on}/> </p>
		                  <span/>
				     </ArticleHeader>

				      <br/>

				      <p style={{ textAlign: 'center' }}>
		                 <img class="img-fluid center" alt="..." src={this.state.articleBody.img1} style={{ marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }} />
		                </p>
				       <Interweave
				         tagName="div"
				         content={this.state.articleBody.short_description}
				        />
				       <br />
				       <Interweave
				         tagName="div"
				         content={this.state.articleBody.body}
				        />
				   </Card>
				</Container>
			);
		}
		console.log(articleBody);

		return (
			<div>
			{
			  (!this.state.loading && this.state.articleBody)?
			  <div>
			  <SubHeader />
			  {articleBody}
			  <Footer />
			  </div>
			  :
			  <Loader
			  style={{textAlign: 'center', marginTop: '70px'}}
                 type="Circles"
                 color="#00BFFF"
                 height={100}
                 width={100}
                 timeout={2000} //2 secs
                />
               }
			</div>
		)
	}
}

export default ArticleBody;