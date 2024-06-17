// src/pages/Home.js
import React from 'react';
import minhaFoto from '../assets/img/minhafoto.jpg';
import htmlLogo from '../assets/img/stacks/html-1.png';
import cssLogo from '../assets/img/stacks/css-1.png';
import jsLogo from '../assets/img/stacks/javascript-1.png';
import reactLogo from '../assets/img/stacks/react-1.png';
import bsLogo from '../assets/img/stacks/bootstrap-1.png';
import phpLogo from '../assets/img/stacks/php-1.png';
import javaLogo from '../assets/img/stacks/java-1.png';
import figmaLogo from '../assets/img/stacks/figma-1.png';
import vscodeLogo from '../assets/img/stacks/vsc-1.png';
import bgPhone from '../assets/img/bg-phone.jpg'
import bgHero from '../assets/img/new-bg.jpg'
import fotoAgenda from '../assets/img/fotos-projetos/agenda.png'
import fotoBuscador from '../assets/img/fotos-projetos/buscador.png'
import fotoCalc from '../assets/img/fotos-projetos/calculadora.png'
import fotoCarrinho from '../assets/img/fotos-projetos/carrinho.png'
import fotoConversor from '../assets/img/fotos-projetos/conversor-uni.png'
import fotoGitfinder from '../assets/img/fotos-projetos/gitfinder.png'
import fotoHamburguer from '../assets/img/fotos-projetos/hamburgueria.png'
import fotoMalagueta from '../assets/img/fotos-projetos/malagueta.png'
import fotoLogin from '../assets/img/fotos-projetos/login.png'
import fotoMoedas from '../assets/img/fotos-projetos/moedas.png'
import { Icon } from 'boxicons';


