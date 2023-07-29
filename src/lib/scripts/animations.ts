import * as THREE from 'three'
import gsap from 'gsap'


let tZoom: gsap.core.Tween;
let tSpin: gsap.core.Tween;
let tAnimateToLoc: gsap.core.Tween;
export const zoom = (camera: THREE.Camera, object: THREE.Object3D) => {
    tZoom = gsap.fromTo(camera.position, {
        x: Math.random() * -2,
        y: Math.random() * -3,
        z: 12,
    }, {
        x: 0,
        y: 0,
        z: 8,
        duration: 4,
        ease: "back.inOut(3)",
        onStart: () => {
            spinGlobe(object)
        }
    })
    return tZoom
}

export const spinGlobe = (object: THREE.Object3D) => {
    tSpin = gsap.to(object.rotation,
        {
            repeat: -1,
            duration: 26,
            ease: "none",
            y: Math.PI * 2
        })
    return tSpin
}

export const animateToLoc = (object: THREE.Object3D, camera: THREE.Camera, ring: THREE.Object3D) => {
    const country = "australai"
    var p = object.getObjectByName(country)!.getWorldPosition(new THREE.Vector3())
    tAnimateToLoc = gsap.to(camera.position,
        {
            x: () => {
                const result = (p.x < 0) ? p.x - 3 : p.x + 3;
                return result
            },
            y: () => {
                const result = (p.y < 0) ? p.y - 3 : p.y + 3;
                return result
            },
            z: () => {
                const result = (p.z < 0) ? p.z - 3 : p.z + 3;
                return result
            },
            onUpdate: () => {
                tSpin.pause()
                ring.position.x = (p.x < 0) ? p.x - 0.1 : p.x + 0.1;
                ring.position.y = (p.y < 0) ? p.y - 0.1 : p.y + 0.1;
                ring.position.z = (p.z < 0) ? p.z - 0.1 : p.z + 0.1;
                // animatedRing.lookAt(p)
                ring.rotation.z = Math.PI * 0.5
                ring.rotation.x = -Math.PI * 0.5
                ring.rotation.y = Math.PI * 0.5
                // animatedRing.rotation.x = Math.PI * 0.5
                ring.visible = true
            },
            onComplete: () => {
                tSpin.resume()
                ring.visible = false

                gsap.to(camera.position, {
                    x: 0,
                    y: 0,
                    z: 7.5,
                    duration: 6,
                    ease: "back.out(3.5)",
                    onComplete: () => {
                        camera.lookAt(object)
                    }
                })
            },
            duration: 10,
            ease: "back.out(4)"
        });
}

export function animateRing(group: THREE.Group, elapsedTime: number) {
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
