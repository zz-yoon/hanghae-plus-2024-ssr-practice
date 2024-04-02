import React from 'react';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>hanghae-plus-2024-ssr-practice</title>
        {/* 메타 태그 */}
        <meta name="title" content="hanghae-plus-2024-ssr-practice" />
        <meta name="description" content="first make hanghae-plus-2024-ssr-practice. first step." />
        <meta name="robots" content="index" />
        {/* 오픈그래프 태그 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="hanghae-plus-2024-ssr-practice" />
        <meta property="og:description" content="first make hanghae-plus-2024-ssr-practice. first step." />
        <meta property="og:image" content="image url" />
        <meta property="og:url" content="url" />
        {/* 트위터 태그 */}
        <meta name="twitter:card" content="card image" />
        <meta name="twitter:title" content="hanghae-plus-2024-ssr-practice" />
        <meta name="twitter:description" content="first make hanghae-plus-2024-ssr-practice. first step." />
        <meta name="twitter:image" content="image url" />
      </Helmet>
    </>
  );
}

export default App;
