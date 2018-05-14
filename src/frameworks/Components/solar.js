/*
 * @Author: Yan 
 * @Date: 2017-12-29 17:26:59 
 * @Last Modified by: Yan
 * @Last Modified time: 2018-05-14 20:25:07
 */

import config from './../Config/planet.json';
import Planet from './planet';
import Sun from './sun';
import CameraUniversal from './../Inputs/CameraUniversal';
import {Const} from '../Base/const';
global.CONST = Const;

class Solar {
    constructor (bScene) {
        let root = new BABYLON.Mesh('root', bScene.scene);
        root.rotationQuaternion =  new BABYLON.Quaternion(1, 0, 0, 0);
        root.rotation.set(0, 0, 0);

        this.planets = [];

        let p;
        for (let i = 0; i < config.length; ++i) {
            if (config[i].name === 'sun') {
                p = new Sun(bScene.scene, config[i], root);
            } else {
                p = new Planet(bScene.scene, config[i], root);
            }
            this.planets.push(p);
        }

        // new CameraUniversal(bScene, root);



    }


    update() {
        let _self = this;
        for (let i = 0; i < _self.planets.length; ++i) {
            _self.planets[i].update();
        }
    }

}
export default Solar;
