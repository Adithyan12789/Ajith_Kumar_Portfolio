"use client"
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function Modern3DBackground() {
  const mountRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!mountRef.current) {
      console.log('Mount ref not available')
      return
    }

    console.log('Initializing 3D building blocks...')
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "low-power"
    })

    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mountRef.current.appendChild(renderer.domElement)
    
    console.log('Renderer created, canvas size:', mountRef.current.clientWidth, 'x', mountRef.current.clientHeight)

    // Building material palette
    const materials = {
      glass: new THREE.MeshPhysicalMaterial({ 
        color: 0x88ccff,
        transmission: 0.9,
        opacity: 0.1,
        transparent: true,
        roughness: 0.1,
        metalness: 0.05
      }),
      concrete: new THREE.MeshStandardMaterial({ 
        color: 0xaaaaaa,
        roughness: 0.8,
        metalness: 0.2
      }),
      metal: new THREE.MeshStandardMaterial({ 
        color: 0xcccccc,
        roughness: 0.4,
        metalness: 0.8
      }),
      office: new THREE.MeshStandardMaterial({ 
        color: 0x4a5568,
        roughness: 0.7,
        metalness: 0.1
      }),
      residential: new THREE.MeshStandardMaterial({ 
        color: 0x2d3748,
        roughness: 0.6,
        metalness: 0.2
      }),
      green: new THREE.MeshStandardMaterial({ 
        color: 0x2ecc71,
        roughness: 0.7,
        metalness: 0.1
      }),
      gold: new THREE.MeshStandardMaterial({ 
        color: 0xffd700,
        roughness: 0.3,
        metalness: 0.9
      })
    }

    const buildings: THREE.Group[] = []

    // Function to create a basic building block
    function createBasicBlock(height: number, width: number, depth: number, material: THREE.Material): THREE.Mesh {
      const geometry = new THREE.BoxGeometry(width, height, depth)
      return new THREE.Mesh(geometry, material)
    }

    // Function to create a simple skyscraper from stacked blocks
    function createStackedTower(baseHeight: number, levels: number): THREE.Group {
      const tower = new THREE.Group()
      
      for (let i = 0; i < levels; i++) {
        const levelHeight = baseHeight * (0.8 - i * 0.1)
        const levelWidth = 0.2 * (1 - i * 0.05)
        const levelDepth = 0.2 * (1 - i * 0.05)
        
        const level = createBasicBlock(levelHeight, levelWidth, levelDepth, 
          i % 3 === 0 ? materials.glass : materials.office)
        
        level.position.y = (i * baseHeight) - (levels * baseHeight) / 2 + levelHeight / 2
        tower.add(level)
      }
      
      return tower
    }

    // Function to create a modular building from multiple blocks
    function createModularBuilding(): THREE.Group {
      const building = new THREE.Group()
      const baseSize = 0.3
      
      // Main structure
      const mainBlock = createBasicBlock(1.5, baseSize, baseSize, materials.concrete)
      building.add(mainBlock)
      
      // Additional blocks attached to sides
      const sideBlocks = [
        { x: baseSize/2 + 0.08, y: -0.3, z: 0, size: [0.1, 0.4, 0.1] },
        { x: -baseSize/2 - 0.08, y: 0.2, z: 0, size: [0.1, 0.3, 0.1] },
        { x: 0, y: 0.8, z: baseSize/2 + 0.08, size: [0.15, 0.2, 0.1] },
        { x: 0, y: -0.6, z: -baseSize/2 - 0.08, size: [0.12, 0.25, 0.1] }
      ]
      
      sideBlocks.forEach((block, index) => {
        const sideBlock = createBasicBlock(block.size[1], block.size[0], block.size[2], 
          index % 2 === 0 ? materials.metal : materials.glass)
        sideBlock.position.set(block.x, block.y, block.z)
        building.add(sideBlock)
      })
      
      return building
    }

    // Function to create a bridge structure from blocks
    function createBridgeStructure(): THREE.Group {
      const bridge = new THREE.Group()
      
      // Support pillars
      for (let i = -1; i <= 1; i += 2) {
        const pillar = createBasicBlock(1.2, 0.08, 0.08, materials.metal)
        pillar.position.x = i * 0.3
        bridge.add(pillar)
      }
      
      // Bridge deck
      const deck = createBasicBlock(0.05, 0.7, 0.15, materials.concrete)
      bridge.add(deck)
      
      // Cross supports
      for (let i = -2; i <= 2; i++) {
        const support = createBasicBlock(0.02, 0.4, 0.02, materials.metal)
        support.position.y = 0.3 + i * 0.1
        support.rotation.z = Math.PI / 4
        bridge.add(support)
      }
      
      return bridge
    }

    // Function to create a pyramid structure from blocks
    function createBlockPyramid(): THREE.Group {
      const pyramid = new THREE.Group()
      const levels = 5
      const baseSize = 0.4
      
      for (let level = 0; level < levels; level++) {
        const levelSize = baseSize * (1 - level / levels)
        const levelHeight = 0.15
        const blocksInLevel = levels - level
        
        for (let i = 0; i < blocksInLevel; i++) {
          for (let j = 0; j < blocksInLevel; j++) {
            const block = createBasicBlock(levelHeight, levelSize / blocksInLevel, levelSize / blocksInLevel, 
              materials.concrete)
            block.position.set(
              (i - (blocksInLevel - 1) / 2) * (levelSize / blocksInLevel),
              level * levelHeight,
              (j - (blocksInLevel - 1) / 2) * (levelSize / blocksInLevel)
            )
            pyramid.add(block)
          }
        }
      }
      
      return pyramid
    }

    // Function to create a rotating tower from angled blocks
    function createSpiralBlockTower(): THREE.Group {
      const tower = new THREE.Group()
      const levels = 8
      const baseHeight = 0.2
      
      for (let i = 0; i < levels; i++) {
        const angle = (i / levels) * Math.PI * 4
        const block = createBasicBlock(baseHeight, 0.15, 0.15, 
          i % 2 === 0 ? materials.glass : materials.metal)
        
        block.position.y = i * baseHeight - (levels * baseHeight) / 2
        block.rotation.y = angle
        tower.add(block)
      }
      
      return tower
    }

    // Function to create a modern geometric structure
    function createGeometricStructure(): THREE.Group {
      const structure = new THREE.Group()
      
      // Central core
      const core = createBasicBlock(1.0, 0.1, 0.1, materials.metal)
      structure.add(core)
      
      // Horizontal beams at different heights
      const beams = [
        { y: -0.4, length: 0.6, rotation: 0 },
        { y: 0, length: 0.8, rotation: Math.PI / 4 },
        { y: 0.4, length: 0.5, rotation: Math.PI / 2 }
      ]
      
      beams.forEach(beam => {
        const beamMesh = createBasicBlock(0.05, beam.length, 0.05, materials.glass)
        beamMesh.position.y = beam.y
        beamMesh.rotation.y = beam.rotation
        structure.add(beamMesh)
      })
      
      return structure
    }

    // Function to create a simple block cityscape
    function createBlockCluster(): THREE.Group {
      const cluster = new THREE.Group()
      const blockCount = 12
      
      for (let i = 0; i < blockCount; i++) {
        const height = 0.3 + Math.random() * 0.7
        const width = 0.1 + Math.random() * 0.2
        const depth = 0.1 + Math.random() * 0.2
        
        const block = createBasicBlock(height, width, depth, 
          Math.random() > 0.5 ? materials.office : materials.concrete)
        
        block.position.set(
          (Math.random() - 0.5) * 1.5,
          height / 2 - 0.5,
          (Math.random() - 0.5) * 1.5
        )
        
        block.rotation.y = Math.random() * Math.PI
        cluster.add(block)
      }
      
      return cluster
    }

    // Create various building block structures
    console.log('Creating 3D building blocks...')

    // Stacked Towers
    for (let i = 0; i < 4; i++) {
      const levels = 5 + Math.floor(Math.random() * 4)
      const building = createStackedTower(0.25, levels)
      building.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 20 - 8
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'stacked' }
      buildings.push(building)
      scene.add(building)
    }

    // Modular Buildings
    for (let i = 0; i < 5; i++) {
      const building = createModularBuilding()
      building.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 25 - 10
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'modular' }
      buildings.push(building)
      scene.add(building)
    }

    // Bridge Structures
    for (let i = 0; i < 3; i++) {
      const building = createBridgeStructure()
      building.position.set(
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 22 - 9
      )
      building.rotation.y = Math.random() * Math.PI
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'bridge' }
      buildings.push(building)
      scene.add(building)
    }

    // Block Pyramids
    for (let i = 0; i < 4; i++) {
      const building = createBlockPyramid()
      building.position.set(
        (Math.random() - 0.5) * 32,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 26 - 11
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'pyramid' }
      buildings.push(building)
      scene.add(building)
    }

    // Spiral Towers
    for (let i = 0; i < 3; i++) {
      const building = createSpiralBlockTower()
      building.position.set(
        (Math.random() - 0.5) * 26,
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 23 - 12
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'spiral' }
      buildings.push(building)
      scene.add(building)
    }

    // Geometric Structures
    for (let i = 0; i < 4; i++) {
      const building = createGeometricStructure()
      building.position.set(
        (Math.random() - 0.5) * 29,
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.5) * 24 - 13
      )
      building.rotation.y = Math.random() * Math.PI
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'geometric' }
      buildings.push(building)
      scene.add(building)
    }

    // Block Clusters
    for (let i = 0; i < 6; i++) {
      const building = createBlockCluster()
      building.position.set(
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 28 - 14
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'cluster' }
      buildings.push(building)
      scene.add(building)
    }

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Subtle grid for reference
    const grid = new THREE.GridHelper(20, 20, 0xffffff, 0xffffff)
    grid.material.opacity = 0.03
    grid.material.transparent = true
    grid.position.z = -5
    scene.add(grid)

    camera.position.z = 6
    
    console.log('Total building blocks created:', buildings.length)

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      if (!mountRef.current) return
      
      const rect = mountRef.current.getBoundingClientRect()
      mouseRef.current.x = (event.clientX - rect.left) / rect.width - 0.5
      mouseRef.current.y = (event.clientY - rect.top) / rect.height - 0.5
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation with block-specific behaviors
    const animate = () => {
      requestAnimationFrame(animate)

      const time = Date.now() * 0.001
      const mouseDistance = Math.sqrt(mouseRef.current.x ** 2 + mouseRef.current.y ** 2)

      buildings.forEach((building, index) => {
        const buildingType = building.userData.type
        const mouseX = mouseRef.current.x * (0.2 + (index % 3) * 0.1)
        const mouseY = mouseRef.current.y * (0.2 + (index % 3) * 0.1)
        
        const originalX = building.userData.originalX
        const originalY = building.userData.originalY
        const originalZ = building.userData.originalZ
        
        // Different behaviors for each block type
        switch(buildingType) {
          case 'stacked':
            // Stacked towers sway gently
            building.rotation.x = mouseY * 0.02
            building.rotation.z = mouseX * 0.02
            building.position.y = originalY + Math.sin(time * 0.5 + index) * 0.1
            break
            
          case 'modular':
            // Modular buildings have independent block movement
            building.children.forEach((child, childIndex) => {
              if (child.type === 'Mesh') {
                child.position.y += Math.sin(time * 0.3 + childIndex) * 0.005
                child.rotation.y += 0.001 * (childIndex % 2 === 0 ? 1 : -1)
              }
            })
            building.position.x = originalX + Math.cos(time * 0.4 + index) * 0.15
            break
            
          case 'bridge':
            // Bridge structures have slight bending
            building.rotation.x = Math.sin(time * 0.6 + index) * 0.01
            building.position.y = originalY + Math.cos(time + index) * 0.08
            break
            
          case 'pyramid':
            // Pyramids are stable with subtle rotation
            building.rotation.y += 0.0005
            building.position.y = originalY + Math.sin(time * 0.2 + index) * 0.03
            break
            
          case 'spiral':
            // Spiral towers rotate continuously
            building.rotation.y += 0.001
            building.position.y = originalY + Math.sin(time * 0.7 + index) * 0.06
            break
            
          case 'geometric':
            // Geometric structures have precise movements
            building.rotation.y += 0.0008
            building.children.forEach((child, childIndex) => {
              if (child.type === 'Mesh') {
                child.rotation.x += 0.0003 * (childIndex % 2 === 0 ? 1 : -1)
              }
            })
            break
            
          case 'cluster':
            // Clusters have organic, scattered movement
            building.children.forEach((child, childIndex) => {
              if (child.type === 'Mesh') {
                child.position.y += Math.sin(time * 0.4 + childIndex) * 0.003
                child.rotation.y += 0.0005 * (childIndex % 3)
              }
            })
            break
        }
        
        // Universal subtle animations
        building.position.x += Math.sin(time * 0.3 + index) * 0.0002
        building.position.z += Math.cos(time * 0.3 + index) * 0.0002
      })

      // Camera movement
      camera.position.x = mouseRef.current.x * 0.3
      camera.position.y = mouseRef.current.y * 0.2
      camera.position.z = 6 + mouseDistance * 0.1
      
      camera.lookAt(
        mouseRef.current.x * 0.2,
        mouseRef.current.y * 0.1,
        0
      )

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!mountRef.current) return
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (mountRef.current && renderer.domElement.parentNode) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ 
        mixBlendMode: 'normal',
        opacity: 1
      }}
    />
  )
}