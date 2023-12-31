import type {Node, Text} from 'mdast';
import {visit} from 'unist-util-visit';
import {youtubeTag} from 'hexo-tag-embed/dist/tags/youtube.js';
import {parseYouTube} from './parseYouTube.js';
import {parseAssetImg} from './parseAssetImg.js';

export {parseYouTube, parseAssetImg};

export default function remarkHexo(_options: {}) {
  const transformer = async (ast: Node) => {
    visit(ast, 'text', (node: Text) => {
      const {value} = node;

      const youTube = parseYouTube(value);
      if (youTube) {
        node.type = 'html' as 'text';
        node.value = youtubeTag([youTube.id, youTube.type, youTube.useCookies]);
      }
    });
  };

  return transformer;
}
