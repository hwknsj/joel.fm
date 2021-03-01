// For code splitting purposes, separate font-face definitions
const fonts = () => String.raw`
  @font-face {
    font-family: 'EskapadeFraktur';
    src: url('../../lib/fonts/EskapadeFraktur-Regular.otf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'EskapadeFraktur';
    src: url('../../lib/fonts/EskapadeFraktur-Italic.otf');
    font-style: italic;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('../../lib/fonts/CorporateS-ProRegular.ttf');
    font-weight: 400;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('../../lib/fonts/CorporateSBold.ttf');
    font-weight: bold;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('../../lib/fonts/CorporateSItalic.ttf');
    font-style: italic;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('../../lib/fonts/CorporateSLight.ttf');
    font-weight: 200;
  }

  @font-face {
    font-family: 'CorporateS';
    src: url('../../lib/fonts/CorporateSMedium.ttf');
    font-weight: 600;
  }

  @font-face {
    font-family: 'CorporateA';
    src: url('../../lib/fonts/CorporateARegular.ttf');
    font-weight: 400;
  }
`

export default fonts
