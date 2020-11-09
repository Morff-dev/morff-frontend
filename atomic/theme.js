module.exports = () => ({
  palette: {
    prefix: '',
    primary: '#ff0356',
    error: '#da1e27',
    error2: '#e80000',
    disabledGrey: '#aaaaaa',
    lightGrey: '#767676',
    lightestGray2: '#ebebeb',
    headingDarkGrey: '#111',
    subheadingDarkGrey: '#222222',
    footer: '#212121',
    bodyGrey: '#333333',
    mediumGrey: '#444444',
    inputGrey: '#555',
    placeholderGrey: '#888888',
    imageBgColor: '#dddbdd',
    lightestGray: '#dcdcdc',
    buttonGrey: '#919191',
    iconBlue: '#0847f4',
    activeTagBlue: '#e3ebff',
    checkBoxBg: '#fefefe',
    checkboxMore: '#e80000',
    verified: '#00a04a',
  },
  fontFamily: {
    prefix: 'ff',
    opensans: 'Open Sans',
    primary:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    pre: 'monospace',
    quote: 'serif',
    roboto: "'Roboto', sans-serif",
    inter: 'Inter, sans-serif',
    mont: 'Montserrat, sans-serif',
    manrope: 'Manrope, sans-serif',
  },
  fontWeight: {
    prefix: 'fw',
    regular: 400,
    bold: 700,
    medium: 500,
    semibold: 600,
  },
  fontSize: {
    prefix: 'fz',
    title: '20px',
    desktopTitle: '24px',
    subheading: '1.3vw',
    mobilesubheading: '3vw',
    label: '10px',
    mobileheading: '5vw',
    caption: '0.8vw',
    small: '0.7vw',
    body: '1vw',
    text: '1.2vw',
    input: '17px',
    message: '16px',
    button: '14px',
    large: '4vw',
    mobilelarge: '10vw',
  },
  lineHeight: {
    prefix: 'lh',
    title: '24px',
    mediumCaption: '18px',
    subheading: '2.5vw',
    mobilesubheading: '8vw',
    body: '20px',
    caption: '16px',
    input: '24px',
  },
  spacing: {
    prefix: '',
    full: '100%',
    fc: 'fit-content',
    auto: 'auto',
    half: '50%',
    quarter: '25%',
    third: '30%',
    deci: '10%',
    '3xs': '2px',
    xhs: '3px',
    xxs: '4px',
    xms: '6px',
    xs: '8px',
    xss: '10px',
    sm: '12px',
    smd: '14px',
    md: '16px',
    smx: '18px',
    mmd: '20px',
    lg: '24px',
    xlg: '26px',
    lmg: '28px',
    xl: '32px',
    xml: '36px',
    xxl: '40px',
    '2xl': '48px',
    '5x': '50px',
    '3xl': '60px',
    '4xl': '64px',
    '5xl': '72px',
    '5xxl': '76px',
    '6xl': '80px',
    '7xl': '88px',
    '8xl': '96px',
    '9xl': '104px',
    '10x': '100px',
    '10xl': '112px',
    '11xl': '120px',
    '12xl': '128px',
    '13xl': '136px',
    '14xl': '144px',
    '15xl': '150px',
    '15xxl': '156px',
    '16xl': '160px',
    '18xl': '180px',
    '20xl': '192px',
    '20x': '200px',
    '24xl': '240px',
    '25x': '250px',
    xmd: '256px',
    '25xl': '258px',
    '30xl': '300px',
    '35x': '350px',
    '40x': '400px',
    '45x': '450px',
    '50xl': '500px',
    '60xl': '600px',
    '6xxl': '640px',
    '61xl': '610px',
    nxxs: '-4px',
    nxs: '-8px',
    nsmm: '-10px',
    nmd: '-16px',
    nsm: '-12px',
    nlg: '-24px',
    n2xl: '-48px',
    n3xl: '-56px',
  },
  boxShadow: {
    prefix: 'bxsh',
    highlight: '0px 0px 8px #00000029',
    checkbox: '0px 3px 6px #00000029',
    navBar: '0px 3px 3px #00000014',
    lightInset: 'inset 0 0 4px 0 rgba(0,0,0,0.1)',
    calendar: '0 2px 6px rgba(0,0,0,.2)',
  },
  transition: {
    prefix: 'trs',
    tabslider: '.3s cubic-bezier(.25,.8,.5,1)',
    transform: 'transform .3s cubic-bezier(.25,.8,.5,1)',
    generallong: '.5s cubic-bezier(.25,.8,.5,1)',
    opacity: 'opacity .5s cubic-bezier(.25,.8,.5,1)',
    icon: 'transform .4s cubic-bezier(.33, 1.89, .65, .67)',
    rippleTranslate: 'translate3d(0, 0, 0)',
    ripple: 'transform 5s, opacity 5s',
    scale: 'scale(0, 0)',
  },
  background: {
    prefix: '',
    bgfull: '100% 100%',
    themeColor: '#ff0356',
    disabledGrey2: '#c6c6c6',
    hoverButton: '#172be2',
    hoverInput: '#e4e4e4',
    primaryButton: '#162dff',
    navBarBg: '#f5f5f5',
    completion: '#949494',
    overlay: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))',
    modal: 'rgba(0, 0, 0, 0.4)',
    snackbar: '#323232',
    videoModal: 'rgba(0, 0, 0, 0.6)',
    radial: 'radial-gradient(circle,black 10%, transparent 10.01%)',
    lite:
      'transparent linear-gradient(94deg, #F60456 0%, #1325D2 100%) 0% 0% no-repeat padding-box',
  },
  border: {
    prefix: 'bd',
    checkmark: '0 2px 2px 0',
    tabBlue: '2px solid #0847f4',
    disabledGreyButton: '1px solid #919191',
    primaryButton: '1px solid #162dff',
    headingDarkGrey: '1px solid #111',
    checkbox: '2px solid #111',
    inputGrey: '1px solid #555',
    cardGrey: '0.5px solid #949494',
    disabledGrey: '1px solid #aaaaaa',
    themeColor: '1px solid #ff0356',
    errorColor: '1px solid #da1e27',
    blue: '1px solid #1990bf',
    darkGrey: '1px solid #707070',
    lightGrey: '1px solid #767676',
    disabledGrey2: '1px solid #c6c6c6',
    bottom: '0 0 1px',
    left: '0 0 0 1px',
    Grey: '1px solid lightgray',
    newGrey: '1px solid #504d4d',
    solidLightestGray: '1px solid #dcdcdc',
    fileUpload: '0.5px dashed #555',
  },
  figure: {
    prefix: 'fg',
    background:
      'linear-gradient(180deg, transparent, rgba(0,0,0,.5) 63%, rgba(0,0,0,.62))',
    backgroundLight:
      'linear-gradient(180deg,transparent,transparent 63%,rgba(0,0,0,0.75))',
    size: '100% 100%',
    StepShadow:
      '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.06), 0px 0px 2px rgba(0, 0, 0, 0.07)',
  },
  borderRadius: {
    prefix: 'bdrs',
    container: '8px',
    input: '4px 4px 0 0',
    button: '4px',
    textbox: '0.5vw',
    modal: '10px 10px 0 0',
    quizbanner: '3vw 3vw 0 0',
  },
});
