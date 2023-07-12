import React, { useState } from "react";

import {
  CTAContainer,
  Filter,
  Gallery,
  PageContainer,
  Pagination,
  PrimaryBanner,
  VideosContainer,
  ModalVideoPlayer,
  ModalBody,
  ModalHeader,
  VideoPlayer,
  DescriptionBox,
  DownloadsBox,
  DownloadIcon,
} from "../styles/index";

import FooterComponent from "../components/footer";
import HeaderComponent from "../components/header";

import Image from "next/image";
import logo from "../../public/images/logo.png";
import assetHeader from "../../public/images/asset-header.png";
import thumbnail from "../../public/images/thumbnail.png";
import comparativoCta from "../../public/images/comparativo_img_CTA.png";
import seloRD from "../../public/images/selo_RD.png";
import noCard from "../../public/images/no-card-dark.webp";
import rating from "../../public/images/rating.webp";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const videos = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <PageContainer>
      <HeaderComponent />
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
              <div
                className="gallery-item"
                key={index}
                onClick={() => setShowModal(true)}
              >
                <Image src={thumbnail} alt="logo" width={200} height={100} />
                <p>Como aumentar sua gertacao de leads feat Traktor</p>
              </div>
            );
          })}
          <ModalVideoPlayer className={showModal ? "modal active" : "modal"}>
            <div className="backdrop" onClick={() => setShowModal(false)}>
              <ModalBody>
                <ModalHeader>
                  <div className="blue-line"></div>
                  <div className="title-box">
                    <p className="title">
                      <span>Webinar:</span> Como aumentar sua <br /> Geração de
                      Leads feat. Traktor
                    </p>
                    <span
                      className="close-button"
                      onClick={() => setShowModal(false)}
                    >
                      X
                    </span>
                  </div>
                </ModalHeader>
                <VideoPlayer>
                  <iframe
                    height="310"
                    src="https://www.youtube.com/embed/SNqC88vk2bg"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </VideoPlayer>

                <DescriptionBox>
                  <p className="subtitle">Descrição</p>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi fermentum sapien non massa efficitur ornare. Aenean
                    luctus dictum aliquam. Nulla et ipsum non mi ultricies
                    luctus. In vestibulum quam eget pulvinar molestie. Cras
                    interdum justo ac mauris blandit ullamcorper eget ut turpis
                  </p>
                </DescriptionBox>

                <DownloadsBox>
                  <p className="subtitle">Downloads</p>
                  <div className="buttons-box">
                    <div className="spreadsheet">
                      <DownloadIcon /> <span>Spreadsheet.xls</span>
                    </div>
                    <div className="document">
                      <DownloadIcon />
                      <span>Document.doc</span>
                    </div>
                    <div className="presentation">
                      <DownloadIcon />
                      <span>Presentation.ppt</span>
                    </div>
                  </div>
                </DownloadsBox>
              </ModalBody>
            </div>
          </ModalVideoPlayer>
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
      <FooterComponent />
    </PageContainer>
  );
}
