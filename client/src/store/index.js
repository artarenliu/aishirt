import { proxy } from "valtio";

const state = proxy({
intro: true,
color: 'white',
isLogoTexture: true,
isFullTexture: false,
logoDecal: './VORTEX.png',
fullDecal: './VORTEX.png',
});

export default state;