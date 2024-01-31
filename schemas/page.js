import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    initialValue: {
        createdAt: new Date().toISOString(),
    },
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'createdAt',
            title: 'Created at',
            type: 'datetime',
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
            description:
                "This ends up on summary pages, on Google, when people share your page on social media",
        })
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title = 'Untitled Page' }) {
            return { title }
        },
    },
})
