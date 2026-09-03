with open(r'D:\Dev\TrailStudio\ui\ui.html', 'r', encoding='utf-8') as f:
    content = f.read()

old = '''    <!-- Image Based Lighting Panel -->
    <div class="panel">
      <div class="panel-header" onclick="togglePanel(this)">
        <div class="panel-header-left">
          <input type="checkbox" id="ibl-enable" checked onclick="event.stopPropagation()">
          <label for="ibl-enable" onclick="event.stopPropagation()">Image Based Lighting</label>
        </div>
        <svg class="caret" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,8 20,16 4,16"/>
        </svg>
      </div>
      <div class="panel-body">
        <div class="panel-body-content">
          <div class="slider-row">
            <div class="row">
              <div class="label-with-icon">
                <span>Intensity</span>
                <svg class="reset-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              </div>
              <input type="text" class="drag-input" value="1.0" data-slider="ibl-int-slider">
            </div>
            <div class="slider-controls">
              <input type="range" id="ibl-int-slider" min="0" max="3" step="0.1" value="1.0">
            </div>
          </div>
<div class="row-stacked">
            <span>Sky Color</span>
            <div class="color-swatch-wrapper">
              <input type="color" value="#4a90e2">
              <div class="color-swatch-display" style="background-color: #4a90e2;"></div>
            </div>
          </div>


          <div class="row-stacked">
            <span>Horizon Color</span>
            <div class="color-swatch-wrapper">
              <input type="color" value="#d1e8ff">
              <div class="color-swatch-display" style="background-color: #d1e8ff;"></div>
            </div>
          </div>


          <div class="row-stacked">
            <span>Ground Color</span>
            <div class="color-swatch-wrapper">
              <input type="color" value="#2b2b30">
              <div class="color-swatch-display" style="background-color: #2b2b30;"></div>
            </div>
          </div>
          <div class="slider-row">
            <div class="row">
              <div class="label-with-icon">
                <span>Sky Height</span>
                <svg class="reset-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              </div>
              <input type="text" class="drag-input" value="1.0" data-slider="sky-lvl-slider">
            </div>
            <div class="slider-controls">
              <input type="range" id="sky-lvl-slider" min="0" max="2" step="0.05" value="1.0">
            </div>
          </div>
          <div class="slider-row">
            <div class="row">
              <div class="label-with-icon">
                <span>Horizon Height</span>
                <svg class="reset-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              </div>
              <input type="text" class="drag-input" value="0.5" data-slider="horiz-lvl-slider">
            </div>
            <div class="slider-controls">
              <input type="range" id="horiz-lvl-slider" min="0" max="2" step="0.05" value="0.5">
            </div>
          </div>
          <div class="slider-row">
            <div class="row">
              <div class="label-with-icon">
                <span>Ground Height</span>
                <svg class="reset-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              </div>
              <input type="text" class="drag-input" value="0.0" data-slider="grnd-lvl-slider">
            </div>
            <div class="slider-controls">
              <input type="range" id="grnd-lvl-slider" min="-1" max="1" step="0.05" value="0.0">
            </div>
          </div>
          <div class="checkbox-row">
            <input type="checkbox" id="ibl-show-bg" checked>
            <label for="ibl-show-bg">Show in background</label>
          </div>
        </div>
      </div>
    </div>'''

