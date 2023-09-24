/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/mustang.glb
Author: Pooya_dh (https://sketchfab.com/Pooya_dh)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/ford-mustang-1965-5f4e3965f79540a9888b5d05acea5943
Title: Ford Mustang 1965
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import * as THREE from "three";

export function Mustang(props) {
  const bodyMat = new THREE.MeshStandardMaterial({
    color: props.color.body,
    roughness: 0.3,
    metalness: 0.7,
  });
  const lineMat = new THREE.MeshStandardMaterial({
    color: props.color.line,
  });
  const tireMat = new THREE.MeshStandardMaterial({
    color: props.color.tire,
  });
  const rimMat = new THREE.MeshStandardMaterial({
    color: props.color.rim,
    roughness: 0.1,
    metalness: 0.5,
  });

  const { nodes, materials } = useGLTF("./models/mustang.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
      scale={[2.5, 2.5, 2.5]}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_8.geometry} material={bodyMat} />
        <mesh geometry={nodes.Object_9.geometry} material={lineMat} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_11.geometry} material={materials.Miror} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Black} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_20.geometry} material={bodyMat} />
        <mesh geometry={nodes.Object_21.geometry} material={lineMat} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_33.geometry}
          material={materials.tail_lig}
        />
        <mesh
          geometry={nodes.Object_34.geometry}
          material={materials.Back_main_Light}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_36.geometry}
          material={materials.tail_lig}
        />
        <mesh
          geometry={nodes.Object_37.geometry}
          material={materials.Back_main_Light}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_39.geometry}
          material={materials.tail_lig}
        />
        <mesh
          geometry={nodes.Object_40.geometry}
          material={materials.Back_main_Light}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_48.geometry}
          material={materials.Metal_Part}
        />
        <mesh geometry={nodes.Object_49.geometry} material={materials.Miror} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_55.geometry}
          material={materials.Color_04}
        />
        <mesh
          geometry={nodes.Object_56.geometry}
          material={materials["Color_04.001"]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_66.geometry}
          material={materials.textured}
        />
        <mesh
          geometry={nodes.Object_67.geometry}
          material={materials.Front_light}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_101.geometry} material={materials.Black} />
        <mesh
          geometry={nodes.Object_102.geometry}
          material={materials.interior_brown}
        />
        <mesh
          geometry={nodes.Object_103.geometry}
          material={materials.Metal_Part}
        />
        <mesh
          geometry={nodes.Object_104.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_106.geometry}
          material={materials.textur01}
        />
        <mesh
          geometry={nodes.Object_107.geometry}
          material={materials["Material.005"]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_111.geometry} material={bodyMat} />
        <mesh geometry={nodes.Object_112.geometry} material={lineMat} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_122.geometry} material={bodyMat} />
        <mesh
          geometry={nodes.Object_123.geometry}
          material={materials["Color_04.001"]}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_139.geometry}
          material={materials.Metal_Part}
        />
        <mesh
          geometry={nodes.Object_140.geometry}
          material={materials.textur01}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_148.geometry}
          material={materials.head_lig}
        />
        <mesh
          geometry={nodes.Object_149.geometry}
          material={materials.Metal_back}
        />
        <mesh
          geometry={nodes.Object_150.geometry}
          material={materials.Head_Light}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_166.geometry} material={materials.Black} />
        <mesh
          geometry={nodes.Object_167.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Object_168.geometry}
          material={materials.logo_farmoon}
        />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_172.geometry}
          material={materials.Color_00}
        />
        <mesh
          geometry={nodes.Object_173.geometry}
          material={materials.Metal_Part}
        />
      </group>
      <group position={[0.16, 0.09, -0.03]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_211.geometry}
          material={materials.Metal_Part}
        />
        <mesh geometry={nodes.Object_212.geometry} material={materials.Glass} />
        <mesh
          geometry={nodes.Object_213.geometry}
          material={materials["1_analog"]}
        />
        <mesh
          geometry={nodes.Object_214.geometry}
          material={materials["2_analog"]}
        />
        <mesh
          geometry={nodes.Object_215.geometry}
          material={materials["3_analog"]}
        />
        <mesh
          geometry={nodes.Object_216.geometry}
          material={materials["4_analog"]}
        />
        <mesh
          geometry={nodes.Object_217.geometry}
          material={materials["5_analog"]}
        />
      </group>
      <group position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_223.geometry} material={rimMat} />
        <mesh
          geometry={nodes.Object_224.geometry}
          material={materials["Material.008"]}
        />
      </group>
      <group position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_226.geometry} material={tireMat} />
        <mesh geometry={nodes.Object_227.geometry} material={tireMat} />
      </group>
      <group
        position={[0.11, 0.15, 0.28]}
        rotation={[-1.03, 0, 0]}
        scale={[0.01, 0.03, 0.03]}
      >
        <mesh geometry={nodes.Object_241.geometry} material={materials.Black} />
        <mesh
          geometry={nodes.Object_242.geometry}
          material={materials.Metal_Part}
        />
      </group>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.Material}
        position={[0, 0, -0.02]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.Color_02}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials.interior}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.Glass}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_18.geometry}
        material={materials.black1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_23.geometry}
        material={materials.Black}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_25.geometry}
        material={bodyMat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_27.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_29.geometry}
        material={materials.Color_02}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_31.geometry}
        material={materials["Material.012"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_44.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_46.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_51.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_53.geometry}
        material={bodyMat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_60.geometry}
        material={materials.grille1}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_62.geometry}
        material={materials.Color_02}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_64.geometry}
        material={materials.Color_03}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_69.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_71.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_73.geometry}
        material={materials.material_0}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_75.geometry}
        material={materials.Metal_back}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_77.geometry}
        material={materials.Glass}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_79.geometry}
        material={bodyMat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_81.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_83.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_85.geometry}
        material={materials.FrontCol}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_87.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_89.geometry}
        material={materials["Material.010"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_91.geometry}
        material={materials.detail01}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_93.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_95.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_97.geometry}
        material={materials.FrontCol}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_99.geometry}
        material={materials["Material.023"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_109.geometry}
        material={materials.material_0}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_114.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_116.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_118.geometry}
        material={bodyMat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_120.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_125.geometry}
        material={materials.bbea21f7}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_127.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_129.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_131.geometry}
        material={materials.Color_04}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_133.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_135.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_137.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_142.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_144.geometry}
        material={materials.Color_04}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_146.geometry}
        material={materials.detail02}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_152.geometry}
        material={materials.Glass}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_154.geometry}
        material={materials.Color_00}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_156.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_158.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_160.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_162.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_164.geometry}
        material={materials.detail01}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_170.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_175.geometry}
        material={materials.Black}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_177.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_179.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_181.geometry}
        material={materials.Metal_back}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_183.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_185.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_187.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_189.geometry}
        material={materials.Color_02}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_191.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_193.geometry}
        material={bodyMat}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_195.geometry}
        material={materials.Foregrou}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_197.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_199.geometry}
        material={materials.Color_00}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_201.geometry}
        material={materials.Color_02}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_203.geometry}
        material={materials.Color_04}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_205.geometry}
        material={materials.Black}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_207.geometry}
        material={materials.Black}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_209.geometry}
        material={materials.Metal_Part}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_219.geometry}
        material={materials.Carpet}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_221.geometry}
        material={materials.material}
        position={[0, 0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_229.geometry}
        material={materials.Carpet}
        position={[0.16, 0.11, 0.08]}
        scale={[0.09, 0.09, 0.16]}
      />
      <mesh
        geometry={nodes.Object_231.geometry}
        material={materials.Carpet}
        position={[-0.16, 0.11, 0.08]}
        scale={[0.09, 0.09, 0.16]}
      />
      <mesh
        geometry={nodes.Object_233.geometry}
        material={materials.Logo_Ford}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.11}
      />
      <mesh geometry={nodes.Object_235.geometry} material={materials.Black} />
      <mesh geometry={nodes.Object_236.geometry} material={materials.Glass} />
      <mesh
        geometry={nodes.Object_237.geometry}
        material={materials.Metal_Part}
      />
      <mesh
        geometry={nodes.Object_239.geometry}
        material={materials.Metal_Part}
        position={[0, 0.21, 0.16]}
        scale={0}
      />
      <mesh
        geometry={nodes.Object_244.geometry}
        material={materials["Material.002"]}
        position={[0.47, 0, 0]}
        rotation={[0, 0, 1.6]}
        scale={0.13}
      />
    </group>
  );
}

useGLTF.preload("./models/mustang.glb");
