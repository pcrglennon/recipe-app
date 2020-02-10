# recipe-app
Demo project for experimentation with MongoDB, Vue, Typescript, Node, etc.

Initially will be just a simple list of recipes, end goal is to allow recipes to be versioned. That is, to allow them to be tweaked over time, while retaining a history of each iteration and notes explaining alterations.

## WIP
### Proposed Phases
1. [x] Simple read-only Vue app
    - [x] Read data straight from DB, via MongoDB Stitch ([e1e6c68](https://github.com/pcrglennon/recipe-app/commit/e1e6c6810aa0d8c67da71ebc8b4ad75439efc897))
    - [x] Add in TailwindCSS ([ef75805](https://github.com/pcrglennon/recipe-app/commit/ef7580537821bd8dd1ef804b65f510b5fe1c191a))
    - [x] Deploy to Github pages ([4ca4f32](https://github.com/pcrglennon/recipe-app/commit/4ca4f3211545d08cb075950e1423e00cd0bb3eb3))
2. [x] Migrate to TypeScript
3. [ ] **Current** Remove Stitch, create separate API project
    - Simple Rails API
    - Add authentication/authorization
4. [ ] Add ability to create/edit/delete Recipes
    - Refine Schemas if necessary, investigate schema versioning pattern
5. [ ] Add ability to version Recipes

## Deployment
```bash
./deploy.sh
```

## Project setup (from vue-cli)
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
