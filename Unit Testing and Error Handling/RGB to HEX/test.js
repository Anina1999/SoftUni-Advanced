import { expect } from 'chai';
import { rgbToHexColor } from './rgbToHex.js';

describe('Tests for rgbToHexColor', () => {
  it('convert valid RGB values to hex', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
    expect(rgbToHexColor(12, 34, 56)).to.equal('#0C2238');
  });

  it('values beyond bounds', () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
  });

  it('values above bounds', () => {
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
  });

  it('non-integer values', () => {
    expect(rgbToHexColor(1.5, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 2.7, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 3.9)).to.be.undefined;
  });

  it('non-number types', () => {
    expect(rgbToHexColor('255', 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, {}, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, [])).to.be.undefined;
    expect(rgbToHexColor(null, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(undefined, 0, 0)).to.be.undefined;
  });
});