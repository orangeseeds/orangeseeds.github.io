import * as THREE from 'three'
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


const EARTH_MODEL = '/low_poly_earth.glb'
const SEA_MATCAP = '/blue_sphere_matcap.png'

interface Size {
    width: number;
    height: number;
}

export class App {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;
    size: Size;
    textureLoader: THREE.TextureLoader;
    gltfLoader: GLTFLoader;
    canvas: HTMLCanvasElement;
    objects: Map<string, THREE.Object3D>;
    textures: Map<string, THREE.Texture>;
    animations: Map<string, (objects: THREE.Object3D) => Animation>;
    lights: Map<string, THREE.Group>;

    constructor(size: Size) {
        this.size = size
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(20, this.size.width / this.size.height, 0.1, 1000);
        this.scene.add(this.camera)
        this.renderer = new THREE.WebGLRenderer();
        this.canvas = this.renderer.domElement

        this.controls = new OrbitControls(this.camera, this.canvas)

        this.controls.enableDamping = true
        this.textureLoader = new THREE.TextureLoader()
        this.gltfLoader = new GLTFLoader()
        this.objects = new Map()
        this.textures = new Map()
        this.animations = new Map()
        this.lights = new Map()
    }

    setSize(size: Size) {
        this.size = size

        this.canvas.width = size.width
        this.canvas.height = size.width

        this.camera.aspect = this.canvas.width / this.canvas.height
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(this.canvas.width, this.canvas.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio))
    }

    render() {
        this.renderer.render(this.scene, this.camera)
    }

    loadGLB(name: string, path: string, loaded: (data: GLTF, objects: Map<string, THREE.Object3D>, scene: THREE.Scene) => void,) {
        this.gltfLoader.load(path, (data: GLTF) => {
            if (loaded) {
                loaded(data, this.objects, this.scene)
            } else {
                this.objects.set(name, data.scene)
            }

        })
    }

    loadTexture(name: string, path: string) {
        const texture = this.textureLoader.load(path)
        this.textures.set(name, texture)
    }

    addObject(name: string, object: THREE.Object3D) {
        this.objects.set(name, object)
        this.scene.add(object)
    }

    addAnimation(name: string, animation: (objects: THREE.Object3D) => Animation) {
        this.animations.set(name, animation)
    }

    setupCamera() {
        this.camera.position.z = 7
    }
    setupRenderer() {
        this.renderer.setSize(this.size.width, this.size.height)
        this.renderer.setClearColor(0xC3E7F5, 0);
    }
    setupController() {
        this.controls.enableDamping = true
        this.controls.enablePan = false
        this.controls.minDistance = 8
        this.controls.maxDistance = 25
    }
    addLight(name: string, light: THREE.Group) {
        this.lights.set(name, light)
        this.scene.add(this.lights.get(name)!)
    }


}




let sizes: Size;

export function init(size: Size) {
    const app = new App(size)

    const ld = (data: GLTF, objects: Map<string, THREE.Object3D>, scene: THREE.Scene) => {
        objects.set("object", data.scene)
        const object = objects.get("object")
        object?.position.set(0, -0.1, 0)

        objects.set("globe", object!.children[0])
        const globe = objects.get("globe")
        globe?.children[1].scale.set(1.045, 1.045, 1.045)
        //@ts-ignore
        globe.children[0].material.color.setHex(0x85dfd4)


        //@ts-ignore
        globe.children[1].material.color.setHex(0xA5ED17)
        //@ts-ignore
        globe.children[0].material.roughness = 0.98
        //@ts-ignore
        globe.children[1].material.roughness = 0.93

        scene.add(globe!)

    }

    app.loadGLB("", EARTH_MODEL, ld)

    app.setupCamera()
    app.setupController()
    app.setupRenderer()
    app.addLight("group", createLightGroup(0xFFFED9))


    const animatedRing = createAnimatedRings()
    animatedRing.scale.set(0.2, 0.2, 0.2)
    animatedRing.visible = false
    app.addObject("animatedRings", animatedRing)

    const clock = new THREE.Clock()
    const tick = () => {
        const elapsedTime = clock.getElapsedTime()
        animateRing(animatedRing, elapsedTime)

        // if (startUpdates) {
        app.controls.update()
        // console.log(camera.position.x, camera.position.y, camera.position.z)
        // }
        app.render()
        window.requestAnimationFrame(tick)
    }

    tick()

    return app


}

