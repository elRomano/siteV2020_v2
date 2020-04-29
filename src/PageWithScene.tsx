import * as React from 'react';
import * as BABYLON from 'babylonjs';
import {SceneEventArgs, SceneComponent} from './SceneComponent'; // import the component above linking to file we just created.

class PageWithScene extends React.Component<{}, {}> {
    onSceneMount = (e: SceneEventArgs) => {
        const { canvas, scene, engine } = e;
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
        camera.setTarget(BABYLON.Vector3.Zero());
        camera.attachControl(canvas, true);
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        light.intensity = 0.7;
        var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
        sphere.position.y = 1;
        var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

        engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
            }
        });
    }

    render() {               
        return (
            <div>
                <SceneComponent onSceneMount={this.onSceneMount} />
            </div>
        )
    }
}
export default PageWithScene;