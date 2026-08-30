/**
 * DICOM Window Level and Contrast Preset Manager
 * Provides clinical window width (WW) and window center (WC) presets for CT/MR.
 */

class DicomWindowManager {
  constructor() {
    this.presets = {
      lung: { wc: -600, ww: 1500 },
      bone: { wc: 300, ww: 1500 },
      softTissue: { wc: 40, ww: 400 },
      brain: { wc: 40, ww: 80 }
    };
  }

  getPreset(presetName) {
    return this.presets[presetName] || this.presets.softTissue;
  }

  applyWindowLevel(pixelValue, wc, ww) {
    const min = wc - ww / 2;
    const max = wc + ww / 2;
    if (pixelValue <= min) return 0;
    if (pixelValue >= max) return 255;
    return Math.round(((pixelValue - min) / ww) * 255);
  }
}

module.exports = new DicomWindowManager();
