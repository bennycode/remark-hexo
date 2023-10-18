import {describe, expect, it} from 'vitest';
import {parseYouTube} from './parseYouTube.js';

describe('parseYouTube', () => {
  it("parses Hexo's YouTube tag syntax", () => {
    expect(parseYouTube("{% youtube 62J_eQsK0e0?start=531 'video' false %}")).toEqual({
      id: '62J_eQsK0e0?start=531',
      type: 'video',
      useCookies: false,
    });

    expect(parseYouTube('{% youtube 62J_eQsK0e0?start=531 %}')).toEqual({
      id: '62J_eQsK0e0?start=531',
      type: 'video',
      useCookies: false,
    });

    expect(parseYouTube("{% youtube 62J_eQsK0e0?start=531 'video' true %}")).toEqual({
      id: '62J_eQsK0e0?start=531',
      type: 'video',
      useCookies: true,
    });

    expect(parseYouTube("{% youtube 62J_eQsK0e0 'video' true %}")).toEqual({
      id: '62J_eQsK0e0',
      type: 'video',
      useCookies: true,
    });

    expect(parseYouTube("{% youtube PLCbdBdyNHZXL3grXeUPZwTn1lo7pVaUdH 'playlist' %}")).toEqual({
      id: 'PLCbdBdyNHZXL3grXeUPZwTn1lo7pVaUdH',
      type: 'playlist',
      useCookies: false,
    });
  });
});
