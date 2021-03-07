import S from '@sanity/desk-tool/structure-builder'

import { MdCollections } from 'react-icons/all'

export default S.listItem()
  .title('Projects')
  .schemaType('project')
  .child(
    S.documentTypeList('project').title('Projects')
  )
  .icon(MdCollections)