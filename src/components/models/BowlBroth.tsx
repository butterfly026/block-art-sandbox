/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default (props: any) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/bowlBroth.glb');
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={[0.93, 0.93, 0.93]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_bowlBroth.geometry}
          material={nodes.Mesh_bowlBroth.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_bowlBroth_1.geometry}
          material={materials.purple}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_bowlBroth_2.geometry}
          material={materials.brown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_bowlBroth_3.geometry}
          material={materials.green}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_bowlBroth_4.geometry}
          material={materials.brownLight}
        />
        <group
          position={[0.14, 0.16, -0.1]}
          rotation={[0, Math.PI / 3, 0]}
          scale={[1.08, 1.08, 1.08]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_Group_495.geometry}
            material={nodes.Mesh_Group_495.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_Group_495_1.geometry}
            material={nodes.Mesh_Group_495_1.material}
          />
        </group>
        <group position={[0.16, 0.16, 0.07]} scale={[1.08, 1.08, 1.08]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_Group_495.geometry}
            material={nodes.Mesh_Group_495.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_Group_495_1.geometry}
            material={nodes.Mesh_Group_495_1.material}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/bowlBroth.glb');
