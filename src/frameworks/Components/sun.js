/*
 * @Author: Yan 
 * @Date: 2018-02-13 09:32:37 
 * @Last Modified by: Yan
 * @Last Modified time: 2018-05-14 18:13:47
 */
import Planet from './planet';

class Sun extends Planet {
    constructor(scene, config, parent) {
        super(scene, config, parent);
        this.mesh.material.emissiveTexture = this.mesh.material.diffuseTexture;
        // this.mesh.material.diffuseTexture = null;
        // this.mesh.material.emissiveColor = BABYLON.Color3.White();
        // let gl = new BABYLON.GlowLayer("glow", scene, { 
        //     blurKernelSize: 64,
        //     mainTextureSamples: 2
        // });
        // gl.addIncludedOnlyMesh(this.mesh);
        // gl.intensity = 1.5;
        // global.g = gl;
    }
}


export default Sun;