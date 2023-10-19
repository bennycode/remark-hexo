import {describe, expect, it} from 'vitest';
import {parseAssetImg} from './parseAssetImg.js';

describe('parseAssetImg', () => {
  it("parses Hexo's embed image syntax", () => {
    expect(
      parseAssetImg('{% asset_img "turn-windows-features-on-or-off-hyper-v.png" "Turn on Hyper-V in Windows 10 Pro" %}')
    ).toEqual({
      description: 'Turn on Hyper-V in Windows 10 Pro',
      filename: 'turn-windows-features-on-or-off-hyper-v.png',
    });

    expect(parseAssetImg('{% asset_img "msi-bios-cpu-features-amd-svm-mode.png" "MSI BIOS: AMD SVM Mode" %}')).toEqual({
      description: 'MSI BIOS: AMD SVM Mode',
      filename: 'msi-bios-cpu-features-amd-svm-mode.png',
    });

    expect(parseAssetImg('{% asset_img "ipconfig.png" %}')).toEqual({
      description: '',
      filename: 'ipconfig.png',
    });

    expect(parseAssetImg('{% asset_img “ipconfig.png” %}')).toEqual(null);
  });
});
