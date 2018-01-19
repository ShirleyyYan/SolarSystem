class BabylonScene {
    constructor(canvas) {
        this.renderingcanvas = canvas; 
        this.engine = new BABYLON.Engine(this.renderingcanvas, true);

        this.scene = new BABYLON.Scene(this.engine);
        let scene = this.scene;

        this.camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 5, new BABYLON.Vector3(0, 0, -0), this.scene);
        this.camera.attachControl(this.renderingcanvas);
        this.camera.lowerRadiusLimit = 3;


        this.scene.clearColor = new BABYLON.Color3(0, 0, 0);

        let light = new BABYLON.PointLight('centerlight', BABYLON.Vector3.Zero(), scene)

        light.intensity = 0.7;

        let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);
        sphere.material = new BABYLON.StandardMaterial('sm', this.scene);
        sphere.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
        

        this.engine.runRenderLoop(this.render.bind(this));
    }

    render() {
        this.engine.beginFrame();
        
        this.scene.render();
        this.engine.endFrame();
    }

}