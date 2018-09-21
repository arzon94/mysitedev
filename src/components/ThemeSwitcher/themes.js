const themes = [
  {
    name: 'blue',
    firstTime: true,
    image: 'https://source.unsplash.com/049M_crau5k/1600x900', //keep
    colorPrimary: '#4ea9da',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#daedf7',
    textPrimary: '#202121',
    navAlpha: 'rgba(0, 0, 0, 0.02)'
  },
  {
    name: 'cyan spring',    
    image: 'https://source.unsplash.com/6V149DcMaG4/1600x900',
    firstTime: true,
    colorPrimary: '#3dc0b0',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#d7f2ef',
    textPrimary: '#202121',
    navAlpha: 'rgba(0, 0, 0, 0.02)'
  },
  {
    name: 'blue-alt',
    firstTime: true,
    image: 'https://source.unsplash.com/kKvQJ6rK6S4/1600x900', //keep
    colorPrimary: '#FAFAFA',
    colorAlternate: '#4ea9da',
    colorHighlight: '#2a93cb',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(78, 169, 218, 0.02)'
  },
  {
    name: 'cyan-alt',
    firstTime: true,
    image: 'https://source.unsplash.com/F9wrh2miJLA/1600x900', //keep
    colorPrimary: '#FAFAFA',
    colorAlternate: '#3dc0b0',
    colorHighlight: '#35a698',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(61, 192, 176, 0.02)'
  },
  {
    name: 'green',
    // firstTime: true,
    image: 'https://source.unsplash.com/K4XHqPZq66c/1600x900', //keep
    colorPrimary: '#5BA150',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#e1efdf',
    textPrimary: '#202121',
    navAlpha: 'rgba(0, 0, 0, 0.02)'
  },
  {
    name: 'green-alt leaf',
    firstTime: true,
    image: 'https://source.unsplash.com/y0h45Oemrx4/1600x900', //keep
    colorPrimary: '#FAFAFA',
    // colorAlternate: '#0faf17',
    colorAlternate: '#68cc82',
    colorHighlight: '#e1efdf',
    textPrimary: '#202121',
    navAlpha: 'rgba(0, 0, 0, 0.02)'
  },
  {
    name: 'brown',
    // firstTime: true,
    image: 'https://source.unsplash.com/l88MCKrooew/1600x900',
    colorPrimary: '#A26836',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#f5ebe2',
    textPrimary: '#202121',
    navAlpha: 'rgba(0, 0, 0, 0.05)'
  },
  {
    name: 'fall',
    // firstTime: true,
    colorPrimary: '#FAFAFA',
    image: 'https://source.unsplash.com/wUWP53W7KbY/1600x900', //keep
    colorAlternate: '#e17421',
    colorHighlight: '#f9e4d5',
    textPrimary: '#202121',
    navAlpha: 'rgba(0, 0, 0, 0.05)'
  },
  {
    name: 'crimson-red sunset',
    image: 'https://source.unsplash.com/DjlKxYFJlTc/1600x900', //keep
    firstTime: true,
    colorPrimary: '#bf0d0d',
    // colorPrimary: '#cc0000',
    colorAlternate: '#202121',
    colorHighlight: '#cc0000',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(0, 0, 0, 0.05)'
  },
  {
    name: 'red pool', //keep
    firstTime: true,
    image: 'https://source.unsplash.com/PaM7SD5wM6g/1600x900', 
    colorPrimary: '#af3d4e',
    colorAlternate: '#FAFAFA',
    colorHighlight: '#f6e4e7',
    textPrimary: '#202121',
    navAlpha: 'rgba(0, 0, 0, 0.05)'
  },
  {
    name: 'red-alt beachwalker',
    image: 'https://source.unsplash.com/v0zVmWULYTg/1600x900', 
    // firstTime: true,
    colorPrimary: '#FFFFFF',
    colorAlternate: '#89303d',
    colorHighlight: '#63232c',
    textPrimary: '#FFFFFF',
    navAlpha: 'rgba(137, 48, 61, 0.05)'
  },
  {
    name: 'indigo-alt cityscape', //keep
    image: 'https://source.unsplash.com/4u2U8EO9OzY/1600x900', 
    // firstTime: true,
    colorPrimary: '#FAFAFA',
    colorAlternate: '#303F9F',
    colorHighlight: '#242f78',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(48, 63, 159, 0.05)'
  },
  {
    name: 'grey-alt',
    // firstTime: true,
    image: 'https://source.unsplash.com/xpAma4MLLh4/1600x900', //keep
    colorPrimary: '#FFFFFF',
    colorAlternate: '#485564',
    colorHighlight: '#333c46',
    textPrimary: '#FFFFFF',
    navAlpha: 'rgba(72, 85, 100, 0.05)'
  },
  {
    name: 'material-cyan-alt ocean',
    firstTime: true,
    image: 'https://source.unsplash.com/VBBGigIuaDY/1600x900',
    colorPrimary: '#ffffff',
    colorAlternate: '#00BCD4',
    colorHighlight: '#d4faff',
    textPrimary: '#212121',
    navAlpha: 'rgba(255, 255, 255, 0.05)'
  },
  {
    name: 'material-brown boring plant',
    // firstTime: true,
    image: 'https://source.unsplash.com/x2Tmfd1-SgA/1600x900',
    colorPrimary: '#845c4e',
    colorAlternate: '#FFFFFF',
    colorHighlight: '#eee6e3',
    textPrimary: '#212121',
    navAlpha: 'rgba(255, 255, 255, 0.05)'
  },
  {
    name: 'material-grey kilmanjaro',
    // firstTime: true,
    image: 'https://source.unsplash.com/W0ZYnYIhhDc/1600x900',
    colorPrimary: '#607D8B',
    colorAlternate: '#FFFFFF',
    colorHighlight: '#dfe6e9',
    textPrimary: '#212121',
    navAlpha: 'rgba(255, 255, 255, 0.05)'
  },
  {
    name: 'material-grey-alt',
    // firstTime: true,
    image: 'https://source.unsplash.com/uyhrApbajKQ/1600x900',
    colorPrimary: '#FFFFFF',
    colorAlternate: '#455A64',
    colorHighlight: '#374850',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(69, 90, 100, 0.05)'
  },
  {
    name: 'image test',
    // firstTime: true,
    image: 'https://source.unsplash.com/W0ZYnYIhhDc/1600x900',
    colorPrimary: '#fcf232',
    colorAlternate: '#455A64',
    colorHighlight: '#374850',
    textPrimary: '#FAFAFA',
    navAlpha: 'rgba(255, 255, 255, 0.05)'
  },
];

export const getThemes = () => {
  return themes.map((theme) => {
    return {
      name: theme.name,
      firstTime: theme.firstTime,
      colorPrimary: theme.colorPrimary,
      colorAlternate: theme.colorAlternate,
      colorHighlight: theme.colorHighlight,
      bgPrimary: theme.colorAlternate,
      bgAlternate: theme.colorPrimary,
      bgLanding: theme.colorPrimary,
      textPrimary: theme.textPrimary,
      textAlternate: theme.colorAlternate,
      textLanding: theme.colorPrimary,
      parallaxStars: theme.colorPrimary,
      navAlpha: theme.navAlpha, 
      image: theme.image
    };
  });
};
