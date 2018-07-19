# jQuery to Vue migration example

> This project includes the steps for a sample migration from jQuery to Vue.

## Setup

```bash
yarn install
```

```bash
yarn serve
```

## Follow Along

The master branch contains the code as if no migration had yet occured. To follow along from the repository, start with the master branch. To see a step-by-step process of migration just switch branches to see the development process of migrating a feature to Vue using the patter `migration-step-${step-number}`

For example, to see step 1 execute the following git command

```bash
git checkout migration-step-1
```

or look at the code on github and switch branches using githubs dropdown.

## Philosophy

The app is written purposefully using slightly dated patterns that were common before es6 modules were in practice. If you are familiar with the module pattern or the revealing module pattern of the past, then this repo will look familiar to you.

We start off with a basic feature set. Just a small Todo Application portion with add/remove functionality and the ability to mark individual todos as complete. we also have a small service to save/get/delete todos from a persistent storage (in this case localStorage).

The basic steps taken to migrate this app to Vue are simple given this situation. Execute the following steps:

- Either download Vue, or drop in Vue's script tag
- Migrate the html structure for the component to migrate (start small if you can) using either individual `Vue` instances, or `Vue.Component`
- Migrate the JavaScript functionality for you Vue component
- Clean up/Remove old code

You should find that you will likely end up with less user written code, as well as a relatively low effort migration.
