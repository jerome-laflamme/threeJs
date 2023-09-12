import * as THREE from "three";
import { useEffect } from "react";
import "./App.css";

function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000
  );

  const renderer = new THREE.WebGLRenderer();
  
  renderer.setSize( window.innerWidth , window.innerHeight );
  document.body.appendChild( renderer.domElement );


  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x61dafb } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }
  


  animate()
  return <div className="App">

  </div>;
}

export default App;
