class Playground {
  public static CreateScene(
    engine: BABYLON.Engine,
    canvas: HTMLCanvasElement
  ): BABYLON.Scene {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera(
      "camera",
      0,
      Math.PI / 2,
      10,
      BABYLON.Vector3.Zero(),
      scene
    );

    BABYLON.SceneLoader.ImportMesh(
      "",
      "https://cdn.jsdelivr.net/gh/qian357891/MeshesLibrary@b393a2d7702579e657ceb3c5a150ba650f13b68a/",
      "temple_single_s.glb",
      scene,
      function (meshes) {
        scene.createDefaultCameraOrLight(true, true, true);
        scene.createDefaultEnvironment();
      }
    );

    return scene;
  }
}
