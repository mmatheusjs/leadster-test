import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
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

  div {
    display: flex;
    position: relative;
    h1 {
      background: linear-gradient(to right, #2c83fb, #1f76f0);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      border-bottom: solid 1px #c8d4dd;
      font-size: 70px;
      margin-top: 0px;
      padding-bottom: 24px;
      margin-bottom: 1px;
    }
    img {
      position: absolute;
      right: -25px;
      top: 5px;
    }
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
  .gallery-item {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    margin: 12px;
    border: 0;

    img {
      width: 100% !important;
      object-fit: cover;
      height: 100%;
      border-radius: 20px 20px 0px 0px;
    }

    p {
      padding: 0 20px;
      font-size: 18px;
    }
  }
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
  display: flex;
  align-items: center;
  padding: 30px 10% 0px;

  div.cta-image {
    width: 50%;
  }

  div.cta-box {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-left: 60px;
    div.cta-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
      border-bottom: solid 1px #c8d4dd;
      p {
        margin: 0px 0px 5px;
        font-size: 40px;
      }
      span {
        font-size: 25px;
        margin-bottom: 20px;
      }
    }

    div.cta-button-box {
      display: flex;
      align-items: center;

      button.cta-button {
        width: 260px;
        height: 70px;
        margin-right: 20px;
        font-size: 18px;
        color: #ffffff;
        background-color: #037eff;
        border-radius: 40px;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }

    div.cta-details {
      display: flex;
      align-items: center;

      p {
        font-size: 16px;
      }
      img {
        margin-right: 5px;
        &.ratings-icon {
          margin-left: 5px;
        }
      }
    }
  }
`;
