export const DEFAULT_IBL_STATE = {
  enabled: true,
  intensity: 1,
  background: false,
  skyColor: '#1e293b',
  horizonColor: '#38bdf8',
  groundColor: '#0f172a',
  skyLevel: 0.4,
  horizonLevel: 0,
  groundLevel: -0.4,
  sun1Visible: true,
  sun1Color: '#ffffff',
  sun1Elevation: 45,
  sun1Azimuth: 180,
  sun1Size: 1,
  sun1Intensity: 5,
  sun1Atmosphere: 0.5,
  sun2Visible: true,
  sun2Color: '#f59e0b',
  sun2Elevation: 20,
  sun2Azimuth: 45,
  sun2Size: 1.5,
  sun2Intensity: 0,
  sun2Atmosphere: 0.7,
  ringVisible: true,
  ringColor: '#38bdf8',
  ringHeight: 20,
  ringIntensity: 3
};

export const LIGHT_CONFIGS = [
  { id: 'hemi', name: 'Hemisphere Light', type: 'HemisphereLight', color: '#8ab4f8', groundColor: '#080b12', intensity: 1.2, pos: [0, 5, 0], rot: [0, 0, 0], castShadow: false, softShadow: true },
  { id: 'main', name: 'Main Light', type: 'DirectionalLight', color: '#fff5ea', intensity: 2.8, pos: [5, 10, 5], rot: [0, 0, 0], castShadow: true, softShadow: true },
  { id: 'rim', name: 'Rim Light', type: 'DirectionalLight', color: '#62d8ff', intensity: 1.8, pos: [-4, 3, -3], rot: [0, 0, 0], castShadow: false, softShadow: true },
  { id: 'fill', name: 'Fill Light', type: 'PointLight', color: '#a3b8cc', intensity: 1.2, pos: [0, -1, 3], rot: [0, 0, 0], castShadow: false, softShadow: true }
];

export const LOCAL_STORAGE_KEY = 'trailpad_omni_settings';

export function createLightConfigState() {
  return LIGHT_CONFIGS.map(cfg => ({
    ...cfg,
    pos: [...cfg.pos],
    rot: [...(cfg.rot || [0, 0, 0])]
  }));
}