function createLightGroup(color: THREE.ColorRepresentation = 0xffffff) {
    const lightGroup = new THREE.Group

    const ambientLight = new THREE.AmbientLight(color, 6)

    const pointLight1 = new THREE.PointLight(color, 2.8, 5, 1)
    pointLight1.position.set(-3, -2, 2)
    //
    const pointLight3 = new THREE.PointLight(color, 1.5, 5, 1)
    pointLight3.position.set(3, 1, -1)
    //
    const pointLight4 = new THREE.PointLight(color, 1.5, 5, 1)
    pointLight4.position.set(2, -2, -1)
    //
    const pointLight2 = new THREE.PointLight(color, 2.9, 10)
    pointLight2.position.set(0, 0, 4)
    //
    const directionalLight = new THREE.DirectionalLight(color, 1)
    directionalLight.position.set(-10, 30, 50)
    //
    const directionalLight3 = new THREE.DirectionalLight(color, 1)
    directionalLight3.position.set(0, 30, -30)
    //
    const directionalLight2 = new THREE.DirectionalLight(color, 1)
    directionalLight2.position.set(-30, -30, -50)
    //
    // const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight)
    // directionalLightHelper.visible = false
    //
    // const directionalLightHelper2 = new THREE.DirectionalLightHelper(directionalLight2)
    // directionalLightHelper2.visible = false
    lightGroup.add(
        ambientLight,
        pointLight1,
        pointLight2,
        pointLight3,
        pointLight4,
        directionalLight,
        directionalLight2,
        directionalLight3,
        // directionalLightHelper,
        // directionalLightHelper2
    )
    return lightGroup
}


function createAnimatedRings() {
    const animatedRing = new THREE.Group()
    const ringl = new THREE.Mesh(
        new THREE.TorusBufferGeometry(1, 0.05, 32, 32),
        new THREE.MeshBasicMaterial({ color: 'white', transparent: true })
    )
    const ringm = new THREE.Mesh(
        new THREE.TorusBufferGeometry(0.7, 0.05, 32, 32),
        new THREE.MeshBasicMaterial({ color: 'white', transparent: true })
    )
    const rings = new THREE.Mesh(
        new THREE.TorusBufferGeometry(0.4, 0.05, 32, 32),
        new THREE.MeshBasicMaterial({ color: 'white', transparent: true })
    )
    ringl.rotation.x = Math.PI * 0.5
    ringl.scale.z = 0.4
    ringm.rotation.x = Math.PI * 0.5
    ringm.scale.z = 0.4
    rings.rotation.x = Math.PI * 0.5
    rings.scale.z = 0.4
    animatedRing.add(rings, ringm, ringl)

    return animatedRing
}

function animateRing(group, elapsedTime) {
    elapsedTime = elapsedTime * 1.5
    group.children[0].position.y = Math.abs(Math.cos(elapsedTime))
    group.children[0].material.opacity = 1 - group.children[0].position.y
    group.children[0].scale.x = 1 - group.children[0].material.opacity
    group.children[0].scale.y = 1 - group.children[0].material.opacity

    group.children[1].position.y = Math.abs(Math.cos(elapsedTime)) + 0.2
    group.children[1].material.opacity = 1 - group.children[1].position.y
    group.children[1].scale.x = 1 - group.children[1].material.opacity
    group.children[1].scale.y = 1 - group.children[1].material.opacity

    group.children[2].position.y = Math.abs(Math.cos(elapsedTime)) + 0.4
    group.children[2].material.opacity = 1 - group.children[2].position.y
    group.children[2].scale.x = 1 - group.children[2].material.opacity
    group.children[2].scale.y = 1 - group.children[2].material.opacity
}
