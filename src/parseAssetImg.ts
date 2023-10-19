type AssetImg = {
  description: string;
  filename: string,
}

export function parseAssetImg(inputStr: string): AssetImg | null {
  const pattern = /{% asset_img\s+"([^"]+)"(?:\s+"([^"]+)")?\s*%}/;

  const match = pattern.exec(inputStr);

  if (match && match[1]) {
    const filename = match[1];
    const description = match[2] || '';

    return {
      filename,
      description
    };
  }

  return null;
}
