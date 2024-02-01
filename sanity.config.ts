import { visionTool } from '@sanity/vision'
import { defineConfig, isDev } from 'sanity'
import { deskTool } from 'sanity/desk'
import { dashboardTool, projectUsersWidget } from '@sanity/dashboard'
import { documentListWidget } from 'sanity-plugin-dashboard-widget-document-list'
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify"
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './schemas'
// TODO: change back to `sanity/presentation` when fix is released
import { presentationTool, DocumentLocationResolver } from '@sanity/presentation'
import { Observable, map } from 'rxjs'

import { deskStructure } from './deskStructure'
import { BrandLogo } from './components/brandLogo'
import { EnhancedNavbar } from './components/enhancedNavbar'
import { ngTheme } from './theme'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

const locate: DocumentLocationResolver = (params, context) => {
  const { documentStore } = context

  if (params.type === 'post') {
    // Listen to the query and fetch the draft and published document
    const doc$ = documentStore.listenQuery(`*[_id == $id][0]{slug,title}`, params, {
      perspective: 'previewDrafts',
    }) as Observable<{
      slug: { current: string | null } | null
      title: string | null
    } | null>

    return doc$.pipe(
      map((doc) => {
        if (!doc || !doc.slug?.current) return null

        return {
          locations: [
            {
              title: doc.title || 'Untitled',
              href: `/post/${doc.slug.current}`,
            },
            {
              title: 'Posts',
              href: `/`,
            },
          ],
        }
      }),
    )
  }

  return null
}

// Need the Vision tool available only in development (not in deployed studios)
const devOnlyPlugins = [ visionTool() ]

export default defineConfig({
  name: 'ng-data-lake',
  title: 'NG Sanity Studio',
  projectId,
  dataset,
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Deploy changes to the Nrityagram Website (production)',
          sites: [
            {
              title: "Click on DEPLOY to upload changes to nrityagram.org. When Deploy is a 'Success', click on 'View' to view the site",
              apiId: 'b28148ef-dfcd-4a73-a483-5311b7d03ae4',
              // https://api.netlify.com/build_hooks/65ba0dfc9611e3ab5710b25f
              buildHookId: '65ba0dfc9611e3ab5710b25f',
              name: 'ngmain',
              // TODO: change to this url: 'http://nrityagram.org/'
              url: 'https://ngremix.netlify.app/'
            }
          ],
          layout: { width: 'medium', height: 'auto' }
        }),
        documentListWidget({
          title: 'Last Published Content',
          query: '*[_type in ["page", "homepage", "contactPage", "navigation"] && !(_id in path("drafts.**"))] | order(_updatedAt desc)[0..8]',
          layout: { width: 'medium' }
        }),
        projectUsersWidget({ layout: { width: 'medium', height: 'auto' } }),
        documentListWidget({
          title: 'Last Edited Content (with unpublished changes)',
          query: '*[_type in ["page", "homepage", "contactPage", "navigation"] && (_id in path("drafts.**"))] | order(_updatedAt desc)',
          layout: { width: 'medium' }
        }),
      ]
    }),
    presentationTool({
      previewUrl: process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000',
      locate,
    }),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],
  schema: {
    types: schemaTypes,
  },
  theme: ngTheme,
  studio: {
    components: {
      logo: BrandLogo,
      navbar: EnhancedNavbar,
    },
  },
})
