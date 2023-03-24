const size = {
   mobileS: [320],
   mobileM: [375, 424],
   mobileL: [425, 767],
   tablet: [768, 1023],
   laptop: [1024, 1439],
   laptopL: [1440, 2559],
   desktop: [2560],
};

export const device = {
   mobileS: `(max-width: ${size.mobileS[0]}px)`,
   mobileM: `(min-width: ${size.mobileM[0]}px) and (max-width: ${size.mobileM[1]}px)`,
   mobileL: `(min-width: ${size.mobileL[0]}px) and (max-width: ${size.mobileL[1]}px)`,
   tablet: `(min-width: ${size.tablet[0]}px) and (max-width: ${size.tablet[1]}px)`,
   laptop: `(min-width: ${size.laptop[0]}px) and (max-width: ${size.laptop[1]}px)`,
   laptopL: `(min-width: ${size.laptopL[0]}px) and (max-width: ${size.laptopL[1]}px)`,
   desktop: `(min-width: ${size.desktop[0]}px)`,
};
