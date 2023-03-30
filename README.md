# READEME

## Create Simple Project for TypeScript and Jest

1.Setup Project Typescript

```sh
mkdir <project name> (typescirpt)
cd  <project name> (typescript)
yarn add -D typescript
npx tsc --init
```

Set `include`, `exclude`, `rootDir` and `outDir` at `tsconfig.json`

```json
{
    "include": ["./src/**/*"],
    "exclude": ["node_modules"],
    "compilerOptions": {
    ...,
    "rootDir": "./src",
    "outDir": "./out",
    ...,
    }
}
```

2.Initial Project For Jest

```sh
mkdir <project name> (unit-test)
cd  <project name> (unit-test)
npm init -y
yarn add -D typescript
npx tsc --init
npm install -D jest ts-jest @types/jest
npx ts-jest config:init
```

Set `include`, `exclude`, `rootDir` and `outDir` at `tsconfig.json`

```json
{
    "include": ["./src/**/*"],
    "exclude": ["node_modules"],
    "compilerOptions": {
    ...,
    "rootDir": "./src",
    "outDir": "./out",
    ...,
    }
}
```

3.Make directory at root project

````txt
|-src
|-__test__
```
````

4.Implement test code and production code then run test

```sh
npm run build
npm test
```

## Shabu buffet

ค่าบริการร้านชาบู หัวละ 340 ต่อคน แต่หากมา 4 คน จะจ่ายในราคา 3 คน (มา 4 จ่าย 3) และ มีค่าบริการ service charge 10% ต่อหัว

| person | net   |
| -----: | ----- |
|      1 | 374   |
|      2 | 748   |
|      3 | 1,122 |
|      4 | 1,222 |
|      5 | 1,870 |
|      6 | 2,244 |
|      7 | 2,618 |
|      8 | 2,244 |
