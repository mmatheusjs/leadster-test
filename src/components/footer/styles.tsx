import styled from "styled-components";

import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle";

import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";

import { FacebookWithCircle } from "@styled-icons/entypo-social/FacebookWithCircle";

export const InstagramIcon = styled(InstagramWithCircle)`
  width: 35px;
  height: 35px;
  color: #d9dadf;
`;

export const LinkedinIcon = styled(LinkedinWithCircle)`
  width: 35px;
  height: 35px;
  color: #d9dadf;
`;

export const FacebookIcon = styled(FacebookWithCircle)`
  width: 35px;
  height: 35px;
  color: #d9dadf;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10%;

  .image-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    margin-bottom: 20px;
    img {
      object-fit: contain;
    }
    span {
      font-size: 16px;
      color: #8793aa;
    }
  }
`;
export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LinksBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p.title {
    color: #29354e;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0px;
    li {
      color: #8793aa;
      margin-bottom: 15px;
    }
  }

  div.social-media-icons {
    svg {
      margin-right: 10px;
    }
  }
`;

export const RightsAndAddress = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding: 30px 20%;
  border-top: solid 1px #c8d4dd;

  div.rights {
    p {
      font-size: 12px;
      margin: 0px;
      color: #657797;
      span {
        color: #2c83fb;
      }
    }
  }

  div.address {
    p {
      margin: 0px;
      font-size: 12px;
      color: #8793aa;
    }
  }
`;
