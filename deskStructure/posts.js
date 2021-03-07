import S from '@sanity/desk-tool/structure-builder'

import EyeIcon from 'part:@sanity/base/eye-icon'
import EditIcon from 'part:@sanity/base/edit-icon'
import { MdAccessibility, MdStar } from 'react-icons/all'

export default S.listItem()
  .title('Posts')
  .schemaType('post')
  .icon(MdStar)
  .child(
    S.documentTypeList('post')
      .title('Posts')
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('post')
          .views([
            S.view.form().icon(EditIcon)
          ])
      )
  )
