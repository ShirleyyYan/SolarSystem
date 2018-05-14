import Solar from './../Components/Solar';


class BabylonScene {
    constructor(canvas) {
        let _self = this;

        _self.renderingCanvas = canvas;
        _self.engine = new BABYLON.Engine(canvas, true);

        let scene = new BABYLON.Scene(_self.engine);
        _self.scene = scene;
        _self.scene.clearColor = BABYLON.Color3.Black();
        // let scene = this.scene;

        let actionManager = new BABYLON.ActionManager(scene);
        scene.actionManager = actionManager;
        actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnEveryFrameTrigger, this.beforeRender.bind(this)));

        _self.camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 5, new BABYLON.Vector3(0, 0, 0), _self.scene);
        // _self.camera.attachControl(canvas, true);
        _self.camera.radius = 600;
        // _self.camera.lowerRadiusLimit = 3;
        _self.camera.alpha = 0.36;
        _self.camera.beta = 1.305;


        // let light1 = new BABYLON.HemisphericLight('lightup', BABYLON.Vector3.Up(), scene)
        // light1.intensity = 0.5;
        // light1.specular.set(0, 0, 0);
        // let light2 = new BABYLON.HemisphericLight('lightdown', new BABYLON.Vector3(0, -1, 0), scene)
        // light2.intensity = 0.5;
        // light2.specular.set(0, 0, 0);

        let pointLight = new BABYLON.PointLight('point', new BABYLON.Vector3(0, 0, 0), scene);
        pointLight.intensity = 1.5;
        pointLight.specular.set(0, 0, 0);

        this.solar = new Solar(_self);

        // BABYLON.MeshBuilder.CreateLines(
        //     'sdfas',
        //     {
        //         points: [
        //             new BABYLON.Vector3(0, 0, 0),
        //             new BABYLON.Vector3(0, 50, 0),
        //             new BABYLON.Vector3(0, 0, 50),
        //             new BABYLON.Vector3(50, 0, 0),
        //         ], 
        //         colors: [
        //             new BABYLON.Color4(1, 0, 0, 1),
        //             new BABYLON.Color4(1, 1, 0, 1),
        //             new BABYLON.Color4(0, 1, 0, 1),
        //             new BABYLON.Color4(0, 1, 1, 1)
        //         ]
        //     },
        //     scene
        // );

        // let points = [
        //     BABYLON.Vector3.Zero(),
        //     BABYLON.Vector3.Up().scale(500)
        // ];
        // let color = new BABYLON.Color4();
        // BABYLON.MeshBuilder.CreateLines('sdlfsdfas', {
        //     points: points,
        //     colors: [
        //         color, color
        //     ]
        // }, scene);

        // scene.debugLayer.show();

        _self.engine.runRenderLoop(_self.render.bind(_self));

    }

    render() {
        let _self = this;
        _self.engine.beginFrame();

        _self.solar.update();
        
        _self.scene.render();
        _self.engine.endFrame();
    }

    beforeRender(e) {
        let _self = this;
    }

}
export default BabylonScene;
