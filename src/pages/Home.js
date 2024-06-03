// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div>
<main id="main">

<section id="about" className="about-mf sect-pt4 route">
  <div className="container">
	<div className="row">
	  <div className="col-sm-12">
		<div className="box-shadow-full">
		  <div className="row">
			<div className="col-md-6">
			  <div className="row">
				<div className="col-sm-6 col-md-5">
				  <div className="about-img">
					<img src="assets/img/eu.jpeg" className="img-fluid rounded b-shadow-a" alt="" />
				  </div>
				</div>
				<div className="col-sm-6 col-md-7">
				  <div className="about-info">
					<p><span className="title-s">Nome: </span> <span>Nickolas Mensatto Moura</span></p>
					<p><span className="title-s">Profile: </span> <span>front-end developer</span></p>
					<p><span className="title-s">Email: </span> <span><a href="mailto:nickmoura26@gmail.com"
						  className="email-link">nickmoura26@gmail.com</a></span></p>
					<p><span className="title-s">Telefone: </span> <span><a href="https://wa.me/5515998000286"
						  className="link-wpp">(15) 99800-0286</a></span></p>
				  </div>
				</div>
			  </div>
			  <div className="skill-mf">
				<p className="title-s">Habilidades</p>
				<div className="stacks-container">
				  <div className="stack-info">
					<h6 className="stack-name">HTML</h6>
					<img src="assets/img/stacks/html-1.png" width="70" alt="HTML" className="stack-logo" />
				  </div>
				  <div className="stack-info">
					<h6 className="stack-name">CSS</h6>
					<img src="assets/img/stacks/css-1.png" width="70" alt="CSS" className="stack-logo" />
				  </div>
				  <div className="stack-info">
					<h6 className="stack-name">JavaScipt</h6>
					<img src="assets/img/stacks/javascript-1.png" width="70" alt="JavaScript" className="stack-logo" />
				  </div>
				  <div className="stack-info">
					<h6 className="stack-name">React</h6>
					<img src="assets/img/stacks/react-1.png" width="70" height="70" alt="React" className="stack-logo" />
				  </div>
				  <div className="stack-info">
					<h6 className="stack-name">Bootstrap</h6>
					<img src="assets/img/stacks/bootstrap-1.png" width="90" height="70" alt="Boots"
					  className="stack-logo" />
				  </div>
				  <div className="stack-info">
					<h6 className="stack-name">PHP</h6>
					<img src="assets/img/stacks/php-1.png" width="90" height="70" alt="PHP" className="stack-logo" />
				  </div>
				  <div className="stack-info">
					<h6 className="stack-name">Java</h6>
					<img src="assets/img/stacks/java-1.png" width="70" alt="Java" className="stack-logo" />
				  </div>
				  <div className="stack-info">
					<h6 className="stack-name">Figma</h6>
					<img src="assets/img/stacks/figma-1.png" width="50" height="70" alt="Figma" className="stack-logo" />
				  </div>
				  <div className="stack-info">
					<h6 className="stack-name">VSCode</h6>
					<img src="assets/img/stacks/vsc-1.png" width="70" alt="VSCode" className="stack-logo" />
				  </div>
				</div>
			  </div>
			</div>
			<div className="col-md-6">
			  <div className="about-me pt-4 pt-md-0">
				<div className="title-box-2">
				  <h5 className="title-left">
					Sobre mim
				  </h5>
				</div>
				<p className="lead">
				  Sou desenvolvedor Front-end nível júnior com conhecimento em React.js, JavaScript, Styled
				  Components. Amo
				  aprender na prática.
				</p>
				<p className="lead">
				  Possuo certificação em Metodologias Ágeis (CSM e KMPI) e experiência em
				  trabalhar com esse tipo de projeto. Tenho ainda experiência com equipes multinacionais e
				  multiculturais. Venho da área de humanas - sou formado em Relações Internacionais. Estou cursando
				  Análise e Desenvolvimento de Sistemas.
				</p>
				<p className="lead">
				  Meu inglês é fluente e meu espanhol é intermediário. Moro em Sorocaba, SP.
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</section>

