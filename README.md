# ifconfig-me

Discovers your public IP address using pre-defined checkers (external services).

## Install

```sh
npm install ifconfig-me
```

## Usage

```ts
import publicIP from "ifconfig-me";

console.info(await publicIP());
//=> '46.5.21.123' | 'fe80::200:f8ff:fe21:67cf'
```
