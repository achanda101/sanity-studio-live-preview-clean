import { defineField, defineType } from 'sanity'
import { VscReferences } from 'react-icons/vsc'

export default defineType({
    name: 'pageReference',
    type: 'object',
    title: 'Page Link',
    icon: VscReferences,
    fields: [
        defineField({
            name: 'page',
            type: 'reference',
            to: [ { type: 'page' } ],
        }),
    ],
    preview: {
        select: {
            title: 'page.title',
        },
        prepare({ title = 'No Page Link' }) {
            return { title }
        },
    },
})
