import {defineField, defineType} from 'sanity'

export  const eventType = defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title:'Title',
    }),
    {
      name: 'metadesc',
      type: 'string',
      title:'Meta Description',
    },
    {
      name: 'Content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ]
    },
    {
      title: 'Blog Image',
      name: 'blogImage',
      type: 'image',
      options: {
        hotspot: true // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    },
      {
        title: 'Created At',
        name: 'CreatedAt',
        type:'datetime',
      },
      {
        name: 'author',
        type: 'object',
        fields: [
          {
            title: 'Author',
            name: 'author',
            type: 'reference',
            to: [{type: 'author'}]
          }
        ]
      },
      
  ],
})