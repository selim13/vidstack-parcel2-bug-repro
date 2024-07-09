import { VidstackPlayer, VidstackPlayerLayout } from 'vidstack/global/player';

VidstackPlayer.create({
  target: '#target',
  title: 'Sprite Fight',
  src: 'youtube/_cMxraX_5RE',
  poster: 'https://files.vidstack.io/sprite-fight/poster.webp',
  layout: new VidstackPlayerLayout({
    thumbnails: 'https://files.vidstack.io/sprite-fight/thumbnails.vtt',
  }),
});

