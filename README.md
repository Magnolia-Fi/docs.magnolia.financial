<img src="./static/img/logo.png" width="60" height="60"/>

# Magnolia Docs

Documentation for [Magnolia Financial](https://magnolia.financial)'s web-based Bitcoin APIs

> Live documentation: https://docs.magnolia.financial/

Built with [Docusaurus](https://docusaurus.io/).

### Local Development

Install `npm` and `yarn`.

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### OpenAPI Documentation

API docs are autogenerated using [`docusaurus-openapi-docs`](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs) from OpenAPI specs found in `openapi/` and are output to `docs/api`. To regenerate the OpenAPI docs, run:

```bash
yarn gen-api-docs all
```