import styled from 'styled-components';

const ArticleHeader = styled.div`
  h1 {
    color: #3e465b;
    font-size: 40px;
    line-height: 1.5;
    margin: 0;
    padding: 0 30px;
    text-align: center;
  }
  h1:hover{
    color: dodgerblue;
  }
  p {
    color: #666d71;
    display: block;
    font-size: 1.0em;
    margin: 0;
    text-align: center;
  }
  span {
    background: #9c9da3;
    display: block;
    margin: 40px auto;
  }
`;

export default ArticleHeader;