import styled from 'styled-components';

export const StyledMarkdown = styled.div`
  font-family: 'Roboto';
  font-size: 2rem;

  h1 {
    font-size: 3.5rem;
    color: red;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.5rem;
  }
`;

export const StyledRetroMarkdown = styled.div`
  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: ' (' attr(href) ')';
    }

    abbr[title]:after {
      content: ' (' attr(title) ')';
    }

    a[href^='#']:after,
    a[href^='javascript:']:after {
      content: '';
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  html {
    font-size: 20px;
  }

  @media screen and (min-width: 32rem) and (max-width: 48rem) {
    html {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 48rem) {
    html {
      font-size: 20px;
    }
  }

  body {
    line-height: 1.85;
  }

  p,
  .splendor-p {
    font-size: 1.6rem;
    margin-bottom: 1.3rem;
  }

  h1,
  .splendor-h1,
  h2,
  .splendor-h2,
  h3,
  .splendor-h3,
  h4,
  .splendor-h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1,
  .splendor-h1 {
    margin-top: 0;
    font-size: 3.998rem;
  }

  h2,
  .splendor-h2 {
    font-size: 2.827rem;
  }

  h3,
  .splendor-h3 {
    font-size: 1.999rem;
  }

  h4,
  .splendor-h4 {
    font-size: 1.414rem;
  }

  h5,
  .splendor-h5 {
    font-size: 1.121rem;
  }

  h6,
  .splendor-h6 {
    font-size: 0.88rem;
  }

  small,
  .splendor-small {
    font-size: 0.707em;
  }

  /* https://github.com/mrmrs/fluidity */

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }

  @import url(
    http://fonts.googleapis.com/css?family=Merriweather:300italic,
    300
  );

  html {
    font-size: 18px;
    max-width: 100%;
  }

  body {
    color: #444;
    font-family: 'Merriweather', Georgia, serif;
    margin: 0;
    max-width: 100%;
  }


  p {
    color: #555;
    height: auto;
    line-height: 1.45;
  }

  li {
      font-size: 1.5rem;
      list-style-type: disc;
      list-style-position: inside;
  }

  strong {
      font-weight: 600;
      color: black;
  }

  pre,
  code {
    font-family: Menlo, Monaco, 'Courier New', monospace;
  }

  pre {
    background-color: #fafafa;
    font-size: 1.3rem;
    overflow-x: scroll;
    padding: 1.125em;
  }

  a,
  a:visited {
    color: #3498db;
  }

  a:hover,
  a:focus,
  a:active {
    color: #2980b9;
  }

  blockquote p{
    color: red;
}

  
`;
