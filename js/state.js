export const DEFAULT_IBL_STATE = {
  enabled: true,
  intensity: 1.0,
  background: false,

  // IBL Mode: 'procedural' or 'texture'
  mode: 'procedural',
  textureId: 'procedural',
  textureRotation: 0,
  textureScale: 1.0,

  // Procedural Sky Settings (used when mode === 'procedural')
  skyColor: '#e2e8f0',
  horizonColor: '#cbd5e1',
  groundColor: '#64748b',
  skyLevel: 0.3,
  horizonLevel: 0.0,
  groundLevel: -0.3,

  // Key Light (Main soft light: Warm white, offset 45° front-left, gentle atmosphere glow)
  sun1Visible: true,
  sun1Color: '#fff7ed',
  sun1Elevation: 35,
  sun1Azimuth: 135,
  sun1Size: 3.5,
  sun1Intensity: 3.0,
  sun1Atmosphere: 0.8,

  // Fill Light (Secondary light: Cool white, lower intensity, opposite side to lift shadows)
  sun2Visible: true,
  sun2Color: '#f1f5f9',
  sun2Elevation: 25,
  sun2Azimuth: 225,
  sun2Size: 4.5,
  sun2Intensity: 1.2,
  sun2Atmosphere: 0.9,

  // Studio Rim/Floor Reflection Ring (Creates clean metallic edge highlights)
  ringVisible: true,
  ringColor: '#ffffff',
  ringHeight: -2,
  ringIntensity: 1.5
};

export const LIGHT_CONFIGS = [
  // 1. Ambient Fill: Soft, balanced sky-to-ground bounce (neutral daylight tones)
  { 
    id: 'hemi', 
    name: 'Hemisphere Light', 
    type: 'HemisphereLight', 
    color: '#f8fafc',        // Pure neutral white top sky
    groundColor: '#475569',  // Cool neutral gray floor bounce (prevents total black undersides)
    intensity: 0.8,          // Subtle base illumination
    pos: [0, 5, 0], 
    rot: [0, 0, 0], 
    castShadow: false, 
    softShadow: true 
  },

  // 2. Key Light: Classic 45° studio key position (warm daylight, soft primary shadow)
  { 
    id: 'main', 
    name: 'Main Light', 
    type: 'DirectionalLight', 
    color: '#fffbf5',        // Very soft 5600K warm white
    intensity: 2.2,          // Primary light source
    pos: [2.5, 4.0, 3.0],    // Shifted closer to frame a 0.2-unit controller nicely
    rot: [0, 0, 0], 
    castShadow: true, 
    softShadow: true 
  },

  // 3. Rim / Hair Light: Rear kick light to separate the controller handles from dark backgrounds
  { 
    id: 'rim', 
    name: 'Rim Light', 
    type: 'DirectionalLight', 
    color: '#f1f5f9',        // Crisp neutral rim (replaces bright blue)
    intensity: 1.4,          // Highlight edge separator
    pos: [-3.0, 3.5, -2.5],  // Positioned high-behind the object
    rot: [0, 0, 0], 
    castShadow: false, 
    softShadow: true 
  },

  // 4. Front Fill: Low-intensity front light to illuminate recessed controller details / buttons
  { 
    id: 'fill', 
    name: 'Fill Light', 
    type: 'PointLight', 
    color: '#ffffff',        // Pure neutral fill
    intensity: 0.6,          // Low power to prevent blowing out speculars
    pos: [-2.0, 1.5, 2.5],   // Low front-left fill
    rot: [0, 0, 0], 
    castShadow: false, 
    softShadow: true 
  }
];

export const LOCAL_STORAGE_KEY = 'trailpad_omni_settings';

export function createLightConfigState() {
  return LIGHT_CONFIGS.map(cfg => ({
    ...cfg,
    pos: [...cfg.pos],
    rot: [...(cfg.rot || [0, 0, 0])]
  }));
}
