/*
 * @Author: Yan 
 * @Date: 2017-12-27 11:00:40 
 * @Last Modified by: Yan
 * @Last Modified time: 2017-12-28 08:48:50
 */

class Planet{
    constructor(scene, name, options, config) {
        this.mesh = BABYLON.MeshBuilder.CreateSphere(config.name, options);
        this.mesh.material = new PlanetMaterial();
    }
}