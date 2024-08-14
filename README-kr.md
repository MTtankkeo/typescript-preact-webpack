<div align="center">
  <img src="https://github.com/user-attachments/assets/f372bc7b-920b-4221-8d06-3d8058a63f9f">
  <h1>Preact with Typescript</h1>
  <span>이 템플릿은 Preact에서 Typescript 환경을 설정하는 시작 키트입니다.</span>
</div>

<br>

> __현지화 문서 참조__<br>
> [English (Origin)](README-kr.md)

# 기본 구성
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
| build | 높은 사용자 경험을 위해 최적화와 압축 과정을 거친 이후 프로덕션 모드로서 빌드됩니다.
| build:dev | 최대한 빠르게 빌드되어야 하므로 최적화와 압축 과정이 생략되고 개발 모드로서 빌드됩니다.
| watch | 최대한 빠르게 빌드되어야 하므로 최적화와 압축 과정이 생략되고 프로덕션 모드로서 빌드됩니다, 또한 변경 사항이 발생하면 자동으로 재빌드됩니다.
| watch:dev | 최대한 빠르게 빌드되어야 하므로 최적화와 압축 과정이 생략되고 개발 모드로서 빌드됩니다, 또한 변경 사항이 발생하면 자동으로 재빌드됩니다.
| dev | 최대한 빠르게 빌드되어야 하므로 최적화와 압축 과정이 생략되고 빌드되며 캐싱됩니다,또한 변경 사항이 발생하면 해당 내용만 다시 재빌드되며 실시간으로 웹사이트에 변경사항이 업데이트됩니다.