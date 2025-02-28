import { baseUrl, appName, appDesc } from 'config';

const namespace = 'core';

export default function core(req, res) {
  res.json({
    name: appName,
    description: appDesc,
    baseUrl,
    namespace,
    routes: {
      // TODO Auto generate routes
      '/resource': {
        methods: ['get', 'post'],
        _links: {
          self: `${baseUrl}/${namespace}/resource`,
        },
      },
      '/resource/:id': {
        methods: ['get', 'put', 'patch', 'delete'],
        _links: {
          self: `${baseUrl}/${namespace}/resource/:id`,
        },
      },
      '/media': {
        methods: ['get', 'post'],
        _links: {
          self: `${baseUrl}/${namespace}/media`,
        },
      },
      '/users': {
        methods: ['get', 'post', 'delete', 'patch'],
        _links: {
          self: `${baseUrl}/${namespace}/users`,
        },
      },
      '/config': {
        methods: ['get', 'post', 'delete', 'patch'],
        _links: {
          self: `${baseUrl}/${namespace}/config`,
        },
      },
    },
    _links: {},
  });
}
