/*
 * @Author: Yan 
 * @Date: 2017-12-27 11:00:40 
 * @Last Modified by: Yan
 * @Last Modified time: 2018-05-14 20:26:01
 */
class Planet{
    constructor(scene, config, parent) {
        console.log(config.name);
        this._config = config;
        this.scene = scene;
        this.mesh = BABYLON.MeshBuilder.CreateSphere(config.name, {diameter: config.radius * 4, segments: 200}, scene);
        if (parent) {
            this.mesh.setParent(parent);
        }
        this.mesh.position.set(config.radiusvolution * 4, 0, 0);
        this.mesh.rotationQuaternion =  new BABYLON.Quaternion();
        let material = new BABYLON.StandardMaterial(config.name + 'material', scene);
        this.mesh.material = material;

        this.r_axis = new BABYLON.Vector3(0, 1, 0);
        this.r_f = config.periodrotation;
        if (this.r_f != 0) {
            this.r_ff = 10 / this.r_f;
        }
        this.v_axis = new BABYLON.Vector3(0, 1, 0);
        this.v_axis_p = new BABYLON.Vector3(0, 0, 0);
        this.v_f = config.periodvolution;
        if (this.v_f != 0) {
            this.v_ff = 10 / this.v_f;
        }
        console.log(config);
        if (config.map) {
            material.diffuseTexture = new BABYLON.Texture('./src/' + config.map, scene);
        }
        if (config.bump) {
            // material.bumpTexture = new BABYLON.Texture('./src/' + config.bump);
        }
        
    }

    update() {
        let _self = this;

        if (CONST.runing) {
            if (_self.r_ff) {
                _self.mesh.rotate(_self.r_axis, _self.r_ff);
            }

            if (_self.v_ff) {
                _self.mesh.rotateAround(_self.v_axis_p, _self.v_axis, _self.v_ff);

            }
        }


        // let m = BABYLON.MeshBuilder.CreateSphere('', {diameter: 1, segments: 4}, _self.scene);
        // m.position = _self.mesh.position.clone();


    }
}

export default Planet;
