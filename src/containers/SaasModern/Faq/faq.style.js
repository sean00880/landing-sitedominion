import styled from 'styled-components';

const FaqWrapper = styled.div`
  .accordion_item {
    border: 1px solid #eff2f5;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  .accordion_title {
    padding: 23px 30px;
    @media (max-width: 575px) {
      padding: 15px 20px;
    }
  }

  .accordion_body {
    padding: 0 30px 23px 30px;
    @media (max-width: 575px) {
      padding: 0 20px 15px 20px;
    }
  }
.content_holder{
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'smooch sans';
  font-size: 25px;
}
  .contact_left textarea,
.contact_left input[type="text"],
.contact_left input[type="email"]{
	width: 100%;
	display: block;
	border-radius: 3px;
	border: 1px solid #222;
	color: #565656;
	outline: none;
	height: 45px;
	letter-spacing: 2px;
}
.contact_left textarea:focus,
.contact_left input[type="text"]:focus,
.contact_left input[type="email"]:focus{
	border-color: #444;
}
.contact_left .item{
	margin-bottom: 20px;
}
.contact_left .item:last-child{
	margin-bottom: 0;
}
.contact_left textarea{
	min-height: 200px;
	color:#565656;
}
.contact_left a:hover{
	background-color: #899c87;
}
.contact_left a{
	display: inline-block;
	height: 44px;
	line-height: 44px;
	padding: 0 20px;
	background-color: #586857;
	color: #fff;
	border-radius: 3px;
	text-decoration: none;
}
.contact_left a:focus{
	outline: 1px dashed #444;
}

.button a{
  font-size: 21px;
  border-radius: 4px;
  padding-left: 22px;
  padding-right: 22px;
  background: #394477;
}

.button a:hover{;
  background: #030401;
}

@media(max-width: 1040px){
	[data-nav-skin="transdark"] .industify_fn_header{display: none;
	}
	.contact_holder{flex-wrap: wrap;}
	.contact_holder .contact_right{width: 100%;padding-left: 0;}
	.contact_holder .contact_left{width: 100%;margin-bottom: 20px;}
}
`;

export default FaqWrapper;