<section id="work" className="portfolio-mf sect-pt4 route">
  <div className="container">
	<div className="row">
	  <div className="col-sm-12">
		<div className="title-box text-center">
		  <h3 className="portfolio-title title-a">
			Portfolio
		  </h3>
		  <p className="subtitle-a">
			Aqui estão meus projetos.
		  </p>
		  <div className="line-mf"></div>
		</div>
	  </div>
	</div>
	<div className="row">
	  <div className="col-md-4">
		<div className="work-box">
		  <div className="proj-type-cont">
			<h2 className="proj-type-text">Projeto profissional</h2>
		  </div>
		  <a href="assets/img/fotos-projetos/malagueta.png" data-gallery="portfolioGallery"
			className="portfolio-lightbox">
			<div className="work-img">
			  <img src="assets/img/fotos-projetos/malagueta.png" alt="" className="img-fluid" />
			</div>
		  </a>
		  <div className="work-content">

			<div className="row">
			  <div className="col-sm-8">
				<h2 className="w-title">Malagueta</h2>
				<div className="w-more">
				  <span className="w-ctegory">HTML, CSS, Bootstrap e JavaScript</span> / <span className="w-date">Abril de
					2024</span>
				</div>
			  </div>
			  <div className="col-sm-4">
				<div className="w-like">
				  <a href="https://www.wemalagueta.com.br" target="_blank"> <span
					  className="bi bi-plus-circle"></span></a>
				</div>
			  </div>
			</div>
		  </div>
		  <h2 className="proj-code-text"> &lt;Código reservado&gt; </h2>
		</div>
	  </div>
	  <div className="col-md-4">

		<div className="work-box">
		  <div className="proj-type-cont">
			<h2 className="proj-type-text">Projeto de portfólio</h2>
		  </div>
		  <a href="assets/img/fotos-projetos/carrinho.png" data-gallery="portfolioGallery"
			className="portfolio-lightbox">
			<div className="work-img">
			  <img src="assets/img/fotos-projetos/carrinho.png" alt="" className="img-fluid" />
			</div>
		  </a>
		  <div className="work-content">
			<div className="row">
			  <div className="col-sm-8">
				<h2 className="w-title">Carrinho de compras</h2>
				<div className="w-more">
				  <span className="w-ctegory">HTML, CSS, JavScript e Bootstrap</span> / <span className="w-date">Maio de
					2024</span>
				</div>
			  </div>
			  <div className="col-sm-4">
				<div className="w-like">
				  <a href="/pages/carrinho.html" target="_blank"> <span className="bi bi-plus-circle"></span></a>
				</div>
			  </div>
			</div>
		  </div>
		  <h2 className="proj-code-text"><a href=""> &lt;Código reservado&gt; </a></h2>
		</div>
	  </div>
	  <div className="col-md-4">

		<div className="work-box">
		  <div className="proj-type-cont">
			<h2 className="proj-type-text">Projeto de portfólio</h2>
		  </div>
		  <a href="assets/img/fotos-projetos/hamburgueria.png" data-gallery="portfolioGallery"
			className="portfolio-lightbox">
			<div className="work-img">
			  <img src="assets/img/fotos-projetos/hamburgueria.png" alt="" className="img-fluid" />
			</div>
		  </a>
		  <div className="work-content">
			<div className="row">
			  <div className="col-sm-8">
				<h2 className="w-title">PrimeBite Burger</h2>
				<div className="w-more">
				  <span className="w-ctegory">HTML, CSS, Bootstrap</span> / <span className="w-date">Maio de
					2024</span>
				</div>
			  </div>
			  <div className="col-sm-4">
				<div className="w-like">
				  <a href="https://nickmoura.github.io/hamburgueria/" target="_blank"> <span
					  className="bi bi-plus-circle"></span></a>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	  <div className="col-md-4">

		<div className="work-box">
		  <div className="proj-type-cont">
			<h2 className="proj-type-text">Projeto de portfólio</h2>
		  </div>
		  <a href="assets/img/fotos-projetos/buscador.png" data-gallery="portfolioGallery"
			className="portfolio-lightbox">
			<div className="work-img">
			  <img src="assets/img/fotos-projetos/buscador.png" alt="" className="img-fluid" />
			</div>
		  </a>
		  <div className="work-content">
			<div className="row">
			  <div className="col-sm-8">
				<h2 className="w-title">Buscador de CEP</h2>
				<div className="w-more">
				  <span className="w-ctegory">HTML, CSS e JavaScript com API</span> / <span className="w-date">Março de
					2024</span>
				</div>
			  </div>
			  <div className="col-sm-4">
				<div className="w-like">
				  <a href="pages/buscador.html" target="_blank"> <span className="bi bi-plus-circle"></span></a>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	  <div className="col-md-4">

		<div className="work-box">
		  <div className="proj-type-cont">
			<h2 className="proj-type-text">Projeto de portfólio</h2>
		  </div>
		  <a href="assets/img/fotos-projetos/calculadora.png" data-gallery="portfolioGallery"
			className="portfolio-lightbox">
			<div className="work-img">
			  <img src="assets/img/fotos-projetos/calculadora.png" alt="" className="img-fluid" />
			</div>
		  </a>
		  <div className="work-content">
			<div className="row">
			  <div className="col-sm-8">
				<h2 className="w-title">Calculadora</h2>
				<div className="w-more">
				  <span className="w-ctegory">HTML, CSS e JavaScript</span> / <span className="w-date">Fevereiro de
					2024</span>
				</div>
			  </div>
			  <div className="col-sm-4">
				<div className="w-like">
				  <a href="pages/calculadora.html" target="_blank"> <span className="bi bi-plus-circle"></span></a>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	  <div className="col-md-4">

		<div className="work-box">
		  <div className="proj-type-cont">
			<h2 className="proj-type-text">Projeto de portfólio</h2>
		  </div>
		  <a href="assets/img/fotos-projetos/conversor-uni.png" data-gallery="portfolioGallery"
			className="portfolio-lightbox">
			<div className="work-img">
			  <img src="assets/img/fotos-projetos/conversor-uni.png" alt="" className="img-fluid" />
			</div>
		  </a>
		  <div className="work-content">
			<div className="row">
			  <div className="col-sm-8">
				<h2 className="w-title">Conversor de unidades</h2>
				<div className="w-more">
				  <span className="w-ctegory">HTML, CSS e JavaScript</span> / <span className="w-date">Fevereiro de
					2024</span>
				</div>
			  </div>
			  <div className="col-sm-4">
				<div className="w-like">
				  <a href="pages/conversor.html" target="_blank"> <span className="bi bi-plus-circle"></span></a>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	  <div className="col-md-4">

		<div className="work-box">
		  <div className="proj-type-cont">
			<h2 className="proj-type-text">Projeto de portfólio</h2>
		  </div>
		  <a href="assets/img/fotos-projetos/login.png" data-gallery="portfolioGallery" className="portfolio-lightbox">
			<div className="work-img">
			  <img src="assets/img/fotos-projetos/login.png" alt="" className="img-fluid" />
			</div>
		  </a>
		  <div className="work-content">
			<div className="row">
			  <div className="col-sm-8">
				<h2 className="w-title">Tela de Login</h2>
				<div className="w-more">
				  <span className="w-ctegory">HTML, CSS e JavaScript</span> / <span className="w-date">Fevereiro de
					2024</span>
				</div>
			  </div>
			  <div className="col-sm-4">
				<div className="w-like">
				  <a href="pages/login.html" target="_blank"> <span className="bi bi-plus-circle"></span></a>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	  <div className="col-md-4">

		<div className="work-box">
		  <div className="proj-type-cont">
			<h2 className="proj-type-text">Projeto de portfólio</h2>
		  </div>
		  <a href="assets/img/fotos-projetos/moedas.png" data-gallery="portfolioGallery" className="portfolio-lightbox">
			<div className="work-img">
			  <img src="assets/img/fotos-projetos/moedas.png" alt="" className="img-fluid" />
			</div>
		  </a>
		  <div className="work-content">
			<div className="row">
			  <div className="col-sm-8">
				<h2 className="w-title">Conversor de moedas</h2>
				<div className="w-more">
				  <span className="w-ctegory">HTML, CSS e JavaScript com API</span> / <span className="w-date">Fevereiro de
					2024</span>
				</div>
			  </div>
			  <div className="col-sm-4">
				<div className="w-like">
				  <a href="pages/moedas.html" target="_blank"> <span className="bi bi-plus-circle"></span></a>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	  <div className="col-md-4">

		<div className="work-box">
		  <div className="proj-type-cont">
			<h2 className="proj-type-text">Projeto de portfólio</h2>
		  </div>
		  <a href="assets/img/fotos-projetos/gitfinder.png" data-gallery="portfolioGallery"
			className="portfolio-lightbox">
			<div className="work-img">
			  <img src="assets/img/fotos-projetos/gitfinder.png" alt="" className="img-fluid" />
			</div>
		  </a>
		  <div className="work-content">
			<div className="row">
			  <div className="col-sm-8">
				<h2 className="w-title">Buscador de usuários do GitHub</h2>
				<div className="w-more">
				  <span className="w-ctegory">React, HTML, CSS e TypeScript com API</span> / <span className="w-date">Abril
					de
					2024</span>
				</div>
			  </div>
			  <div className="col-sm-4">
				<div className="w-like">
				  <a href="https://github-finder-taupe-five.vercel.app/" target="_blank"> <span
					  className="bi bi-plus-circle"></span></a>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	  <div className="col-md-4">

		<div className="work-box">
		  <div className="proj-type-cont">
			<h2 className="proj-type-text">Projeto de portfólio</h2>
		  </div>
		  <a href="assets/img/fotos-projetos/agenda.png" data-gallery="portfolioGallery" className="portfolio-lightbox">
			<div className="work-img">
			  <img src="assets/img/fotos-projetos/agenda.png" alt="" className="img-fluid" />
			</div>
		  </a>
		  <div className="work-content">
			<div className="row">
			  <div className="col-sm-8">
				<h2 className="w-title">Agenda de eventos</h2>
				<div className="w-more">
				  <span className="w-ctegory">HTML, CSS e JavaScript</span> / <span className="w-date">Março de 2024</span>
				</div>
			  </div>
			  <div className="col-sm-4">
				<div className="w-like">
				  <a href="pages/agenda.html" target="_blank"> <span className="bi bi-plus-circle"></span></a>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>

	</div>
  </div>
