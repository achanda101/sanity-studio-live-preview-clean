import { GoHome } from 'react-icons/go'
import { IoShareSocialSharp, IoDocumentsOutline } from 'react-icons/io5'
import { BiNavigation } from 'react-icons/bi'
import { FaWpforms } from 'react-icons/fa'

const hiddenDocTypes = (listItem) =>
    ![ 'page', 'homepage', 'navigation', 'socialMediaLinks', 'contactDetails', 'media.tag' ].includes(
        listItem.getId()
    )

export const deskStructure = (S) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Home Page')
                .icon(GoHome)
                .child(
                    S.editor()
                        .title('Home Page')
                        .id('homepage')
                        .schemaType('homepage')
                        .documentId('homepageid')
                ),
            S.listItem()
                .title('Pages')
                .schemaType('page')
                .icon(IoDocumentsOutline)
                .child(
                    S.documentList()
                        .title('Pages')
                        .filter('_type == "page"')
                        .child((documentId) =>
                            S.document()
                                .documentId(documentId)
                                .schemaType('page')
                                .views([
                                    S.view.form(),
                                ])
                        )
                ),
            S.divider(),
            S.listItem()
                .title('Social Media Links')
                .icon(IoShareSocialSharp)
                .child(
                    S.editor()
                        .title('Social Media Links')
                        .id('socialMediaLinks')
                        .schemaType('socialMediaLinks')
                        .documentId('socialMediaLinksid')
                ),
            S.listItem()
                .title('Navigation')
                .icon(BiNavigation)
                .child(
                    S.editor()
                        .title('Navigation')
                        .id('navigation')
                        .schemaType('navigation')
                        .documentId('navigationid')
                ),
            S.listItem()
                .title('Contact Details')
                .icon(FaWpforms)
                .child(
                    S.editor()
                        .title('Contact Details')
                        .id('contactDetails')
                        .schemaType('contactDetails')
                        .documentId('contactDetailsid')
                ),
            ...S.documentTypeListItems().filter(hiddenDocTypes),
        ])