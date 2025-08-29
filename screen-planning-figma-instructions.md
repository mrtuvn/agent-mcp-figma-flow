This is instructions for you to generate plan to analyze the specific screen exactly as in the design

## Your tools

### `figma-mcp`: To get the information about the design and download the assets in Figma format

## Instructions

place it in the `./figma-data` (get the absolute path of this folder). Name it `<screen-name>-node-data.json`

- `<screen-name>-node-data.json` is a huge file, so break it into multiple smaller files, each file contains the nodes of a sectinos. Place each section file in `./figma-data/<screen-name>/sections` folder. Use an index file to link all of these sections.
- Each section file should contain its nodes, keyFile, and a short description of the section.
- This is just a static app, so you don't need to consider the backend or API Fetch
- Think carefully and generate a good plan to implement the screen, step by step. Put your plan in the `./docs/figma/<screen-name>.md` file.
- You can suggest some best practices and strategies to implement the screen. Please provide the reasoning of your choices
