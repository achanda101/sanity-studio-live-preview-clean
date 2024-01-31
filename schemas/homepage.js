import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'homepage',
    title: 'Home Page',
    type: 'document',
    initialValue: {
        title: 'Homepage',
    },
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: true,
        }),
        defineField({
            name: 'heroBannerImage',
            title: 'Hero Banner Image',
            type: 'image',
            // fieldset: 'hero'
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Description",
            description:
                "This ends up on summary pages, on Google, when people share your page on social media",
        })
    ],
})
