import { Page } from "payload/generated-types";

export const getHomeData = (imageId: string, userId: string): Partial<Page> => {
  return {
    title: 'Home',
    slug: 'home',
    _status: 'published',
    author: userId,
    meta: {
      title: 'Payload CMS Demo - Home',
      description:
        'Here is a column of content and it has an embedded Media element within it. This content will be used to generate a Meta Description.',
      image: imageId,
    },
    layout: [
      {
        columns: [
          {
            width: 'half',
            alignment: 'left',
            richText: [
              {
                type: 'p',
                children: [
                  {
                    text: 'Here is a column of content and it has an embedded Media element within it. This content will be used to generate a Meta Description.',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: '',
                  },
                ],
              },
              {
                type: 'upload',
                value: {
                  id: imageId,
                },
                relationTo: 'media',
                children: [
                  {
                    text: ' ',
                  },
                ],
                fields: {
                  caption: [
                    {
                      type: 'p',
                      children: [
                        {
                          text: 'Here is a caption for this image.',
                        },
                      ],
                    },
                  ],
                  link: {
                    url: 'https://payloadcms.com',
                    type: 'custom',
                  },
                  alignment: 'center',
                  enableLink: true,
                },
              },
              {
                type: 'p',
                children: [
                  {
                    text: '',
                  },
                ],
              },
            ],
          },
          {
            width: 'half',
            alignment: 'left',
            richText: [
              {
                type: 'p',
                children: [
                  {
                    text: "Here is a second column of content. It's got a custom Rich Text YouTube embed.",
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: '',
                  },
                ],
              },
              {
                type: 'video',
                id: 'bxWsZTtqs80',
                source: 'youtube',
                children: [
                  {
                    text: ' ',
                  },
                ],
              },
              {
                type: 'p',
                children: [
                  {
                    text: '',
                  },
                ],
              },
            ],
          },
        ],
        blockName: 'Two Column Content Intro',
        blockType: 'content',
      },
    ],
  };
}