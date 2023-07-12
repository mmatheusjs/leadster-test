import {
  Footer,
  LinksContainer,
  LinksBox,
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
  CompanyInfo,
  RightsAndAddress,
} from "./styles";

import Image from "next/image";

import logo from "../../../public/images/logo.png";

const FooterComponent = () => {
  return (
    <Footer>
      <CompanyInfo>
        <div className="image-holder">
          <Image src={logo} alt="logo" width={200} height={80} />
          <span>Transformando visitantes em clientes.</span>
        </div>

        <LinksContainer>
          <LinksBox>
            <p className="title">Links Principais</p>
            <ul>
              <li>Home</li>
              <li>Ferramenta</li>
              <li>Preços</li>
              <li>Contato</li>
            </ul>
          </LinksBox>
          <LinksBox>
            <p className="title">Cases</p>
            <ul>
              <li>Geração de Leads B2B</li>
              <li>Geração de Leads em Software</li>
              <li>Geração de Leads em Imobiliária</li>
              <li>Cases de sucesso</li>
            </ul>
          </LinksBox>
          <LinksBox>
            <p className="title">Materiais</p>
            <ul>
              <li>Blog</li>
              <li>Parceria com Agências</li>
              <li>Guia Definitivo do Marketing</li>
              <li>Materiais Gratuitos</li>
            </ul>
          </LinksBox>
          <LinksBox>
            <p className="title">Siga a Leadster</p>
            <div className="social-media-icons">
              <LinkedinIcon />
              <FacebookIcon />
              <InstagramIcon />
            </div>
            <ul>
              <li>
                <span>Email:</span> contato@leadster.com.br
              </li>
              <li>
                <span>Telefone:</span> (42) 98828-9851
              </li>
            </ul>
          </LinksBox>
        </LinksContainer>
      </CompanyInfo>
      <RightsAndAddress>
        <div className="rights">
          <p>
            Copyright C 2015-2022 Todos os direitos reservados |{" "}
            <span>Leadster</span>
          </p>
        </div>
        <div className="address">
          <p>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
            Termos de uso
          </p>
        </div>
      </RightsAndAddress>
    </Footer>
  );
};

export default FooterComponent;
