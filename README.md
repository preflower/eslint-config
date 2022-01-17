# @preflower/eslint-config
A eslint plugin base on standard

## Usage
### Install
```bash
$ pnpm add -D @preflower/eslint-config
```

### Config `.eslintrc`
```
{
  "extends": [
    "@preflower"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "extraFileExtensions": [".vue"]
  }
}
```

## Svelte
### Install
```bash
$ pnpm add -D @preflower/eslint-config-svelte
```

### Config `.eslintrc`
```
{
  "extends": [
    "@preflower/eslint-config-svelte"
  ],
  "parserOptions": {
    "project": "./tsconfig.json",
    "extraFileExtensions": [".svelte"]
  }
}
```

### Config `tsconfig.json`
```
{
  "extends": "@tsconfig/svelte/tsconfig.json"
}
```

## License
MIT

Inspired by [@antfu/eslint-config](https://github.com/antfu/eslint-config)
