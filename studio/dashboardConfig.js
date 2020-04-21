export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9f872f33ab7d3634cf8c01',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rmobzcjv',
                  apiId: 'dd93ac6e-9b3f-463a-a854-1042e0d1ada3'
                },
                {
                  buildHookId: '5e9f872f90edf6a96711ea39',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-96rawbqd',
                  apiId: 'a8784330-0317-451c-babd-8724ff857233'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marianomurad/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-96rawbqd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
