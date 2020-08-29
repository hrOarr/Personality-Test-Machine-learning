import React, { Component } from 'react';

import AxiosInstance from '../../AxiosInstance';
import axios from 'axios';
import Preloader from '../helpers/preloader';
import Articles from "./View/Articles";
import Pagination from '@material-ui/lab/Pagination';
import Footer from '../helpers/footer';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SubHeader from './subheader';

function AsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}


class ArticleList extends Component {
	
	state = {
		articles : [],
		loading : true
	}

	componentDidMount(){

		AsyncCall().then(() => this.setState({ loading: false }));

		axios.get("/api/")
		.then(response => 
			this.setState({ articles: response.data })
		)
		.catch(err => console.log("Error from ArticleList.js", err));
	}

	render(){
		let articleList = <Preloader />;
		if( !this.state.loading && this.state.articles ){
			articleList = <Articles articleList={this.state.articles} />;
		}

		return (
		     <div>
		       {
		       	(!this.state.loading && this.state.articles)?
		       <div>
		       <SubHeader />
		       {articleList}
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
};

export default ArticleList;