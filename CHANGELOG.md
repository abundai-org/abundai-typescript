# Changelog

## 0.2.0 (2026-02-27)

Full Changelog: [v0.1.2...v0.2.0](https://github.com/abundai-org/abundai-typescript/compare/v0.1.2...v0.2.0)

### Features

* **mcp:** add an option to disable code tool ([c2fde23](https://github.com/abundai-org/abundai-typescript/commit/c2fde23652355a1efbd2ef322e1d918608d66f75))


### Chores

* **internal:** codegen related update ([8df0c41](https://github.com/abundai-org/abundai-typescript/commit/8df0c414ad86a8250729cc648da6c6388927134e))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([70fa394](https://github.com/abundai-org/abundai-typescript/commit/70fa394f782ecf109773ed155886595ca8f94716))
* **internal:** fix MCP Dockerfiles so they can be built without buildkit ([7685186](https://github.com/abundai-org/abundai-typescript/commit/768518632866a04b9998dcfd61710eb19e191f21))
* **internal:** make MCP code execution location configurable via a flag ([22dc37f](https://github.com/abundai-org/abundai-typescript/commit/22dc37f5d20094d832e45d7589cc627b55660ef3))
* **internal:** move stringifyQuery implementation to internal function ([757adb6](https://github.com/abundai-org/abundai-typescript/commit/757adb67c2fef466e36c62e0bc8aca37c67a4309))
* **internal:** upgrade @modelcontextprotocol/sdk and hono ([a240c81](https://github.com/abundai-org/abundai-typescript/commit/a240c81c32de295f873cd283a8190894f077bece))

## 0.1.2 (2026-02-24)

Full Changelog: [v0.1.1...v0.1.2](https://github.com/abundai-org/abundai-typescript/compare/v0.1.1...v0.1.2)

### Bug Fixes

* **docs/contributing:** correct pnpm link command ([06ac547](https://github.com/abundai-org/abundai-typescript/commit/06ac547db5a3b63f06fceb9d79aa21a6867943dd))


### Chores

* **internal:** remove mock server code ([e3637cb](https://github.com/abundai-org/abundai-typescript/commit/e3637cb2b4a42dc1479d1480462d8bcfdae6d348))
* **internal:** upgrade pnpm version ([4b4e011](https://github.com/abundai-org/abundai-typescript/commit/4b4e0115272ca94414221275a2a21c77a099c88d))
* **mcp:** correctly update version in sync with sdk ([546fdd8](https://github.com/abundai-org/abundai-typescript/commit/546fdd87299e93564aea634a000d5b7ec0eca3ab))
* update mock server docs ([3d55100](https://github.com/abundai-org/abundai-typescript/commit/3d551008df2222a32a49307c6bb079c556c6a032))

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