new = '''    <!-- Image Based Lighting Panel -->
    <div class="panel">
      <div class="panel-header" onclick="togglePanel(this)">
        <div class="panel-header-left">
          <input type="checkbox" id="ibl-enable" checked onclick="event.stopPropagation()">
          <label for="ibl-enable" onclick="event.stopPropagation()">Image Based Lighting</label>
        </div>
        <svg class="caret" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12,8 20,16 4,16"/>
        </svg>
      </div>
      <div class="panel-body">
        <div class="panel-body-content">
          <div class="slider-row">
            <div class="row">
              <div class="label-with-icon">
                <span>Intensity</span>
                <svg class="reset-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              </div>
              <input type="text" class="drag-input" value="1.0" data-slider="ibl-int-slider">
            </div>
            <div class="slider-controls">
              <input type="range" id="ibl-int-slider" min="0" max="3" step="0.1" value="1.0">
            </div>
          </div>

          <!-- IBL Mode Selection -->
          <div class="row-stacked" style="margin-top: 8px;">
            <span>Mode</span>
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
              <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
                <input type="radio" name="iblMode" value="procedural" checked> Procedural
              </label>
              <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
                <input type="radio" name="iblMode" value="texture"> Texture
              </label>
            </div>
          </div>

          <!-- Texture Selection (Texture Mode) -->
          <div class="row-stacked" id="iblTextureControls" style="display: none;">
            <span>Environment Texture</span>
            <select id="iblTextureSelect" style="width: 100%; padding: 6px 8px; background: #2a2a30; border: 1px solid #3a3a42; color: #fff; border-radius: 4px; font-size: 12px; font-family: inherit;">
              <option value="procedural">Procedural Sky</option>
              <option value="studio">Studio</option>
              <option value="studio2">Studio 2</option>
              <option value="outdoors">Outdoors</option>
              <option value="neon">Neon</option>
            </select>
          </div>

          <!-- Texture Rotation & Scale (Texture Mode) -->
          <div class="slider-row" id="iblTextureTransformControls" style="display: none;">
            <div class="row">
              <div class="label-with-icon">
                <span>Rotation</span>
                <svg class="reset-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              </div>
              <input type="text" class="drag-input" value="0.0" id="iblTextureRotationInput">
            </div>
            <div class="slider-controls">
              <input type="range" id="iblTextureRotation" min="-3.14" max="3.14" step="0.01" value="0.0">
            </div>
          </div>

          <div class="slider-row" id="iblTextureScaleControls" style="display: none;">
            <div class="row">
              <div class="label-with-icon">
                <span>Scale</span>
                <svg class="reset-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
              </div>
              <input type="text" class="drag-input" value="1.0" id="iblTextureScaleInput">
            </div>
            <div class="slider-controls">
              <input type="range" id="iblTextureScale" min="0.1" max="5.0" step="0.05" value="1.0">
            </div>
          </div>

          <!-- Procedural Sky Controls -->
          <div id="iblProceduralControls">
            <div class="row-stacked">
              <span>Sky Color</span>
              <div class="color-swatch-wrapper">
                <input type="color" id="iblSkyColor" class="custom-color-picker" data-value="#e2e8f0" value="#e2e8f0">
                <div class="color-swatch-display" style="background-color: #e2e8f0;"></div>
              </div>
            </div>

            <div class="row-stacked">
              <span>Horizon Color</span>
              <div class="color-swatch-wrapper">
                <input type="color" id="iblHorizonColor" class="custom-color-picker" data-value="#cbd5e1" value="#cbd5e1">
                <div class="color-swatch-display" style="background-color: #cbd5e1;"></div>
              </div>
            </div>

            <div class="row-stacked">
              <span>Ground Color</span>
              <div class="color-swatch-wrapper">
                <input type="color" id="iblGroundColor" class="custom-color-picker" data-value="#64748b" value="#64748b">
                <div class="color-swatch-display" style="background-color: #64748b;"></div>
              </div>
            </div>
            <div class="slider-row">
              <div class="row">
                <div class="label-with-icon">
                  <span>Sky Height</span>
                  <svg class="reset-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                </div>
                <input type="text" class="drag-input" value="0.3" id="iblSkyLevelInput" data-slider="iblSkyLevel">
              </div>
              <div class="slider-controls">
                <input type="range" id="iblSkyLevel" min="0" max="2" step="0.05" value="0.3">
              </div>
            </div>
            <div class="slider-row">
              <div class="row">
                <div class="label-with-icon">
                  <span>Horizon Height</span>
                  <svg class="reset-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                </div>
                <input type="text" class="drag-input" value="0.0" id="iblHorizonLevelInput" data-slider="iblHorizonLevel">
              </div>
              <div class="slider-controls">
                <input type="range" id="iblHorizonLevel" min="0" max="2" step="0.05" value="0.0">
              </div>
            </div>
            <div class="slider-row">
              <div class="row">
                <div class="label-with-icon">
                  <span>Ground Height</span>
                  <svg class="reset-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                </div>
                <input type="text" class="drag-input" value="-0.3" id="iblGroundLevelInput" data-slider="iblGroundLevel">
              </div>
              <div class="slider-controls">
                <input type="range" id="iblGroundLevel" min="-1" max="1" step="0.05" value="-0.3">
              </div>
            </div>
            <div class="checkbox-row">
              <input type="checkbox" id="iblBackground" checked>
              <label for="iblBackground">Show in background</label>
            </div>
          </div>
        </div>
      </div>
    </div>'''

if old in content:
    content = content.replace(old, new)
    with open(r'D:\Dev\TrailStudio\ui\ui.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Replacement successful!')
else:
    print('Old string not found!')
    idx = content.find('<!-- Image Based Lighting Panel -->')
    if idx >= 0:
        print('Found at index:', idx)
        # Find the end of the panel
        panel_start = idx
        # Find next panel
        next_panel = content.find('    <!-- Sun 1 Panel -->', idx)
        if next_panel >= 0:
            print('Panel content length:', next_panel - panel_start)
            print('First 500 chars:', repr(content[panel_start:panel_start+500]))