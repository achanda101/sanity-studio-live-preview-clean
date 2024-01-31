import { defineField, defineType } from 'sanity'
import { FaWpforms } from 'react-icons/fa'

export default defineType({
    name: 'contactDetails',
    title: 'Contact Details',
    type: 'document',
    icon: FaWpforms,
    initialValue: {
        title: 'Contact Details',
    },
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: true,
        }),
        defineField({
            name: 'address',
            title: 'Postal Address',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'email',
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        }),
        defineField({
            name: 'timings',
            title: 'Visitor Timings',
            type: 'string',
        }),
        defineField({
            name: 'holidays',
            title: 'Days on which Nrityagram is closed',
            type: 'string',
        }),
    ],
})
