import styled from "styled-components";

import { CloudDownload } from "styled-icons/bootstrap";

export const DownloadIcon = styled(CloudDownload)`
  width: 20px;
  height: 35px;
  margin-right: 0px;
  padding: 0 10px;
`;
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

export const ModalVideoPlayer = styled.div`
  display: none;

  &.active {
    display: flex;
  }

  div.backdrop {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.445);
    z-index: 10;
  }
`;
export const ModalBody = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 600px;
  position: fixed;
  background-color: #ffffff;
  z-index: 15;
  border-radius: 12px;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div.blue-line {
    width: 100%;
    height: 4px;
    background-color: #037eff;
    margin-bottom: 5px;
  }

  div.title-box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    p.title {
      font-size: 20px;
      margin: 0px;
      margin-top: 20px;
      span {
        color: #2c83fb;
      }
    }

    span.close-button {
      font-size: 15px;
      position: absolute;
      top: 0;
      right: 10px;
    }
  }
`;

export const VideoPlayer = styled.div`
  width: 100%;
  margin: 20px 0px 10px;
  iframe {
    width: 100%;
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 5%;

  p.subtitle {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 10px;
    margin: 0px;
    border-bottom: solid 1px #c8d4dd;
  }

  p.text {
    font-size: 16px;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const DownloadsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 5%;
  p.subtitle {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 10px;
    margin: 0px;
    margin-bottom: 10px;
    border-bottom: solid 1px #c8d4dd;
  }

  div.buttons-box {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    div {
      display: flex;
      align-items: center;
      width: 130px;
      height: 30px;
      border-radius: 8px;
      margin-right: 5px;
      padding: 0px;
      font-size: 12px;
      outline: none;
      border: none;
      cursor: pointer;
      &.spreadsheet {
        background-color: #4ffff0;

        svg {
          color: #0d857d;
        }
        span {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          padding-left: 5px;
          font-weight: bold;
          color: #0d857d;
          background-color: #9ff1ec;
          border-radius: 0px 8px 8px 0px;
        }
      }
      &.document {
        background-color: #82aeff;

        svg {
          color: #2162da;
        }
        span {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          padding-left: 5px;
          font-weight: bold;
          color: #2162da;
          background-color: #a9ccfa;
          border-radius: 0px 8px 8px 0px;
        }
      }
      &.presentation {
        background-color: #ffc964;

        svg {
          color: #bd7d08;
        }
        span {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          padding-left: 5px;
          font-weight: bold;
          color: #bd7d08;
          background-color: #f3e8d2;
          border-radius: 0px 8px 8px 0px;
        }
      }
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
