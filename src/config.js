module.exports = {
  resetbulb: {
    mutation: "resetBulb"
  },
  lightsout: {
    mutation: "lightsOut"
  },
  lightson: {
    mutation: "lightsOn"
  },
  bulb: {
    mutation: "changeBulb",
    mp3: {
      src: "absolutely.mp3",
      ttl: 5000 //?
    },
    img: {
      img: "vonage.png",
      ttl: 5000, //?
      pos: "topright", //?
      animation: "flicker" //?
    }
  }
  // grounded: {
  //   mp3: "grounded.mp3"
  // },
  // energize: {
  //   mp3: "transport.mp3"
  // },
  // absolutely: {
  //   mp3: "absolutely.mp3"
  // },
  // look: {
  //   mp3: "look.mp3"
  // },
  // vonage: {
  //   mp3: "vonage.mp3",
  //   img: "vonage.png",
  //   ttl: 5000,
  //   pos: "topright",
  //   animation: "flicker"
  // },
  // vonagedevs: {
  //   mp3: "vonage.mp3",
  //   img: "vonage.png",
  //   ttl: 5000,
  //   pos: "topright",
  //   animation: "flicker"
  // }
};