</section>

<section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route"
  style="background-image: url(assets/img/wallhaven-nrzx8j.jpg)">
  <div className="overlay-mf"></div>
  <div className="container">
	<div className="row">
	  <div className="col-sm-12">
		<div className="contact-mf">
		  <div id="contact" className="box-shadow-full">
			<div className="row">
			  <div>
				<div className="title-box-2 pt-4 pt-md-0">
				  <h5 className="title-left">
					Entrar em contato
				  </h5>
				</div>
				<div className="more-info">
				  <p className="lead">
					Converse comigo pelos canais abaixo. Estou ansioso pelo seu contato!
				  </p>
				</div>
				<div className="socials">
				  <ul>
					<li><a href="mailto:nickmoura26@gmail.com"><span className="ico-circle"><i
							className="bi bi-envelope-at"></i></span></a></li>
					<li><a href="https://wa.me/5515998000286"><span className="ico-circle"><i
							className="bi bi-whatsapp"></i></span></a></li>
					<li><a href="https://linkedin.com/in/nickmoura"><span className="ico-circle"><i
							className="bi bi-linkedin"></i></span></a></li>
					<li><a href="https://github.com/nickmoura"><span className="ico-circle"><i
							className="bi bi-github"></i></span></a></li>
				  </ul>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</section>

</main>
    </div>
  );
};

export default Home;