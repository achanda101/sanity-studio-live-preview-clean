import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    initialValue: {
        title: 'Navigation',
    },
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: true,
        }),
        defineField({
            name: 'navMenuRed',
            title: 'Red Navigation Menu',
            type: 'array',
            description: 'Add, edit, reorder navigation menu items',
            of: [ { type: 'navMenuCategory' } ],
        }),
        defineField({
            name: 'navMenuWhite',
            title: 'White Navigation Menu',
            type: 'array',
            description: 'Add, edit, reorder navigation menu items',
            of: [ { type: 'navMenuCategory' } ],
        }),
        defineField({
            name: 'footerNavLinks',
            title: 'Navigation links in the footer',
            type: 'array',
            description: 'Add, edit, reorder page links in the footer',
            of: [ { type: 'pageReference' } ],
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline for the Footer',
            type: 'string',
        }),
        defineField({
            name: 'extraInfoFooter',
            title: 'Extra Information for the Footer (for eg: Charitable Trust Registration Number)',
            type: 'string',
        }),
    ],
})
