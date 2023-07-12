import {
  CTAContainer,
  Filter,
  Footer,
  Gallery,
  Header,
  PageContainer,
  Pagination,
  PrimaryBanner,
  VideosContainer,
} from "../styles/index";

import Image from "next/image";
import logo from "../../public/images/logo.png";
import assetHeader from "../../public/images/asset-header.png";
import thumbnail from "../../public/images/thumbnail.png";
import comparativoCta from "../../public/images/comparativo_img_CTA.png";
import seloRD from "../../public/images/selo_RD.png";
import noCard from "../../public/images/no-card-dark.webp";
import rating from "../../public/images/rating.webp";

export default function Home() {
  const videos = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <PageContainer>
      <Header>
        <div className="image-holder">
          <Image src={logo} alt="logo" width={200} height={80} />
        </div>
      </Header>
      <PrimaryBanner>
        <span>WEBNARS EXCLUSIVOS</span>
        <h2>Menos conversinha,</h2>
        <div>
          <h1>Mais Conversão</h1>
          <Image src={assetHeader} alt="leadster-asset" />
        </div>

        <p>
          Conheça as estrategias que <strong>mudaram o jogo</strong> e como
          aplicá-las no seu negócio
        </p>
      </PrimaryBanner>
      <VideosContainer>
        <Filter>
          <div className="label-container">
            <button>Agencias</button>
            <button>Agencias</button>
            <button>Agencias</button>
            <button className="selected">Agencias</button>
            <button>Agencias</button>
          </div>
          <div className="order-container">
            <p>Ordernar Por</p>
            <select name="filter" id="filter">
              <option value="data">Data de Publicação</option>
              <option value="views">Visualizacoes</option>
            </select>
          </div>
        </Filter>
        <Gallery>
          {videos.map((item, index) => {
            return (
              <div className="gallery-item" key={index}>
                <Image src={thumbnail} alt="logo" width={200} height={100} />
                <p>Como aumentar sua gertacao de leads feat Traktor</p>
              </div>
            );
          })}
        </Gallery>
        <Pagination>
          <p>Pagina</p>
          <button>1</button>
          <button>2</button>
          <button className="selected">3</button>
          <button>4</button>
        </Pagination>
      </VideosContainer>
      <CTAContainer>
        <div className="cta-image">
          <Image
            src={comparativoCta}
            alt="Leads generation with leadster"
            width={640}
            height={588}
          />
        </div>
        <div className="cta-box">
          <div className="cta-text">
            <p>Pronto para triplicar sua</p>
            <p>
              <strong>Geração de Leads?</strong>
            </p>
            <span>
              Criação e ativação em <strong>4 minutos.</strong>
            </span>
          </div>
          <div className="cta-button-box">
            <button className="cta-button">VER DEMONSTRAÇÃO</button>
            <Image src={seloRD} alt="RD stamp" />
          </div>
          <div className="cta-details">
            <Image src={noCard} alt="No card" className="card-icon" />{" "}
            <p>Não é necessário Cartão de Crédito | </p>
            <Image src={rating} alt="Rating" className="ratings-icon" />
            <p>
              <strong>4.9</strong>/5 média de satisfação
            </p>
          </div>
        </div>
      </CTAContainer>
      <Footer>TODO Footer</Footer>
    </PageContainer>
  );
}
