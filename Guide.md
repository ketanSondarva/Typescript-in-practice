# Installation of typescript:

- first make sure that `node` installed in your system.
- run git bash as administrator and write command: `npm install -g typescript`

# Run the program guide: 

## 1. By using the JavaScript file:

- Run Command: `tsc filename.ts`
- JavaScript file will be generated.
- Run JS file by: `node filename.js`

## 2. Without creating the JS file:

- intall `ts-node` globally
- write command: `ts-node filename.ts`
- output will be generated directly.

## 3. how to compile file when we use Namespace:

- we have created namespace [@namespace_demo.ts](Namespace/namespace_demo.ts)
- we imported it and used it in [@namespace_import.ts](Namespace/namespace_import.ts)
- note: ts-node command will not work for namespace_import.ts
- you have to use:
  ```
   tsc --outFile Final.js namespace_demo.ts namespace_import.ts
   node Final.js
  ```

## 4. how to cmopile file when we import Modules:

- Refer to [Exporting.ts](Module/Exporting.ts) and [Importing.ts](Module/Importing.ts)
- we imported modules emported by the Exporting.js file or:
- we can directly get output by ts-node cmd or use both(imporing and exporting) file names in tsc cmd:
- run command: `tsc exporting.ts importing.ts`
- dont forget to see there differance between export and default export.