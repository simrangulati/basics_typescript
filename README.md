# basics_typescript
To cover the basics of typescript
## import vs import type
The difference between import and import type in TypeScript revolves around their primary utility and how TypeScript and the JavaScript engine treat them during compilation and runtime.

📊 Comparison Table
![image](https://github.com/simrangulati/basics_typescript/assets/13031249/e98a936b-66f0-4a1c-898c-ef32bb7878e9)

🔸 import
#### Runtime + Type-Checking: 
The import keyword is used for both runtime resolutions and type-checking. That means the imported modules will be included in the compiled JavaScript code.
#### Side Effects: 
Using import from a module that has side-effects will run the side-effect code.
#### Dynamic: 
You can dynamically import modules using import().
#### Common Use-Cases: 
Importing classes, functions, variables, etc.
import { AxiosInstance } from 'axios';

🔸 import type
#### Type-Checking Only: 
import type only imports type declarations. The imported types will be completely removed during the TypeScript to JavaScript compilation.
#### No Side Effects: 
Using import type won't run any side-effect code a module may have.
#### Static: 
Cannot be used with dynamic imports.
#### Common Use-Cases: 
Importing only type information where no actual code needs to be imported.
import type { AxiosInstance } from 'axios';

##### Notes and Takeaways
Performance: If you only need types, using import type can make your JavaScript bundle smaller because it will not include any actual code.
Clarity: import type clearly indicates that only types are being used, which can improve code readability.
By being mindful of the differences and using import and import type appropriately, you can write more efficient and readable TypeScript code.
