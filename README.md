# remark-hexo

A remark plugin to render [Hexo's tag plugins](https://hexo.io/docs/tag-plugins). This plugin can be used with [Astro](https://docs.astro.build/en/guides/markdown-content/#markdown-plugins), [Gatsby](https://www.gatsbyjs.com/tutorial/remark-plugin-tutorial/), [Docusaurus](https://docusaurus.io/docs/next/markdown-features/plugins) and all other frameworks that support [remark plugins](https://github.com/remarkjs/remark#plugins).

## Supported Hexo Tags

- [`{% asset_img %}`](https://hexo.io/docs/tag-plugins#Embed-image)
- [`{% youtube %}`](https://hexo.io/docs/tag-plugins#YouTube)

## Troubleshooting

When you're using this plugin with the [Astro web framework](https://astro.build/), you might want to turn off [SmartyPants](https://daringfireball.net/projects/smartypants/) in your Astro config file ([find out how](https://docs.astro.build/de/reference/configuration-reference/#markdownsmartypants)). This is because SmartyPants changes `{% youtube 62J_eQsK0e0 'video' true %}` into `{% youtube 62J_eQsK0e0 ‘video’ true %}` with apostrophes in the embeds.

**Resources**

- https://www.gatsbyjs.com/tutorial/remark-plugin-tutorial/
- https://www.telerik.com/blogs/asts-markdown-and-mdx

**Inspirations**

- https://github.com/ntwcklng/gatsby-remark-embed-youtube
- https://github.com/remcohaszing/remark-mermaidjs
