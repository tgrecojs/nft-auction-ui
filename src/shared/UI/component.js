import { Layout, Footer } from '../styled';
import { Global, css } from '@emotion/core';
import Navigation from "./Navigation/component"
const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <Global
        styles={css`
          body {
            margin: 0;
          }
          .wrapper {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }

          .content {
            flex: 1;
          }
        `}
      />
      <Navigation />
      <div className="content">{children}</div>
      <Footer>2020 | Fungible Yoga</Footer>
    </div>
  );
};

export default Wrapper;
