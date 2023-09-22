import { ThemeProvider } from 'styled-components';
import App from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';
import Layout from '../components/_layout/layout'
import AuthProvider from '../context/AuthProvider'
import ProductContext from '../context/ProductProvider'
import Header from '../components/Header';


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <ProductContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          </ProductContext>
        </AuthProvider>

      </ThemeProvider>
    );
  }
}

export default MyApp;
