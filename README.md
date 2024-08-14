<div align="center">
  <img src="https://github.com/user-attachments/assets/f372bc7b-920b-4221-8d06-3d8058a63f9f">
  <h1>Preact with Typescript</h1>
  <span>This is template that is simple start-kit about Preact with Typescript.</span>
</div>

<br>

> __Refer to localization docs__<br>
> [Korean](README-kr.md)

# Configuration
1. Webpack `Bundler`
2. Webpack Dev Server `for hot reload`
3. Preact
4. Typescript
5. Javascript minimizer `Used by terser`
6. CSS minimizer `Used by 'css-minimizer-webpack-plugin'`
7. CSS loader
8. SVG loader `Used by preact-svg-loader`

# Build by NPM
To a smooth and fast development environment, ensure that any changes on the client side are automatically detected and built without the need to repeatedly run 'npm run build'.

| Type | Description |
| ---- | ----------- |
| build | Builds in production mode after undergoing optimization and compression processes for a better user experience.
| build:dev | Needs to be built as quickly as possible, so the optimization and compression steps are skipped and builds in development mode.
| watch | Builds in production mode, and automatically rebuilds when changes occur.
| watch:dev | Needs to be built as quickly as possible, so the optimization and compression steps are skipped. Additionally, automatically rebuilds when changes occur.
| dev | Needs to be built as quickly as possible, so the optimization and compression steps are skipped, and the resources are cached. Additionally, only the changes are rebuilt, and the website automatically refreshes.