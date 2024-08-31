import React from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import FAQ from "./pages/FAQ";
import Discover from "./pages/Discover";
import Guarantee from "./pages/Guarantee";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import { PageFooter, PageHeader } from "./components";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 0,
  lineHeight: "64px",
  backgroundColor: "black",
  position: "fixed",
  width: "100%",
  top: 0,
};

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  overflow: "hidden",
};

function App() {
  return (
    <div>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <PageHeader />
        </Header>
        <Content style={contentStyle}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/guarantee" element={<Guarantee />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </Content>
        <Footer style={footerStyle}>
          <PageFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
