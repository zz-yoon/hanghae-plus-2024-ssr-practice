import React from 'react';
import { Helmet } from 'react-helmet-async';
import config from './config';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

const AppContent = () => {
  const { siteTitle, siteDescription, siteImage, siteUrl } = config;
  const { language } = useLanguage();
  
  return (
    <>
      <Helmet>
        <html lang={language}></html>
        <title>{siteTitle}</title>
        {/* 메타 태그 */}
        <meta name="title" content={siteTitle} />
        <meta name="description" content={siteDescription} />
        <meta name="robots" content="index, follow" />
        {/* 오픈그래프 태그 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle}  />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={siteImage} />
        <meta property="og:url" content={siteUrl} />
        {/* 트위터 태그 */}
        <meta name="twitter:card" content={siteImage} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteImage} />
      </Helmet>
    </>
  );
};

function App() {

  return (
    <LanguageProvider>
      <AppContent/>
    </LanguageProvider>
)

}

export default App;
