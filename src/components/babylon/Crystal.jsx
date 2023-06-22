import React from "react";
import { Vector3, Color3, Texture, GlowLayer, HemisphericLight, MeshBuilder, SolidParticleSystem, ArcRotateCamera, PBRMaterial, HDRCubeTexture, StandardMaterial } from "@babylonjs/core";
// import SceneComponent from "./SceneComponent"; // uses above component in same directory
import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.


let mesh;
var k = Date.now()
const onSceneReady = (scene) => {
    scene.clearColor = Color3.White();
    // This creates and positions a free camera (non-mesh)

    const canvas = scene.getEngine().getRenderingCanvas();

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new HemisphericLight("light1", new Vector3(1, -3, -7), scene);
    light.intensity = 0.3;

    // camera
    const camera = new ArcRotateCamera("cam1", 1, 1, -100, new Vector3(0, 0, -500), scene)
    camera.attachControl(canvas)
    camera.inputs.remove(camera.inputs.attached.mousewheel)


    // Default intensity is 1. Let's dim the light a small amount


    var hdrTexture = new HDRCubeTexture("/textures/texture2.hdr", scene, 512); // HDR texture
    var pbr = new PBRMaterial("pbr1", scene); // pbr material
    pbr.reflectionTexture = hdrTexture
    pbr.metallic = 0.0;
    pbr.roughness = 0;
    pbr.subSurface.isTranslucencyEnabled = true;

    var mat = new StandardMaterial("mat1", scene);
    mat.emissiveColor = new Color3(1, 1, 1); // Set the emissive color to make the particles glow
    mat.backFaceCulling = false;

    // Enable bloom effect
    var bloom = new GlowLayer("bloom", scene);
    bloom.intensity = 2; // Increase the intensity of the bloom effect



    var sphere = MeshBuilder.CreateSphere("sphere", { diameter: 100 }, scene);
    sphere.material = mat
    var scaleX = 1.2
    var scaleY = 2
    var scaleZ = 1
    var myPositionFunction = function (particle, i, s) {

        particle.scale.x = scaleX;
        particle.scale.y = scaleY;
        particle.scale.z = scaleZ;


    }

    var myVertexFunction = function (particle, vertex, i) {
        vertex.x *= (Math.random() + 1);
        vertex.y *= (Math.random() + 1);
        vertex.z *= (Math.random() + 1);
    };

    var SPS = new SolidParticleSystem('SPS', scene, { updatable: false });
    SPS.addShape(sphere, 1, { positionFunction: myPositionFunction, vertexFunction: myVertexFunction });
    mesh = SPS.buildMesh();
    mesh.material = pbr
    camera.target = sphere
};

/**
 * Will run on every frame render.  We are spinning the box on y-axis.
 */
const onRender = (scene) => {
    if (mesh !== undefined) {
        const deltaTimeInMillis = scene.getEngine().getDeltaTime();

        const rpm = 5;
        mesh.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
        mesh.position.y = Math.sin((k - Date.now()) / 500) * 10;
        k += 0.09;
    }
};

export default () => (
    <div className={"fixed flex h-screen w-screen md:w-auto right-0 top-0 md:right-[10rem] justify-center items-center -z-10 xl:z-0"}>
        <SceneComponent className="w-[300px] h-[500px] outline-none" antialias onSceneReady={onSceneReady} onRender={onRender} id="my-canvas" />
    </div>
);