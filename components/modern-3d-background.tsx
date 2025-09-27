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

    console.log('Initializing 3D background...')
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

    // Enhanced material palette for buildings
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

    // Function to create a modern skyscraper
    function createSkyscraper(height: number, width: number, depth: number): THREE.Group {
      const building = new THREE.Group()
      
      // Main tower
      const towerGeometry = new THREE.BoxGeometry(width, height, depth)
      const tower = new THREE.Mesh(towerGeometry, materials.glass)
      building.add(tower)
      
      // Adding architectural details
      // Horizontal bands
      const bandCount = Math.floor(height / 0.5)
      for (let i = 0; i < bandCount; i++) {
        const bandGeometry = new THREE.BoxGeometry(width * 1.02, 0.02, depth * 1.02)
        const band = new THREE.Mesh(bandGeometry, materials.metal)
        band.position.y = -height/2 + (i / bandCount) * height
        building.add(band)
      }
      
      // Rooftop structure
      const roofGeometry = new THREE.BoxGeometry(width * 0.8, 0.3, depth * 0.8)
      const roof = new THREE.Mesh(roofGeometry, materials.metal)
      roof.position.y = height/2 + 0.15
      building.add(roof)
      
      // Antenna
      const antennaGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.8, 8)
      const antenna = new THREE.Mesh(antennaGeometry, materials.metal)
      antenna.position.y = height/2 + 0.55
      building.add(antenna)
      
      return building
    }

    // Function to create an office building
    function createOfficeBuilding(height: number, width: number, depth: number): THREE.Group {
      const building = new THREE.Group()
      
      // Main structure
      const mainGeometry = new THREE.BoxGeometry(width, height, depth)
      const main = new THREE.Mesh(mainGeometry, materials.office)
      building.add(main)
      
      // Windows grid
      const windowRows = 8
      const windowCols = 4
      for (let row = 0; row < windowRows; row++) {
        for (let col = 0; col < windowCols; col++) {
          const windowGeometry = new THREE.PlaneGeometry(0.15, 0.3)
          const window = new THREE.Mesh(windowGeometry, materials.glass)
          window.position.set(
            (col / (windowCols - 1) - 0.5) * width * 0.8,
            -height/2 + (row / (windowRows - 1)) * height * 0.9,
            depth/2 + 0.01
          )
          building.add(window)
        }
      }
      
      return building
    }

    // Function to create a residential building
    function createResidentialBuilding(height: number, width: number, depth: number): THREE.Group {
      const building = new THREE.Group()
      
      // Main structure
      const mainGeometry = new THREE.BoxGeometry(width, height, depth)
      const main = new THREE.Mesh(mainGeometry, materials.residential)
      building.add(main)
      
      // Balconies
      const balconyCount = 4
      for (let i = 0; i < balconyCount; i++) {
        const balconyGeometry = new THREE.BoxGeometry(width * 1.1, 0.1, 0.3)
        const balcony = new THREE.Mesh(balconyGeometry, materials.concrete)
        balcony.position.set(
          0,
          -height/2 + (i + 0.7) * (height / (balconyCount + 1)),
          depth/2 + 0.15
        )
        building.add(balcony)
      }
      
      return building
    }

    // Function to create a modern low-rise building
    function createLowRiseBuilding(height: number, width: number, depth: number): THREE.Group {
      const building = new THREE.Group()
      
      // Main structure with rounded edges
      const mainGeometry = new THREE.BoxGeometry(width, height, depth)
      const main = new THREE.Mesh(mainGeometry, materials.concrete)
      building.add(main)
      
      // Glass facade
      const glassGeometry = new THREE.BoxGeometry(width * 0.9, height * 0.8, depth * 0.9)
      const glass = new THREE.Mesh(glassGeometry, materials.glass)
      glass.position.y = height * 0.1
      building.add(glass)
      
      // Rooftop garden/terrace
      const roofGeometry = new THREE.BoxGeometry(width * 1.2, 0.2, depth * 1.2)
      const roof = new THREE.Mesh(roofGeometry, materials.concrete)
      roof.position.y = height/2 + 0.1
      building.add(roof)
      
      return building
    }

    // NEW BUILDING DESIGNS:

    // Function to create a helix-twisted tower
    function createHelixTower(height: number, baseRadius: number): THREE.Group {
      const building = new THREE.Group()
      
      // Create helical structure
      const helixSegments = 12
      const segmentHeight = height / helixSegments
      
      for (let i = 0; i < helixSegments; i++) {
        const angle = (i / helixSegments) * Math.PI * 4 // Two full twists
        const radius = baseRadius * (1 - i / helixSegments * 0.3) // Tapering effect
        
        const segmentGeometry = new THREE.BoxGeometry(radius * 2, segmentHeight, radius * 2)
        const segment = new THREE.Mesh(segmentGeometry, materials.glass)
        segment.position.y = -height/2 + i * segmentHeight + segmentHeight/2
        segment.rotation.y = angle
        building.add(segment)
      }
      
      // Top spire
      const spireGeometry = new THREE.ConeGeometry(0.05, 0.6, 8)
      const spire = new THREE.Mesh(spireGeometry, materials.metal)
      spire.position.y = height/2 + 0.3
      building.add(spire)
      
      return building
    }

    // Function to create a cantilevered building
    function createCantileverBuilding(height: number, width: number): THREE.Group {
      const building = new THREE.Group()
      
      // Core structure
      const coreGeometry = new THREE.BoxGeometry(0.15, height, 0.15)
      const core = new THREE.Mesh(coreGeometry, materials.concrete)
      building.add(core)
      
      // Cantilevered floors
      const floorCount = 5
      for (let i = 0; i < floorCount; i++) {
        const floorHeight = 0.1
        const floorWidth = width * (0.7 + i * 0.1) // Increasing width
        const floorGeometry = new THREE.BoxGeometry(floorWidth, floorHeight, 0.3)
        const floor = new THREE.Mesh(floorGeometry, materials.office)
        
        floor.position.y = -height/2 + (i + 1) * (height / (floorCount + 1))
        floor.position.x = (i % 2 === 0 ? 1 : -1) * 0.2 // Alternate sides
        building.add(floor)
      }
      
      return building
    }

    // Function to create a circular plaza building
    function createCircularPlazaBuilding(height: number, radius: number): THREE.Group {
      const building = new THREE.Group()
      
      // Central tower
      const towerGeometry = new THREE.CylinderGeometry(radius * 0.3, radius * 0.3, height, 8)
      const tower = new THREE.Mesh(towerGeometry, materials.glass)
      building.add(tower)
      
      // Surrounding ring structure
      const ringGeometry = new THREE.TorusGeometry(radius * 0.8, 0.08, 8, 24)
      const ring = new THREE.Mesh(ringGeometry, materials.metal)
      ring.position.y = height/2 - 0.5
      ring.rotation.x = Math.PI / 2
      building.add(ring)
      
      // Floating platforms
      for (let i = 0; i < 3; i++) {
        const platformGeometry = new THREE.CylinderGeometry(0.1, 0.15, 0.02, 6)
        const platform = new THREE.Mesh(platformGeometry, materials.green)
        platform.position.y = -height/2 + (i + 1) * (height / 4)
        platform.position.x = Math.sin(i * 1.2) * radius * 0.6
        platform.position.z = Math.cos(i * 1.2) * radius * 0.6
        building.add(platform)
      }
      
      return building
    }

    // Function to create a split-level tower
    function createSplitLevelTower(height: number, width: number): THREE.Group {
      const building = new THREE.Group()
      
      const levels = 6
      const levelHeight = height / levels
      
      for (let i = 0; i < levels; i++) {
        const levelWidth = width * (0.8 + Math.sin(i) * 0.2)
        const levelGeometry = new THREE.BoxGeometry(levelWidth, levelHeight * 0.7, levelWidth)
        const level = new THREE.Mesh(levelGeometry, i % 2 === 0 ? materials.glass : materials.office)
        
        level.position.y = -height/2 + i * levelHeight + levelHeight/2
        level.rotation.y = (i * Math.PI) / 8 // Rotate each level
        
        // Offset every other level
        if (i % 2 === 1) {
          level.position.x = 0.1
          level.position.z = 0.1
        }
        
        building.add(level)
      }
      
      return building
    }

    // Function to create a bridge-connected towers
    function createBridgeTowers(height: number): THREE.Group {
      const building = new THREE.Group()
      
      // Two main towers
      const leftTower = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, height, 0.18),
        materials.glass
      )
      leftTower.position.x = -0.3
      building.add(leftTower)
      
      const rightTower = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, height, 0.18),
        materials.glass
      )
      rightTower.position.x = 0.3
      building.add(rightTower)
      
      // Connecting bridges at different heights
      for (let i = 0; i < 3; i++) {
        const bridgeGeometry = new THREE.BoxGeometry(0.6, 0.03, 0.1)
        const bridge = new THREE.Mesh(bridgeGeometry, materials.metal)
        bridge.position.y = -height/2 + (i + 1) * (height / 4)
        building.add(bridge)
      }
      
      return building
    }

    // Function to create a green sustainable building
    function createGreenBuilding(height: number, width: number): THREE.Group {
      const building = new THREE.Group()
      
      // Main structure with green walls
      const mainGeometry = new THREE.BoxGeometry(width, height, width)
      const main = new THREE.Mesh(mainGeometry, materials.green)
      building.add(main)
      
      // Solar panels on top
      const solarGeometry = new THREE.BoxGeometry(width * 1.1, 0.05, width * 0.3)
      const solar = new THREE.Mesh(solarGeometry, materials.metal)
      solar.position.y = height/2 + 0.025
      solar.rotation.x = Math.PI / 6 // Angled toward sun
      building.add(solar)
      
      // Vertical gardens (green strips)
      for (let i = 0; i < 4; i++) {
        const gardenGeometry = new THREE.BoxGeometry(0.05, height * 0.8, 0.02)
        const garden = new THREE.Mesh(gardenGeometry, materials.green)
        garden.position.x = (i / 3 - 0.5) * width * 0.8
        garden.position.z = width/2 + 0.01
        building.add(garden)
      }
      
      return building
    }

    // Create a diverse cityscape with NEW buildings
    console.log('Creating enhanced 3D buildings...')
    
    // Original buildings
    for (let i = 0; i < 3; i++) {
      const height = 2.5 + Math.random() * 1.5
      const building = createSkyscraper(height, 0.2, 0.2)
      building.position.set(
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 25 - 10
      )
      building.rotation.y = Math.random() * Math.PI
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'skyscraper' }
      buildings.push(building)
      scene.add(building)
    }

    for (let i = 0; i < 3; i++) {
      const height = 1.5 + Math.random() * 1.0
      const building = createOfficeBuilding(height, 0.25, 0.25)
      building.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 30 - 12
      )
      building.rotation.y = Math.random() * Math.PI
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'office' }
      buildings.push(building)
      scene.add(building)
    }

    // NEW BUILDINGS:

    // Helix Towers
    for (let i = 0; i < 2; i++) {
      const height = 2.0 + Math.random() * 1.0
      const building = createHelixTower(height, 0.15)
      building.position.set(
        (Math.random() - 0.5) * 38,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 28 - 14
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'helix' }
      buildings.push(building)
      scene.add(building)
    }

    // Cantilever Buildings
    for (let i = 0; i < 2; i++) {
      const height = 1.8 + Math.random() * 0.8
      const building = createCantileverBuilding(height, 0.4)
      building.position.set(
        (Math.random() - 0.5) * 42,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 32 - 16
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'cantilever' }
      buildings.push(building)
      scene.add(building)
    }

    // Circular Plaza Buildings
    for (let i = 0; i < 2; i++) {
      const height = 1.6 + Math.random() * 0.7
      const building = createCircularPlazaBuilding(height, 0.25)
      building.position.set(
        (Math.random() - 0.5) * 36,
        (Math.random() - 0.5) * 17,
        (Math.random() - 0.5) * 26 - 13
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'circular' }
      buildings.push(building)
      scene.add(building)
    }

    // Split-Level Towers
    for (let i = 0; i < 2; i++) {
      const height = 2.2 + Math.random() * 1.2
      const building = createSplitLevelTower(height, 0.22)
      building.position.set(
        (Math.random() - 0.5) * 39,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 29 - 14
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'splitlevel' }
      buildings.push(building)
      scene.add(building)
    }

    // Bridge-Connected Towers
    for (let i = 0; i < 2; i++) {
      const height = 2.1 + Math.random() * 0.9
      const building = createBridgeTowers(height)
      building.position.set(
        (Math.random() - 0.5) * 41,
        (Math.random() - 0.5) * 13,
        (Math.random() - 0.5) * 31 - 15
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'bridge' }
      buildings.push(building)
      scene.add(building)
    }

    // Green Sustainable Buildings
    for (let i = 0; i < 2; i++) {
      const height = 1.4 + Math.random() * 0.6
      const building = createGreenBuilding(height, 0.28)
      building.position.set(
        (Math.random() - 0.5) * 37,
        (Math.random() - 0.5) * 19,
        (Math.random() - 0.5) * 27 - 13
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'green' }
      buildings.push(building)
      scene.add(building)
    }

    // ADDITIONAL BUILDING TYPES:

    // Function to create a stepped pyramid building
    function createSteppedPyramid(height: number, baseSize: number): THREE.Group {
      const building = new THREE.Group()
      
      const steps = 5
      const stepHeight = height / steps
      
      for (let i = 0; i < steps; i++) {
        const stepSize = baseSize * (1 - i / steps * 0.3)
        const stepGeometry = new THREE.BoxGeometry(stepSize, stepHeight, stepSize)
        const step = new THREE.Mesh(stepGeometry, materials.concrete)
        step.position.y = -height/2 + i * stepHeight + stepHeight/2
        building.add(step)
      }
      
      // Top observation deck
      const deckGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.3, 8)
      const deck = new THREE.Mesh(deckGeometry, materials.metal)
      deck.position.y = height/2 + 0.15
      building.add(deck)
      
      return building
    }

    // Function to create a honeycomb building
    function createHoneycombBuilding(height: number, radius: number): THREE.Group {
      const building = new THREE.Group()
      
      // Main hexagonal structure
      const hexGeometry = new THREE.CylinderGeometry(radius, radius, height, 6)
      const hex = new THREE.Mesh(hexGeometry, materials.glass)
      building.add(hex)
      
      // Honeycomb pattern on sides
      for (let i = 0; i < 3; i++) {
        const cellGeometry = new THREE.CylinderGeometry(radius * 0.3, radius * 0.3, height * 0.8, 6)
        const cell = new THREE.Mesh(cellGeometry, materials.concrete)
        cell.position.x = Math.cos(i * Math.PI / 3) * radius * 0.7
        cell.position.z = Math.sin(i * Math.PI / 3) * radius * 0.7
        building.add(cell)
      }
      
      return building
    }

    // Function to create a floating platform building
    function createFloatingPlatform(height: number): THREE.Group {
      const building = new THREE.Group()
      
      // Central pillar
      const pillarGeometry = new THREE.CylinderGeometry(0.08, 0.12, height, 8)
      const pillar = new THREE.Mesh(pillarGeometry, materials.metal)
      building.add(pillar)
      
      // Floating platforms at different heights
      for (let i = 0; i < 4; i++) {
        const platformGeometry = new THREE.CylinderGeometry(0.2, 0.25, 0.05, 8)
        const platform = new THREE.Mesh(platformGeometry, materials.glass)
        platform.position.y = -height/2 + (i + 1) * (height / 5)
        building.add(platform)
        
        // Support cables
        const cableGeometry = new THREE.CylinderGeometry(0.01, 0.01, 0.3, 4)
        const cable = new THREE.Mesh(cableGeometry, materials.metal)
        cable.position.y = platform.position.y - 0.15
        cable.position.x = 0.15
        cable.rotation.z = Math.PI / 6
        building.add(cable)
      }
      
      return building
    }

    // Function to create a crystalline building
    function createCrystallineBuilding(height: number): THREE.Group {
      const building = new THREE.Group()
      
      // Main crystal structure
      const crystalGeometry = new THREE.ConeGeometry(0.2, height, 8)
      const crystal = new THREE.Mesh(crystalGeometry, materials.glass)
      building.add(crystal)
      
      // Smaller crystals around the base
      for (let i = 0; i < 6; i++) {
        const smallCrystalGeometry = new THREE.ConeGeometry(0.08, height * 0.4, 6)
        const smallCrystal = new THREE.Mesh(smallCrystalGeometry, materials.glass)
        smallCrystal.position.x = Math.cos(i * Math.PI / 3) * 0.3
        smallCrystal.position.z = Math.sin(i * Math.PI / 3) * 0.3
        smallCrystal.position.y = -height/2 + height * 0.2
        building.add(smallCrystal)
      }
      
      return building
    }

    // Function to create a modular building
    function createModularBuilding(height: number): THREE.Group {
      const building = new THREE.Group()
      
      // Modular cubes stacked irregularly
      const modules = 8
      for (let i = 0; i < modules; i++) {
        const moduleSize = 0.15 + Math.random() * 0.1
        const moduleGeometry = new THREE.BoxGeometry(moduleSize, moduleSize, moduleSize)
        const module = new THREE.Mesh(moduleGeometry, materials.office)
        
        module.position.x = (Math.random() - 0.5) * 0.4
        module.position.y = -height/2 + (i / modules) * height + moduleSize/2
        module.position.z = (Math.random() - 0.5) * 0.4
        module.rotation.y = Math.random() * Math.PI / 4
        
        building.add(module)
      }
      
      return building
    }

    // Function to create a spiral tower
    function createSpiralTower(height: number): THREE.Group {
      const building = new THREE.Group()
      
      // Spiral structure
      const spiralSegments = 20
      for (let i = 0; i < spiralSegments; i++) {
        const angle = (i / spiralSegments) * Math.PI * 6
        const radius = 0.15 * (1 - i / spiralSegments * 0.5)
        const segmentHeight = height / spiralSegments
        
        const segmentGeometry = new THREE.BoxGeometry(radius * 2, segmentHeight, radius * 2)
        const segment = new THREE.Mesh(segmentGeometry, materials.glass)
        
        segment.position.x = Math.cos(angle) * radius
        segment.position.z = Math.sin(angle) * radius
        segment.position.y = -height/2 + i * segmentHeight + segmentHeight/2
        segment.rotation.y = angle
        
        building.add(segment)
      }
      
      return building
    }

    // Create additional buildings
    console.log('Adding more building types...')

    // Stepped Pyramids
    for (let i = 0; i < 3; i++) {
      const height = 1.8 + Math.random() * 0.8
      const building = createSteppedPyramid(height, 0.3)
      building.position.set(
        (Math.random() - 0.5) * 44,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 33 - 16
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'pyramid' }
      buildings.push(building)
      scene.add(building)
    }

    // Honeycomb Buildings
    for (let i = 0; i < 2; i++) {
      const height = 1.6 + Math.random() * 0.7
      const building = createHoneycombBuilding(height, 0.2)
      building.position.set(
        (Math.random() - 0.5) * 46,
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 34 - 17
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'honeycomb' }
      buildings.push(building)
      scene.add(building)
    }

    // Floating Platforms
    for (let i = 0; i < 3; i++) {
      const height = 2.0 + Math.random() * 1.0
      const building = createFloatingPlatform(height)
      building.position.set(
        (Math.random() - 0.5) * 48,
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 36 - 18
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'floating' }
      buildings.push(building)
      scene.add(building)
    }

    // Crystalline Buildings
    for (let i = 0; i < 2; i++) {
      const height = 1.5 + Math.random() * 0.8
      const building = createCrystallineBuilding(height)
      building.position.set(
        (Math.random() - 0.5) * 42,
        (Math.random() - 0.5) * 21,
        (Math.random() - 0.5) * 32 - 16
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'crystal' }
      buildings.push(building)
      scene.add(building)
    }

    // Modular Buildings
    for (let i = 0; i < 3; i++) {
      const height = 1.7 + Math.random() * 0.9
      const building = createModularBuilding(height)
      building.position.set(
        (Math.random() - 0.5) * 45,
        (Math.random() - 0.5) * 19,
        (Math.random() - 0.5) * 35 - 17
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'modular' }
      buildings.push(building)
      scene.add(building)
    }

    // Spiral Towers
    for (let i = 0; i < 2; i++) {
      const height = 2.3 + Math.random() * 1.1
      const building = createSpiralTower(height)
      building.position.set(
        (Math.random() - 0.5) * 47,
        (Math.random() - 0.5) * 17,
        (Math.random() - 0.5) * 37 - 18
      )
      building.userData = { originalX: building.position.x, originalY: building.position.y, originalZ: building.position.z, type: 'spiral' }
      buildings.push(building)
      scene.add(building)
    }

    // Add subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    // Add directional light for better depth perception
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(5, 5, 5)
    scene.add(directionalLight)

    // Enhanced grid for better spatial reference
    const grid = new THREE.GridHelper(30, 30, 0xffffff, 0xffffff)
    grid.material.opacity = 0.02
    grid.material.transparent = true
    grid.position.z = -8
    scene.add(grid)

    camera.position.z = 8
    
    console.log('Total buildings created:', buildings.length)

    // Mouse interaction handler
    const handleMouseMove = (event: MouseEvent) => {
      if (!mountRef.current) return
      
      const rect = mountRef.current.getBoundingClientRect()
      mouseRef.current.x = (event.clientX - rect.left) / rect.width - 0.5
      mouseRef.current.y = (event.clientY - rect.top) / rect.height - 0.5
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Enhanced animation with NEW building-specific behaviors
    const animate = () => {
      requestAnimationFrame(animate)

      const time = Date.now() * 0.0008
      const mouseDistance = Math.sqrt(mouseRef.current.x ** 2 + mouseRef.current.y ** 2)

      buildings.forEach((building, index) => {
        const buildingType = building.userData.type
        const mouseX = mouseRef.current.x * (0.3 + (index % 4) * 0.2)
        const mouseY = mouseRef.current.y * (0.3 + (index % 4) * 0.2)
        
        const originalX = building.userData.originalX
        const originalY = building.userData.originalY
        const originalZ = building.userData.originalZ
        
        // Enhanced behaviors for NEW building types
        switch(buildingType) {
          case 'skyscraper':
            building.rotation.z = mouseX * 0.01
            building.rotation.x = -mouseY * 0.01
            building.position.y = originalY + Math.sin(time + index) * 0.1
            break
            
          case 'office':
            building.position.x = originalX + Math.cos(time * 0.5 + index) * 0.2
            building.position.z = originalZ + Math.sin(time * 0.5 + index) * 0.1
            building.rotation.y += 0.001
            break
            
          case 'helix':
            // Helix towers have rotating animation
            building.rotation.y += 0.002
            building.position.y = originalY + Math.sin(time * 0.8 + index) * 0.15
            building.position.x = originalX + mouseX * 0.3
            break
            
          case 'cantilever':
            // Cantilever buildings sway differently
            building.rotation.z = Math.sin(time + index) * 0.02
            building.position.x = originalX + Math.cos(time * 0.6 + index) * 0.25
            break
            
          case 'circular':
            // Circular buildings rotate and float
            building.rotation.y += 0.0015
            building.position.y = originalY + Math.cos(time * 0.9 + index) * 0.12
            building.children.forEach((child, childIndex) => {
              if (child.type === 'Mesh') {
                child.rotation.y += 0.003 * (childIndex % 2 === 0 ? 1 : -1)
              }
            })
            break
            
          case 'splitlevel':
            // Split levels move independently
            building.children.forEach((child, childIndex) => {
              if (child.type === 'Mesh') {
                child.position.y += Math.sin(time * 0.7 + childIndex) * 0.005
                child.rotation.y += 0.001 * (childIndex % 2 === 0 ? 1 : -1)
              }
            })
            break
            
          case 'bridge':
            // Bridge towers sway with connection constraints
            building.rotation.x = Math.sin(time * 0.5 + index) * 0.01
            building.position.y = originalY + Math.cos(time + index) * 0.08
            break
            
          case 'green':
            // Green buildings have gentle growth-like motion
            building.scale.y = 1 + Math.sin(time * 0.3 + index) * 0.05
            building.position.y = originalY + Math.sin(time * 0.4 + index) * 0.1
            break
            
          case 'pyramid':
            // Pyramids have stable, monumental presence
            building.rotation.y += 0.0008
            building.position.y = originalY + Math.sin(time * 0.2 + index) * 0.05
            break
            
          case 'honeycomb':
            // Honeycomb buildings have organic, flowing motion
            building.rotation.y += 0.0012
            building.position.y = originalY + Math.sin(time * 0.6 + index) * 0.08
            building.children.forEach((child, childIndex) => {
              if (child.type === 'Mesh') {
                child.rotation.y += 0.002 * (childIndex % 2 === 0 ? 1 : -1)
              }
            })
            break
            
          case 'floating':
            // Floating platforms have gentle bobbing motion
            building.position.y = originalY + Math.sin(time * 0.8 + index) * 0.12
            building.children.forEach((child, childIndex) => {
              if (child.type === 'Mesh') {
                child.position.y += Math.sin(time * 0.5 + childIndex) * 0.003
              }
            })
            break
            
          case 'crystal':
            // Crystalline buildings sparkle and rotate
            building.rotation.y += 0.0015
            building.rotation.x = Math.sin(time * 0.4 + index) * 0.01
            building.children.forEach((child, childIndex) => {
              if (child.type === 'Mesh') {
                child.rotation.y += 0.003 * (childIndex % 2 === 0 ? 1 : -1)
              }
            })
            break
            
          case 'modular':
            // Modular buildings have independent module movement
            building.children.forEach((child, childIndex) => {
              if (child.type === 'Mesh') {
                child.position.x += Math.sin(time * 0.3 + childIndex) * 0.002
                child.position.z += Math.cos(time * 0.3 + childIndex) * 0.002
                child.rotation.y += 0.0008 * (childIndex % 2 === 0 ? 1 : -1)
              }
            })
            break
            
          case 'spiral':
            // Spiral towers have continuous rotation
            building.rotation.y += 0.002
            building.position.y = originalY + Math.sin(time * 0.7 + index) * 0.1
            building.children.forEach((child, childIndex) => {
              if (child.type === 'Mesh') {
                child.rotation.y += 0.001 * (childIndex % 3 === 0 ? 1 : -0.5)
              }
            })
            break
            
          default:
            building.position.x += Math.sin(time + index) * 0.001
            building.position.y += Math.cos(time + index) * 0.001
        }
        
        // Universal subtle animations
        building.rotation.y += 0.0005
        building.position.z += Math.sin(time * 0.5 + index) * 0.0003
      })

      // Dynamic camera movement
      camera.position.x = mouseRef.current.x * 0.5
      camera.position.y = mouseRef.current.y * 0.3
      camera.position.z = 8 + mouseDistance * 0.2
      
      camera.lookAt(
        mouseRef.current.x * 0.3,
        mouseRef.current.y * 0.2,
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