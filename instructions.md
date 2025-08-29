Build car parts store ecommerce website
Seperate frontend and server folder
Frontend: React 19, React Router v7, Tailwindcss 4
Server: NestJS: User (Authenticate, Authorization), Product, Order. Build as microservices mindset from ground
Database: Prisma ORM

You are a senior React Developer. build a ecommerce mart store for my own business.

## Screens

Figma file: [Design](https://www.figma.com/design/atHO1PkqxNAWTczODTjG1O/70--AutoParts-Website-Templates--Community-?node-id=1-3369&t=kEld5x4uyQK0qkwO-0)
[Mobile Design](https://www.figma.com/design/atHO1PkqxNAWTczODTjG1O/70--AutoParts-Website-Templates--Community-?node-id=5-20439&t=kEld5x4uyQK0qkwO-0)

## Tasks

- Analyze the design in Figma, generate a plan to implement the screen, Procress only one screen at a time. Follow the instructions in `./screen-planning-figma-instructions.md`

- Create a new react router project. Name project `tuna-carmart` in package.json and scaffold inside `frontend` folder. No need to create another folder inside `frontend` folder. File package.json should place directly as child of frontend
  run command this in `frontend` for scaffolding

  ```shell
    npx create-react-router@latest .
  ```

- Setup tailwind v4 (latest) with vite
  [guidelines](https://tailwindcss.com/docs/installation/using-vite)
  Note this version 4 no longer use tailwind.config.js or tailwind.config.ts. Now tailwind directly import inside file main css of your project.

Example

```css
@import "tailwindcss";
```

- Setup alias path `@` import in vite.config.ts
  [guidelines](https://vitejs.dev/config/#resolve-alias)
  Basically instead use `..\path\tofile` you can use import like this `@\components\tofile`
  Add alias `@` for resolve path in file `vite.config.ts`

```tsconfig.json

{
"compilerOptions": {

  "paths": {
    "@/*": ["./src/*"],
  }
}
}

```

## Data

## Tech stack

- Typescript 5
- React 19
- Tailwind 4
- Vite 6
- React Router v7 [react-router-guide](https://reactrouter.com/start/framework/installation)

```

```
