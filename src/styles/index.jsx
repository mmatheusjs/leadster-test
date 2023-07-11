import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;

  .image-holder {
    height: 100px;
    img {
      object-fit: contain;
    }
  }
`;

export const PrimaryBanner = styled.div`
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 25px;

  span {
    color: #037eff;
    border-radius: 18px 18px 18px 2px;
    border: solid 2px #037eff;
    padding: 8px 20px;
  }

  h2 {
    color: #1c3b50;
    font-size: 40px;
    margin-bottom: 0;
  }

  h1 {
    color: #037eff;
    border-bottom: solid 1px #c8d4dd;
    font-size: 70px;
    margin-top: 0px;
    padding-bottom: 24px;
    margin-bottom: 1px;
  }

  small {
    color: #1c3b50;
  }
`;

export const VideosContainer = styled.div`
  padding: 20px 8%;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #c8d4dd;
  padding-bottom: 12px;

  .label-container {
    display: flex;

    button {
      color: #1c3b50;
      background-color: #ffffff;
      border: solid 1px #1c3b50;
      border-radius: 30px;
      padding: 8px 18px;
      margin-right: 12px;
      cursor: pointer;
    }

    .selected {
      color: #ffffff;
      background-color: #037eff;
    }
  }

  .order-container {
    display: flex;
    align-items: center;

    p {
      margin-right: 12px;
    }

    select {
      height: 33px;
    }
  }
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

export const Pagination = styled.div`
  border-top: solid 1px #c8d4dd;
  padding-top: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #1c3b50;
    font-size: 20px;
  }

  button {
    background-color: transparent;
    border: 0;
    color: #1c3b50;
    cursor: pointer;
    font-size: 20px;
    padding: 12px;
    margin: 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .selected {
    color: #037eff;
    border: 1px solid #037eff;
    border-radius: 8px;
  }
`;

export const CTAContainer = styled.div`
  background-color: #f0f8ff;
`;

export const Footer = styled.div``;
