# recipe-app
Demo project for experimentation with MongoDB, Vue, Typescript, Node, etc.

Initially will be just a simple list of recipes, end goal is to allow recipes to be versioned. That is, to allow them to be tweaked over time, while retaining a history of each iteration and notes explaining alterations.

## WIP
### Proposed Phases
1. [ ] **Current** Simple read-only Vue app
  - [x] Read data straight from DB, via MongoDB Stitch
  - [ ] Add in TailwindCSS/something similar
  - [ ] Deploy (Github pages adequate?)
2. [ ] Migrate to TypeScript
  - TODO - learn TypeScript!
3. [ ] Remove Stitch, create separate API project w/ Node/Express
  - GraphQL?
  - Simple authentication/authorization
4. [ ] Add ability to create/edit/delete Recipes
  - Refine Schemas if necessary, investigate schema versioning pattern
5. [ ] Add ability to version Recipes

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
