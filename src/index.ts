import {visit} from 'unist-util-visit';
import {youtubeTag} from 'hexo-tag-embed/dist/tags/youtube.js';
import {type Root} from 'mdast';
import {parseYouTube} from './parseYouTube.js';

export default function remarkHexo(_options: {}) {
  const transformer = async (ast: Root) => {
    visit(ast, 'text', (node) => {
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
