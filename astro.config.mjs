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
         customCss: [
            './src/styles/custom.css',
            '@fontsource/aleo/400.css',
            '@fontsource/aleo/600.css',
            '@fontsource/edu-sa-beginner/400.css',
            '@fontsource/edu-sa-beginner/500.css',
            '@fontsource/edu-sa-beginner/600.css',
            '@fontsource/edu-sa-beginner/700.css',
         ],
			social: {
				github: 'https://github.com/DavidMGross/TaxStrikeTactics',
			},
			sidebar: [
				{
					label: 'Introduction',
					autogenerate: { directory: 'introduction' },
               collapsed: true,
				},
				{
					label: 'Varieties of Tax Resister',
					autogenerate: { directory: 'varietiesofresister' },
               collapsed: true,
				},
				{
					label: 'Resisting on Multiple Fronts',
					autogenerate: { directory: 'multiplefronts' },
               collapsed: true,
				},
				{
					label: 'Tactics that Support Tax Resisters',
					autogenerate: { directory: 'tacticsthatsupportresisters' },
               collapsed: true,
				},
				{
					label: 'Tactics that Increase the Number of Resisters',
					autogenerate: { directory: 'tacticsthatincreasethenumberofresisters' },
               collapsed: true,
				},
				{
					label: 'Tactics that Frustrate Government Countermeasures',
					autogenerate: { directory: 'tacticsthatfrustratecountermeasures' },
               collapsed: true,
				},
				{
					label: 'Tactics that Expand the Arsenal of Resistance Techniques',
					autogenerate: { directory: 'tacticsthatexpandthearsenaloftechniques' },
               collapsed: true,
				},
				{
					label: 'Tactics of Education and Public Relations',
					autogenerate: { directory: 'tacticsofeducationandpublicrelations' },
               collapsed: true,
				},
				{
					label: 'Tactics that Lay the Groundwork for Victory',
					autogenerate: { directory: 'tacticsthatlaygroundworkforvictory' },
               collapsed: true,
				},
				{
					label: 'The Revolution Is Within You',
					autogenerate: { directory: 'therevolutioniswithinyou' },
               collapsed: true,
				},
				{
					label: 'Give Your Campaign a Tune-Up',
					autogenerate: { directory: 'giveyourcampaignatuneup' },
               collapsed: true,
				},
			],
		}),
	],
});
