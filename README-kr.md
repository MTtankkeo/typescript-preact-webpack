<div align="center">
  <img src="https://github.com/user-attachments/assets/a2e245fd-a4e0-4339-8d4e-6a6a958902f0">
  <h1>Preact with Typescript</h1>
  <span>이 템플릿은 Preact에서 Typescript 환경을 설정하는 시작 키트입니다.</span>
</div>

<br>

> __현지화 문서 참조__<br>
> [English (Origin)](https://github.com/MTtankkeo/typescript-preact-webpack)

# 기본 구성
1. Webpack `Bundler`
2. Webpack Dev Server `for hot reload`
3. Preact
4. Precat Router
5. Typescript
6. Javascript minimizer `Used by terser`
7. CSS minimizer `Used by 'css-minimizer-webpack-plugin'`
8. CSS loader
9. SVG loader `Used by preact-svg-loader`

# NPM 빌드
원활한 개발 환경이 조성되려면 `npm run build`를 반복적으로 입력하지 않고 클라이언트 측의 변경사항이 발생한다면 이를 자동으로 감지하여 빌드될 수 있도록 합니다.

> 최상위 경로부터 시작하여 `./` 에서 아래 명령어를 터미널에 입력하세요.

```cli
npm run dev
```

| 유형 | 설명 |
| ---- | ----------- |
| build | 높은 사용자 경험을 위해 최적화와 압축 과정을 거친 이후 프로덕션 모드로서 빌드됩니다.
| build:dev | 최대한 빠르게 빌드되어야 하므로 최적화와 압축 과정이 생략되고 개발 모드로서 빌드됩니다.
| watch | 최대한 빠르게 빌드되어야 하므로 최적화와 압축 과정이 생략되고 프로덕션 모드로서 빌드됩니다, 또한 변경 사항이 발생하면 자동으로 재빌드됩니다.
| watch:dev | 최대한 빠르게 빌드되어야 하므로 최적화와 압축 과정이 생략되고 개발 모드로서 빌드됩니다, 또한 변경 사항이 발생하면 자동으로 재빌드됩니다.
| dev | 최대한 빠르게 빌드되어야 하므로 최적화와 압축 과정이 생략되고 빌드되며 캐싱됩니다,또한 변경 사항이 발생하면 해당 내용만 다시 재빌드되며 실시간으로 웹사이트에 변경사항이 업데이트됩니다.
