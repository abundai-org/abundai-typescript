# Changelog

## 0.3.2 (2026-06-17)

Full Changelog: [v0.3.1...v0.3.2](https://github.com/abundai-org/abundai-typescript/compare/v0.3.1...v0.3.2)

### Bug Fixes

* **client:** send content-type header for requests with an omitted optional body ([f7752bd](https://github.com/abundai-org/abundai-typescript/commit/f7752bd2126d4f4fd76b920f2a19005f89da31b5))

## 0.3.1 (2026-05-19)

Full Changelog: [v0.3.0...v0.3.1](https://github.com/abundai-org/abundai-typescript/compare/v0.3.0...v0.3.1)

### Bug Fixes

* **typescript:** upgrade tsc-multi so that it works with Node 26 ([04a2fda](https://github.com/abundai-org/abundai-typescript/commit/04a2fda4ebf3800377a2db09eb9f0c87f0574ffd))


### Chores

* avoid formatting file that gets changed during releases ([5750f75](https://github.com/abundai-org/abundai-typescript/commit/5750f7522657dd0a48cee30f55dae1d631a5b117))
* **format:** run eslint and prettier separately ([60b9b51](https://github.com/abundai-org/abundai-typescript/commit/60b9b513076d4738e52d9e6ffc3ed5fea8eec2b3))
* redact api-key headers in debug logs ([eb3f334](https://github.com/abundai-org/abundai-typescript/commit/eb3f3347db2be7622dd7c19d5d2cfb636f31e34e))
* **tests:** remove redundant File import ([af2836e](https://github.com/abundai-org/abundai-typescript/commit/af2836ec1fd128362a24f4e48652699714bcf661))

## 0.3.0 (2026-04-28)

Full Changelog: [v0.2.2...v0.3.0](https://github.com/abundai-org/abundai-typescript/compare/v0.2.2...v0.3.0)

### Features

* support setting headers via env ([52dc613](https://github.com/abundai-org/abundai-typescript/commit/52dc6132adcf9b55019fc7eeca000bf5d9bb85d8))


### Chores

* **ci:** escape input path in publish-npm workflow ([c26d85b](https://github.com/abundai-org/abundai-typescript/commit/c26d85b9f60b039ad5b71b8e41c005be4ce9afd6))
* **ci:** skip lint on metadata-only changes ([7a01389](https://github.com/abundai-org/abundai-typescript/commit/7a01389a8f4d4440d56f5d05a8ab921704043efd))
* fix example snippet imports ([f11d21e](https://github.com/abundai-org/abundai-typescript/commit/f11d21eaa234c863d0e574ec3ca20aa581cabea8))
* **internal:** codegen related update ([743f837](https://github.com/abundai-org/abundai-typescript/commit/743f837e53a286a4cee4e79dfad587a21cad3705))
* **internal:** codegen related update ([fd66d4a](https://github.com/abundai-org/abundai-typescript/commit/fd66d4ac2df061e27671b7f2aa9540997d8d21a0))
* **internal:** codegen related update ([43f95ae](https://github.com/abundai-org/abundai-typescript/commit/43f95aec02cdd9e0aae0dc92abe8473f7fbabb7e))
* **internal:** codegen related update ([64b37fc](https://github.com/abundai-org/abundai-typescript/commit/64b37fc0ccdb8f5190e4ec5d8f72f95613e42ed5))
* **internal:** codegen related update ([a143452](https://github.com/abundai-org/abundai-typescript/commit/a1434525115b0f92ce3484a937be89a2041fa2fc))
* **internal:** codegen related update ([e50a9ea](https://github.com/abundai-org/abundai-typescript/commit/e50a9eaca4c335f9c4f3952a45abf82038a1bb83))
* **internal:** codegen related update ([43ad198](https://github.com/abundai-org/abundai-typescript/commit/43ad1982e41fa76fd85e15b011ace8641cb22df8))
* **internal:** codegen related update ([4344080](https://github.com/abundai-org/abundai-typescript/commit/434408090c5b13b0c372cc4ab09ba6b1d9a75c21))
* **internal:** codegen related update ([d1767f2](https://github.com/abundai-org/abundai-typescript/commit/d1767f28893560291f65b1e848f71bd8188b048a))
* **internal:** codegen related update ([146819f](https://github.com/abundai-org/abundai-typescript/commit/146819fe6e77933dadbdaabd47b1611913b9b79c))
* **internal:** codegen related update ([9fdd131](https://github.com/abundai-org/abundai-typescript/commit/9fdd1313998ed5480d27062bbdd27588eeb9630f))
* **internal:** codegen related update ([b2d4849](https://github.com/abundai-org/abundai-typescript/commit/b2d4849008878a82b4a1e57ca79631d98b9c2e6e))
* **internal:** codegen related update ([64d067b](https://github.com/abundai-org/abundai-typescript/commit/64d067bd9cc871d1310286080fe38b68133c050f))
* **internal:** fix MCP server import ordering ([1c3719b](https://github.com/abundai-org/abundai-typescript/commit/1c3719b99c11053269c0bccb04e666b3df3cf829))
* **internal:** fix MCP server TS errors that occur with required client options ([bc4834b](https://github.com/abundai-org/abundai-typescript/commit/bc4834bc84fe73db8c073f4aa5460aea53bbb9f0))
* **internal:** improve local docs search for MCP servers ([9ffeecf](https://github.com/abundai-org/abundai-typescript/commit/9ffeecf8dd9ad4f5595179c86bb3489225cbb1a1))
* **internal:** improve local docs search for MCP servers ([3b3b1a5](https://github.com/abundai-org/abundai-typescript/commit/3b3b1a5b5bf73ab3b18244497b3761c740ae9e67))
* **internal:** make generated MCP servers compatible with Cloudflare worker environments ([4fbb746](https://github.com/abundai-org/abundai-typescript/commit/4fbb7462d32ea7b93557dc3f6dc854faaddc223c))
* **internal:** more robust bootstrap script ([bcd1a79](https://github.com/abundai-org/abundai-typescript/commit/bcd1a79718d76db758f27fc6abac1eab07cd16b0))
* **internal:** show error causes in MCP servers when running in local mode ([c71eb8a](https://github.com/abundai-org/abundai-typescript/commit/c71eb8a809647183fc8319679e0f4b4235cc2416))
* **internal:** support custom-instructions-path flag in MCP servers ([5dd0c5f](https://github.com/abundai-org/abundai-typescript/commit/5dd0c5fd3d2f4ae137eb90e97650548ec5ba6cdc))
* **internal:** support local docs search in MCP servers ([7544b92](https://github.com/abundai-org/abundai-typescript/commit/7544b92c7287a2e7f8542e5398090a7e50ba99bf))
* **internal:** support type annotations when running MCP in local execution mode ([d8a58ac](https://github.com/abundai-org/abundai-typescript/commit/d8a58acbe6778481de7ddfc9f5941c25f01cfbc2))
* **internal:** support x-stainless-mcp-client-envs header in MCP servers ([ff78d28](https://github.com/abundai-org/abundai-typescript/commit/ff78d2819607d3fa3f1805b50e70aef32cc01377))
* **internal:** support x-stainless-mcp-client-permissions headers in MCP servers ([0b2893c](https://github.com/abundai-org/abundai-typescript/commit/0b2893cbfee10c1bd7ef666b463fb3b58f2731f8))
* **internal:** tweak CI branches ([ba42b90](https://github.com/abundai-org/abundai-typescript/commit/ba42b907ee419c2c479d9f803b5e640bee60bbe0))
* **internal:** update dependencies to address dependabot vulnerabilities ([e7d119b](https://github.com/abundai-org/abundai-typescript/commit/e7d119b5a42e49e46637a298a1760b53db8f3d63))
* **internal:** update gitignore ([1e61d88](https://github.com/abundai-org/abundai-typescript/commit/1e61d8804a63f1c5e3cf1bf070d0cd851f21eb6d))
* **internal:** update lock file ([e1e8e32](https://github.com/abundai-org/abundai-typescript/commit/e1e8e323faf6f2995be0daa723fe1a356f8c6a6e))
* **internal:** update lockfile ([c2e7613](https://github.com/abundai-org/abundai-typescript/commit/c2e76137e019f4bfa9504d71236960731db3641b))
* **mcp-server:** add support for session id, forward client info ([7b4344d](https://github.com/abundai-org/abundai-typescript/commit/7b4344d4ce5bddba7f6c34b458d7fd7141776d21))
* **mcp-server:** improve instructions ([a63d6e9](https://github.com/abundai-org/abundai-typescript/commit/a63d6e910733db9e925200555b65c38451afc800))
* **mcp-server:** increase local docs search result count from 5 to 10 ([912bd63](https://github.com/abundai-org/abundai-typescript/commit/912bd63415db7da33d5ab24e047d48e284dd4339))
* **mcp-server:** log client info ([f296b5d](https://github.com/abundai-org/abundai-typescript/commit/f296b5db8a53b197433e1f1ce115da9ab4fb53a3))
* restructure docs search code ([5f62452](https://github.com/abundai-org/abundai-typescript/commit/5f62452fe8bb042de89aae204fc57617cc1d13b3))

## 0.2.2 (2026-03-08)

Full Changelog: [v0.2.1...v0.2.2](https://github.com/abundai-org/abundai-typescript/compare/v0.2.1...v0.2.2)

### Bug Fixes

* **client:** preserve URL params already embedded in path ([1c383de](https://github.com/abundai-org/abundai-typescript/commit/1c383de26036923a5aea203a2c16ad63ba62c5f3))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([6b345b5](https://github.com/abundai-org/abundai-typescript/commit/6b345b56b2ca93826fc5f359661913baf1d02bbd))
* **internal:** codegen related update ([79da0bf](https://github.com/abundai-org/abundai-typescript/commit/79da0bf0b7dd6f7ba7749cfbea90403cf096d7b7))
* **internal:** codegen related update ([952ef59](https://github.com/abundai-org/abundai-typescript/commit/952ef5980c8d86b80175144b7509e9c35b08e14a))
* **internal:** use x-stainless-mcp-client-envs header for MCP remote code tool calls ([d3a537f](https://github.com/abundai-org/abundai-typescript/commit/d3a537f1169580c3320f23ba414c055237c0479d))
* **mcp-server:** return access instructions for 404 without API key ([b29e6d6](https://github.com/abundai-org/abundai-typescript/commit/b29e6d6e2b5f4d5b52c3ba27aecc13c0527d1f4c))
* update placeholder string ([ad403f1](https://github.com/abundai-org/abundai-typescript/commit/ad403f136bd918b2f50c49d9d264496d8b70c809))

## 0.2.1 (2026-02-27)

Full Changelog: [v0.2.0...v0.2.1](https://github.com/abundai-org/abundai-typescript/compare/v0.2.0...v0.2.1)

### Bug Fixes

* **mcp:** update prompt ([576994e](https://github.com/abundai-org/abundai-typescript/commit/576994eaefe886c8e3277d4083940af4cd68bb3d))

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
