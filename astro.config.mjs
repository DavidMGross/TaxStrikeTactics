// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import {
  defListHastHandlers,
  remarkDefinitionList,
} from "remark-definition-list";

// https://astro.build/config
export default defineConfig({
    markdown: {
      extendDefaultPlugins: true,
      // Applied to .md and .mdx files
      remarkPlugins: [remarkDefinitionList],
      remarkRehype: { handlers: defListHastHandlers },
    },
    base: '/TPL/TaxStrikeTactics',
    integrations: [
      starlight({
        title: 'Tax Strike Tactics',
        description: 'Your tax strike can make history if it learns from history. Find out how tax strikes succeed.',
        favicon: '/favicon.ico',
        head: [
          {
            tag: 'meta',
            attrs: {
              content: 'David M. Gross',
              lang: 'en',
              name: 'author',
            },
          },
        ],
        components: {
          Aside: './src/components/ExtendedAside.astro',
        },
        customCss: [
          './src/styles/custom.css',
          '@fontsource/aleo/400.css',
          '@fontsource/aleo/600.css',
          '@fontsource/edu-sa-beginner/400.css',
          '@fontsource/edu-sa-beginner/500.css',
          '@fontsource/edu-sa-beginner/600.css',
          '@fontsource/edu-sa-beginner/700.css',
        ],
        social: [
          { icon: 'github', label: 'GitHub', href: 'https://github.com/DavidMGross/TaxStrikeTactics' },
        ],
        sidebar: [
          {
            label: 'Introduction',
            items: [{ autogenerate: { directory: 'introduction' } }],
            collapsed: true,
          },
          {
            label: 'Varieties of Tax Resister',
            items: [{ autogenerate: { directory: 'varietiesofresister' } }],
            collapsed: true,
          },
          {
            label: 'Resisting on Multiple Fronts',
            items: [{ autogenerate: { directory: 'multiplefronts' } }],
            collapsed: true,
          },
          {
            label: 'Tactics that Support Tax Resisters',
            items: [{ autogenerate: { directory: 'tacticsthatsupportresisters' } }],
            collapsed: true,
          },
          {
            label: 'Tactics that Increase the Number of Resisters',
            items: [{ autogenerate: { directory: 'tacticsthatincreasethenumberofresisters' } }],
            collapsed: true,
          },
          {
            label: 'Tactics that Frustrate Government Countermeasures',
            items: [{ autogenerate: { directory: 'tacticsthatfrustratecountermeasures' } }],
            collapsed: true,
          },
          {
            label: 'Tactics that Expand the Arsenal of Resistance Techniques',
            items: [{ autogenerate: { directory: 'tacticsthatexpandthearsenaloftechniques' } }],
            collapsed: true,
          },
          {
            label: 'Tactics of Education and Public Relations',
            items: [{ autogenerate: { directory: 'tacticsofeducationandpublicrelations' } }],
            collapsed: true,
          },
          {
            label: 'Tactics that Lay the Groundwork for Victory',
            items: [{ autogenerate: { directory: 'tacticsthatlaygroundworkforvictory' } }],
            collapsed: true,
          },
          {
            label: 'The Revolution Is Within You',
            items: [{ autogenerate: { directory: 'therevolutioniswithinyou' } }],
            collapsed: true,
          },
          {
            label: 'Give Your Campaign a Tune-Up',
            items: [{ autogenerate: { directory: 'giveyourcampaignatuneup' } }],
            collapsed: true,
          },
        ],
      }),
    ],
});
