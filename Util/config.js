const config = {
  width: 500, //gif width

  height: 500, //gif height

  frames: 10, //number of gif frames

  delay: 10, //delay between frames in ms

  quality: 10, //gif quality

  repeat: -1, //gif repeat 0 = forever , -1 = no repeat, 0> = repeat times

  transparent: 0x00000000, //gif transparent color

  pixelFill: 100, //pixel fill size x*y=pixelFill ^2

  path: "gifs/colors.gif",
};

export default config;
