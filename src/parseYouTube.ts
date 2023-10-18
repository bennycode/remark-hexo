type YouTubeTag = {
  id: string;
  type: 'playlist' | 'video';
  useCookies: boolean;
}

export function parseYouTube(inputStr: string): YouTubeTag | null {
  const pattern = /{% youtube ([^']+)(?:\s+'([^']+)')?(?:\s+([^%]+))?\s*%}/;
  const match = inputStr.match(pattern);

  if (match) {
    const youTubeId = match[1];
    const type = match[2] || 'video';
    const useCookies = match[3] || false;

    return <YouTubeTag>{
      id: youTubeId?.trim(),
      type: type.trim(),
      useCookies: typeof useCookies === 'boolean' ? useCookies : JSON.parse(useCookies)
    };
  }

  return null;
}
