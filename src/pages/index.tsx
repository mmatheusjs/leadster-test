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
import thumbnail from "../../public/images/thumbnail.png";

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
        <h2>Menos conversinha</h2>
        <h1>Mais Conversão</h1>
        <p>
          Conheça as estrategias que mudaram o jogo e como aplicá-las no seu
          negócio
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
          <p>Cards container</p>
        </Gallery>
        <Pagination>
          <p>Pagina</p>
          <button>1</button>
          <button>2</button>
          <button className="selected">3</button>
          <button>4</button>
        </Pagination>
      </VideosContainer>
      <CTAContainer>TODO CTAContainer</CTAContainer>
      <Footer>TODO Footer</Footer>
    </PageContainer>
  );
}
