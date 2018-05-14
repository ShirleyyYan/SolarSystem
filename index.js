import css from './src/css/base.css';
import BABYLON from './src/libs/babylonjs/babylon.max';
import BabylonScene from './src/frameworks/Base/base';
window.onload = function() {
    /* globals */
    global.BABYLON = BABYLON;
    window.canvas = document.createElement('canvas');
    document.body.appendChild(window.canvas);

    /* instance */
    let scene = window.bScene = new BabylonScene(canvas);
}