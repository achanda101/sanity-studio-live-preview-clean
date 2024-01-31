import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'socialMediaLinks',
    title: 'Social Media Links',
    type: 'document',
    initialValue: {
        title: 'Social Media Links',
    },
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: true,
        }),
        defineField({
            name: 'facebookLink',
            description: 'URL needs to start with http:// or https://',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    allowRelative: false, // Allow relative links
                    relativeOnly: false, // Force only relative links
                    scheme: [ 'https', 'http' ], // Default is ["https", "http"]
                }),
        }),
        defineField({
            name: 'instagramLink',
            description: 'URL needs to start with http:// or https://',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    allowRelative: false, // Allow relative links
                    relativeOnly: false, // Force only relative links
                    scheme: [ 'https', 'http' ], // Default is ["https", "http"]
                }),
        }),
        defineField({
            name: 'youtubeLink',
            description: 'URL needs to start with http:// or https://',
            type: 'url',
            validation: (Rule) =>
                Rule.uri({
                    allowRelative: false, // Allow relative links
                    relativeOnly: false, // Force only relative links
                    scheme: [ 'https', 'http' ], // Default is ["https", "http"]
                }),
        }),
    ],
})
