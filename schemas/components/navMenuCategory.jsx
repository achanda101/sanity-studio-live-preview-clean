import React from 'react'
import { MdOutlineCategory } from 'react-icons/md'
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'navMenuCategory',
    title: 'Navigation Menu Item',
    type: 'object',
    icon: MdOutlineCategory,
    fields: [
        defineField({
            name: 'navMenuItemName',
            title: 'Menu Item Name',
            type: 'string',
            description: 'Menu Item names should be short for the navigation menu to fit on the webpage'
        }),
        defineField({
            name: 'pageLinks',
            title: 'List of Page Links',
            type: 'array',
            description:
                'Add and reorder pages that will appear under this menu item. Remember that pages need to be published first before you can add them.',
            of: [ { type: 'pageReference' } ],
            validation: (Rule) => Rule.unique(),
        }),
    ],
    preview: {
        select: {
            title: 'navMenuItemName',
            menuItems: 'pageLinks',
        },
        prepare({ title = 'Untitled Menu Item', menuItems = [] }) {
            const numItems = menuItems.length;
            const itemsInfo = numItems < 1 ? 'Missing Page Links' : `# Page Links: ${numItems}`;
            return {
                title,
                subtitle: itemsInfo,
                media: (
                    <span style={{ fontSize: '1.5rem' }}>
                        <MdOutlineCategory />
                    </span>
                ),
            };
        },
    },
})
