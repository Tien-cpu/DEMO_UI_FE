import React from 'react'
import { Typography, Paper, Avatar, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
})

function HomePage(props) {
	const { classes } = props

	return (
		<main className={classes.main}>
			<head>
				<meta charSet='utf-8'/>
				<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<meta name="viewport" content="initial-scale=1, maximum-scale=1"/>
				<title>Home Page</title>
				<meta name="keywords" content=""/>
				<meta name="description" content=""/>
				<meta name="author" content=""/>
				<link rel="stylesheet" href="css/bootstrap.min.css"></link>
				<link rel="stylesheet" href="css/style.css"></link>
				<link rel="stylesheet" href="css/responsive.css"></link>
				<link rel="icon" href="images/fevicon.png" type="image/gif"></link>
				<link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css"></link>
				<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
				<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
				<meta name="description" content="Free HTML5 Website Template by freehtml5.co" />
				<meta name="keywords" content="free website templates, free html5, free template, free bootstrap, free website template, html5, css3, mobile first, responsive" />
				<meta name="author" content="freehtml5.co" />
				<meta property="og:title" content=""/>
				<meta property="og:image" content=""/>
				<meta property="og:url" content=""/>
				<meta property="og:site_name" content=""/>
				<meta property="og:description" content=""/>
				<meta name="twitter:title" content="" />
				<meta name="twitter:image" content="" />
				<meta name="twitter:url" content="" />
				<meta name="twitter:card" content="" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700"></link>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:300,400"></link>
				<link rel="stylesheet" href="css/animate.css"></link>
				<link rel="stylesheet" href="css/icomoon.css"></link>
				<link rel="stylesheet" href="css/bootstrap.css"></link>
				<link rel="stylesheet" href="css/magnific-popup.css"></link>
				<link rel="stylesheet" href="css/owl.carousel.min.css"></link>
				<link rel="stylesheet" href="css/owl.theme.default.min.css"></link>
				<link rel="stylesheet" href="css/flexslider.css"></link>
				<link rel="stylesheet" href="css/pricing.css"></link>
				<link rel="stylesheet" href="css/style.css"></link>
				<script src="js/modernizr-2.6.2.min.js"></script>
			</head>
			<nav class="fh5co-nav" role="navigation">
				<div class="top">
					<div class="container">
						<div class="row">
							<div class="col-xs-12 text-right">
								<p class="site">https://www.tiktok.com/@vuongquocfpt</p>
								<p class="num">Hello: Ti???n</p>
								<ul class="fh5co-social">
									<li><a href="#"><i class="icon-facebook2"></i></a></li>
									<li><a href="#"><i class="icon-twitter2"></i></a></li>
									<li><a href="#"><i class="icon-dribbble2"></i></a></li>
									<li><a href="#"><i class="icon-github"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="top-menu">
					<div class="container">
						<div class="row">
							<div class="col-xs-2">
								<div id="fh5co-logo"><a href="/HomePage"><i class="icon-study"></i>SCORM.EDU<span>.</span></a></div>
							</div>
							<div class="col-xs-10 text-right menu-1">
								<ul>
									<li class="active"><a href="/HomePage">Home</a></li>
									<li><a href="/MySuorcePage">Courses</a></li>
									<li><a href="/UploadPage" >Upload</a></li>
									<li><a >FeedBack</a></li>
									<li><a >About</a></li>
									<li class="has-dropdown">
										<a href="blog.html">Blog</a>
										<ul class="dropdown">
											<li><a href="#">Web Design</a></li>
											<li><a href="#">eCommerce</a></li>
											<li><a href="#">Branding</a></li>
											<li><a href="#">API</a></li>
										</ul>
									</li>
									<li><a >Contact</a></li>
									<li><a onClick={logout}>Logout</a></li>
									{/* <li><a onClick={goLogin}>Login</a></li> */}
								</ul>
							</div>
						</div>
						
					</div>
				</div>
			</nav>
			<div class="content">
				<div class="container">
				<h2 class="mb-5">Package Listing Uploaded Packages</h2>
				<div class="table-responsive">
					<table class="table custom-table">
					<thead>
						<tr>
						<th scope="col">ModuleID</th>
						<th scope="col">Title</th>
						<th scope="col">Date Uploaded</th>
						<th scope="col">In study area?</th>
						<th scope="col">Details</th>
						</tr>
					</thead>
					<tbody>
						<tr scope="row">
							<td>1392</td>
							<td>CH??NH S??CH TH????NG M???I VIETJET</td>
							<td>1/14/2022 9:56:35 PM</td>
							<td>yes</td>
							<td>Package Details</td>
						</tr>
						<tr>
							<td>4616</td>
							<td>Dangerous Goods Training - Unit 1: Applicability</td>
							<td>1/14/2022 9:56:35 PM</td>
							<td>yes</td>
							<td>Package Details</td>
						</tr>
						<tr>
							<td>9841</td>
							<td>SL360 LMS SCORM 2004</td>
							<td>1/14/2022 9:56:35 PM</td>
							<td>yes</td>
							<td>Package Details</td>
						</tr>
						<tr>
							<td>9548</td>
							<td>Proyecto final - Tecnologias</td>
							<td>1/14/2022 9:56:35 PM</td>
							<td>yes</td>
							<td>Package Details</td>
						</tr>
					</tbody>
					</table>
				</div>
				</div>
			</div>
		</main>
	)

	function logout() {
		// await firebase.logout()
		props.history.push('/login')
	}

	function goLogin() {
		// await firebase.logout()
		props.history.push('/login')
	}
}

export default withStyles(styles)(HomePage)