export default{
  title:'Product',
  name:'product',
  type:'document',
  fields: [
    // This document has only one field
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title:'price',
      name:'Price',
      type:'number'
    },
    {
      title:'Image',
      name:'image',
      type:'image',
      option:{
        hotpot:true
      },fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true // <-- make this field easily accessible
          }
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    },
    {
      name:'description',
      title:'Description',
      type:'string'
    },
    {
      name:'slug',
      title:'Slug',
      type:'slug',
      options:{
        source:'name',
        maxLength:96
      }
    },
    {
      name:'brand',
      title:'Brand',
      type:'string'
    },
    {
      name:'category',
      title:'Category',
      type:'string'
      
    },{
      name:'rating',
      title:'Rating',
      type:'number'
    },
    {
      name:'numReviews',
      title:'NumReviews',
      type:'number'
    },
    {
      name:'countInStock',
      title:'CountInStock',
      type:'number'
    }
  ]

}