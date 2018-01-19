/*
 * @Author: Yan 
 * @Date: 2017-12-29 17:26:59 
 * @Last Modified by:   Yan 
 * @Last Modified time: 2017-12-29 17:26:59 
 */
class Solar {
    constructor (bScene) {
        this.emitter = new BABYLON.VolumetricLightScatteringPostProcess('godrays', 1.0, bScene.camera, null, 100, BABYLON.Texture.BILINEAR_SAMPLINGMODE, bScene.engine, false);
        // emitter.mesh.material.diffuseTexture = new BABYLON.Texture("sun.png", scene, true, false, BABYLON.Texture.BILINEAR_SAMPLINGMODE);
        // emitter.mesh.material.diffuseTexture.hasAlpha = true;
        
        this.emitter.mesh.position = new BABYLON.Vector3(0, 180, 0);
    }
}