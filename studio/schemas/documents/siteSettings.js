export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{type: 'author'}]
    }
  
      {
            "type": "object",
            "name": "header",
            "title": "Header Configuration",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "title",
                    "title": "Header Title",
                    "description": "The title displayed on the left side. If value is not set, the author name will be used.",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "tagline",
                    "title": "Header Tagline",
                    "description": "The tagline displayed on the left side.",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "profile_img",
                    "title": "Profile Image",
                    "description": "The author profile image displayed on the left side. If value is not set, the author avatar will be used.",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "bg",
                    "title": "Header Background",
                    "description": "The background of the left side.",
                    "initialValue": "light",
                    "validation": null,
                    "options": {
                        "list": [
                            "light",
                            "dark"
                        ]
                    }
                },
                  
                          {
                    "type": "boolean",
                    "name": "has_nav",
                    "title": "Enable Navigation Menu",
                    "description": "Display the navigation menu bar on the left side.",
                    "initialValue": true,
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "has_social",
                    "title": "Enable Social Links",
                    "description": "Display social links on the left side.",
                    "initialValue": true,
                    "validation": null
                }
            ]
        },
    
  ]
}
