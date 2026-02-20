# Changelog

## 0.1.1 (2026-02-20)

Full Changelog: [v0.1.0...v0.1.1](https://github.com/abundai-org/abundai-typescript/compare/v0.1.0...v0.1.1)

### Bug Fixes

* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([e58ed69](https://github.com/abundai-org/abundai-typescript/commit/e58ed69e797dc4ee5b35567fc8d4007e367595d3))


### Chores

* **internal/client:** fix form-urlencoded requests ([351d2f9](https://github.com/abundai-org/abundai-typescript/commit/351d2f958f3f3876593a3540923c9d1161ade2db))
* **internal:** add health check to MCP server when running in HTTP mode ([a88b443](https://github.com/abundai-org/abundai-typescript/commit/a88b4438e1d2e433451c9e61acb34d955694432d))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([708b6ca](https://github.com/abundai-org/abundai-typescript/commit/708b6ca1d48fc24f57ee43682ce24cf68da7266a))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([01039a9](https://github.com/abundai-org/abundai-typescript/commit/01039a90da1d2ff4b66774207ec34a41e96372b4))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([ebaa156](https://github.com/abundai-org/abundai-typescript/commit/ebaa156747b982b9285187cd65469a0b0605f9d4))
* **internal:** avoid type checking errors with ts-reset ([7037fa0](https://github.com/abundai-org/abundai-typescript/commit/7037fa0fe534ffdf22f9ca716a0bf13b0f8ac27b))
* **internal:** cache fetch instruction calls in MCP server ([515d1dd](https://github.com/abundai-org/abundai-typescript/commit/515d1dd22d77d127334d4afaa6d06f07a7daff7b))
* **internal:** improve layout of generated MCP server files ([baacc6f](https://github.com/abundai-org/abundai-typescript/commit/baacc6f5671da1d7fbcc3102c9dc275e626a574c))
* **internal:** improve reliability of MCP servers when using local code mode execution ([c12ee0e](https://github.com/abundai-org/abundai-typescript/commit/c12ee0eb0d160f114c55a01d0c66480698cacdf0))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([d299098](https://github.com/abundai-org/abundai-typescript/commit/d2990988f552b40d700d47244b9231666f18f883))

## 0.1.0 (2026-02-06)

Full Changelog: [v0.0.4...v0.1.0](https://github.com/abundai-org/abundai-typescript/compare/v0.0.4...v0.1.0)

### Features

* **api:** api update ([988e3bf](https://github.com/abundai-org/abundai-typescript/commit/988e3bf24978f3e7db10b2d781aea99b16db54b3))


### Chores

* **internal:** upgrade pnpm ([f8a6c60](https://github.com/abundai-org/abundai-typescript/commit/f8a6c60ce0eb85dbd71e84cb574aae97933c7662))

## 0.0.4 (2026-02-06)

Full Changelog: [v0.0.3...v0.0.4](https://github.com/abundai-org/abundai-typescript/compare/v0.0.3...v0.0.4)

### Bug Fixes

* **client:** avoid removing abort listener too early ([e40f845](https://github.com/abundai-org/abundai-typescript/commit/e40f845659e27d3e364b3132e7d88f161e980a1f))

## 0.0.3 (2026-02-05)

Full Changelog: [v0.0.2...v0.0.3](https://github.com/abundai-org/abundai-typescript/compare/v0.0.2...v0.0.3)

### Chores

* configure new SDK language ([42c1085](https://github.com/abundai-org/abundai-typescript/commit/42c1085dbb0b9e83d623a66dcd482c4b748141f3))

## 0.0.2 (2026-02-05)

Full Changelog: [v0.0.1...v0.0.2](https://github.com/abundai-org/abundai-typescript/compare/v0.0.1...v0.0.2)

### Chores

* update SDK settings ([033a57a](https://github.com/abundai-org/abundai-typescript/commit/033a57a1ca03fceb10466405237d2ed963eb6669))
* update SDK settings ([1ec604c](https://github.com/abundai-org/abundai-typescript/commit/1ec604cbda1d852ab6f121ff022c718e6f0cc257))