const Home = () => {
	return (
		<div>
			<div 
			id="hero" 
			className="hero route bg-image" 
			style={{ backgroundImage: `url(${bgHero})`}}>
				<div className="overlay-itro"></div>
				<div className="hero-content display-table">
					<div className="table-cell">
						<div className="container">
							<h1 className="hero-title mb-4">Eu sou o <span className="my-name">Nickolas Moura</span> 🤗</h1>
							<p className="hero-subtitle"><span className="typed"
								data-typed-items="Desenvolvedor Front-End Jr., Profissional certificado CSM e KMPI, Fã de Rock, Fã de Fórmula 1, Torcedor do São Paulo"></span>
							</p><br />
							<a className="download-cv" target="_blank" href="assets/docs/Nickolas Moura CV.pdf">Baixar CV</a>
						</div>
					</div>
				</div>
			</div>

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
														<img src={minhaFoto} className="img-fluid rounded b-shadow-a my-picture" alt="" />
													</div>
												</div>
												<div className="col-sm-6 col-md-7">
													<div className="about-info">
														<p><span className="title-s">Nome: </span> <span>Nickolas Mensatto Moura</span></p>
														<p><span className="title-s">Perfil: </span> <span>desenvolvedor front-end</span></p>
														<p><span className="title-s">Email: </span> <span><a href="mailto:nickmoura26@gmail.com"
															className="email-link">nickmoura26@gmail.com</a></span></p>
														<p><span className="title-s">Telefone: </span> <span><a href="https://wa.me/5515998000286"
															className="link-wpp">(15) 99800-0286</a></span></p>
														<p><span className="title-s">GitHub: </span> <span><a href="https://github.com/nickmoura"
															className="link-wpp">nickmoura</a></span></p>
														<p><span className="title-s">Gostos:</span> <span>códigos, idiomas, rock, futebol, Fórmula 1 </span>
														</p>
													</div>
												</div>
											</div>
											<div className="skill-mf">
												<p className="title-s">Habilidades</p>
												<div className="stacks-container">
													<div className="stack-info">
														<h6 className="stack-name">HTML</h6>
														<img src={htmlLogo} width="90" alt="HTML" className="stack-logo" />
													</div>
													<div className="stack-info">
														<h6 className="stack-name">CSS</h6>
														<img src={cssLogo} width="90" alt="CSS" className="stack-logo" />
													</div>
													<div className="stack-info">
														<h6 className="stack-name">JavaScript</h6>
														<img src={jsLogo} width="90" alt="JavaScript" className="stack-logo" />
													</div>
													<div className="stack-info">
														<h6 className="stack-name">React</h6>
														<img src={reactLogo} width="90" height="80" alt="React" className="stack-logo" />
													</div>
													<div className="stack-info">
														<h6 className="stack-name">Bootstrap</h6>
														<img src={bsLogo} width="90" height="80" alt="Boots"
															className="stack-logo" />
													</div>
													<div className="stack-info">
														<h6 className="stack-name">PHP</h6>
														<img src={phpLogo} width="90" height="80" alt="PHP" className="stack-logo" />
													</div>
													<div className="stack-info">
														<h6 className="stack-name">Java</h6>
														<img src={javaLogo} width="90" alt="Java" className="stack-logo" />
													</div>
													<div className="stack-info">
														<h6 className="stack-name">Figma</h6>
														<img src={figmaLogo} width="70" height="90" alt="Figma" className="stack-logo" />
													</div>
													<div className="stack-info">
														<h6 className="stack-name">VSCode</h6>
														<img src={vscodeLogo} width="90" alt="VSCode" className="stack-logo" />
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
													Há um ano, venho em transição de carreira, construindo projetos, portfólio e estudando. Tenho
													participação em programas como o Santander Coders e venho aprendendo muito sobre o fantástico
													mundo da programação todos os dias, descobrindo meu real interesse profissional e aprendendo com o
													que gosto.
												</p>
												<p className="lead">
													Meu inglês é fluente e meu espanhol é intermediário. Moro em Sorocaba, SP, tendo disponibilidade
													para trabalhar na capital.
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
									<a href={fotoMalagueta} data-gallery="portfolioGallery"
										className="portfolio-lightbox">
										<div className="work-img">
											<img src={fotoMalagueta} alt="" className="img-fluid work-pic" />
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
												<a href="https://www.wemalagueta.com.br" target="_blank"> <box-icon name='right-top-arrow-circle' type='solid' color='#3131b4' size="3.5rem"></box-icon></a>
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
								<a href={fotoCarrinho} data-gallery="portfolioGallery"
									className="portfolio-lightbox">
									<div className="work-img">
										<img src={fotoCarrinho} alt="" className="img-fluid work-pic" />
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
												<a href="/pages/carrinho.html" target="_blank"> <box-icon name='right-top-arrow-circle' type='solid' color='#3131b4' size="3.5rem"></box-icon></a>
											</div>
										</div>
									</div>
								</div>
								<h2 className="proj-code-text"><a href="https://github.com/nickmoura/portfolio/blob/main/pages/carrinho.html">
									&lt;Código disponível&gt; </a></h2>
							</div>
						</div>
						<div className="col-md-4">

							<div className="work-box">
								<div className="proj-type-cont">
									<h2 className="proj-type-text">Projeto de portfólio</h2>
								</div>
								<a href={fotoHamburguer} data-gallery="portfolioGallery"
									className="portfolio-lightbox">
									<div className="work-img">
										<img src={fotoHamburguer} alt="" className="img-fluid work-pic" />
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
												<a href="https://nickmoura.github.io/hamburgueria/" target="_blank"> <box-icon name='right-top-arrow-circle' type='solid' color='#3131b4' size="3.5rem"></box-icon></a>
											</div>
										</div>
									</div>
								</div>
								<h2 className="proj-code-text"><a href="https://github.com/nickmoura/hamburgueria" target="_blank"> &lt;Código
									disponível&gt; </a></h2>
							</div>
						</div>
						<div className="col-md-4">

							<div className="work-box">
								<div className="proj-type-cont">
									<h2 className="proj-type-text">Projeto de portfólio</h2>
								</div>
								<a href={fotoBuscador} data-gallery="portfolioGallery"
									className="portfolio-lightbox">
									<div className="work-img">
										<img src={fotoBuscador} alt="" className="img-fluid work-pic" />
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
												<a href="pages/buscador.html" target="_blank"> <box-icon name='right-top-arrow-circle' type='solid' color='#3131b4' size="3.5rem"></box-icon></a>
											</div>
										</div>
									</div>
								</div>
								<h2 className="proj-code-text"><a href="https://github.com/nickmoura/portfolio/blob/main/pages/buscador.html"
									target="_blank"> &lt;Código disponível&gt; </a></h2>
							</div>
						</div>
						<div className="col-md-4">

							<div className="work-box">
								<div className="proj-type-cont">
									<h2 className="proj-type-text">Projeto de portfólio</h2>
								</div>
								<a href={fotoCalc} data-gallery="portfolioGallery"
									className="portfolio-lightbox">
									<div className="work-img">
										<img src={fotoCalc} alt="" className="img-fluid work-pic" />
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
												<a href="pages/calculadora.html" target="_blank"> <box-icon name='right-top-arrow-circle' type='solid' color='#3131b4' size="3.5rem"></box-icon></a>
											</div>
										</div>
									</div>
								</div>
								<h2 className="proj-code-text"><a
									href="https://github.com/nickmoura/portfolio/blob/main/pages/calculadora.html" target="_blank">
									&lt;Código disponível&gt; </a></h2>
							</div>
						</div>
						<div className="col-md-4">

							<div className="work-box">
								<div className="proj-type-cont">
									<h2 className="proj-type-text">Projeto de portfólio</h2>
								</div>
								<a href={fotoConversor} data-gallery="portfolioGallery"
									className="portfolio-lightbox">
									<div className="work-img">
										<img src={fotoConversor} alt="" className="img-fluid work-pic" />
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
												<a href="pages/conversor.html" target="_blank"> <box-icon name='right-top-arrow-circle' type='solid' color='#3131b4' size="3.5rem"></box-icon></a>
											</div>
										</div>
									</div>
								</div>
								<h2 className="proj-code-text"><a href="https://github.com/nickmoura/portfolio/blob/main/pages/conversor.html"
									target="_blank"> &lt;Código disponível&gt; </a></h2>
							</div>
						</div>
						<div className="col-md-4">

							<div className="work-box">
								<div className="proj-type-cont">
									<h2 className="proj-type-text">Projeto de portfólio</h2>
								</div>
								<a href={fotoLogin} data-gallery="portfolioGallery" className="portfolio-lightbox">
									<div className="work-img">
										<img src={fotoLogin} alt="" className="img-fluid work-pic" />
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
												<a href="pages/login.html" target="_blank"><box-icon name='right-top-arrow-circle' type='solid' color='#3131b4' size="3.5rem"></box-icon></a>
											</div>
										</div>
									</div>
								</div>
								<h2 className="proj-code-text"><a href="https://github.com/nickmoura/portfolio/blob/main/pages/login.html"
									target="_blank"> &lt;Código disponível&gt; </a></h2>
							</div>
						</div>
						<div className="col-md-4">

							<div className="work-box">
								<div className="proj-type-cont">
									<h2 className="proj-type-text">Projeto de portfólio</h2>
								</div>
								<a href={fotoMoedas} data-gallery="portfolioGallery" className="portfolio-lightbox">
									<div className="work-img">
										<img src={fotoMoedas} alt="" className="img-fluid work-pic" />
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
												<a href="pages/moedas.html" target="_blank"> <box-icon name='right-top-arrow-circle' type='solid' color='#3131b4' size="3.5rem"></box-icon></a>
											</div>
										</div>
									</div>
								</div>
								<h2 className="proj-code-text"><a href="https://github.com/nickmoura/portfolio/blob/main/pages/moedas.html"
									target="_blank"> &lt;Código disponível&gt; </a></h2>
							</div>
						</div>
						<div className="col-md-4">

							<div className="work-box">
								<div className="proj-type-cont">
									<h2 className="proj-type-text">Projeto de portfólio</h2>
								</div>
								<a href={fotoGitfinder} data-gallery="portfolioGallery"
									className="portfolio-lightbox">
									<div className="work-img">
										<img src={fotoGitfinder} alt="" className="img-fluid work-pic" />
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
												<a href="https://github-finder-taupe-five.vercel.app/" target="_blank"> <box-icon name='right-top-arrow-circle' type='solid' color='#3131b4' size="3.5rem"></box-icon></a>
											</div>
										</div>
									</div>
								</div>
								<h2 className="proj-code-text"><a href="https://github.com/nickmoura/github_finder" target="_blank">
									&lt;Código disponível&gt; </a></h2>
							</div>
						</div>
						<div className="col-md-4">

							<div className="work-box">
								<div className="proj-type-cont">
									<h2 className="proj-type-text">Projeto de portfólio</h2>
								</div>
								<a href={fotoAgenda} data-gallery="portfolioGallery" className="portfolio-lightbox">
									<div className="work-img">
										<img src={fotoAgenda} alt="" className="img-fluid work-pic" />
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
												<a href="pages/agenda.html" target="_blank"> <box-icon name='right-top-arrow-circle' type='solid' color='#3131b4' size="3.5rem"></box-icon></a>
											</div>
										</div>
									</div>
								</div>
								<h2 className="proj-code-text"><a href="https://github.com/nickmoura/portfolio/blob/main/pages/agenda.html"
									target="_blank"> &lt;Código disponível&gt; </a></h2>
							</div>
						</div>

					</div>
				</div>
			</section>
			
			<section id="contact" className="paralax-mf footer-paralax bg-image sect-mt4 route"
				style={{backgroundImage: `url(${bgPhone})`}}>
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
    </div >
  );
};

export default Home;