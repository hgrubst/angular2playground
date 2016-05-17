#Playground for angular2

Simple project that allows to play around with angular2.

One of the first challenges with angular2 is to get it to run a hello world application.

First you need to compile your project successfully. This needs a correct tsconfig.json and the right typings configuration.
Then you need to actually run your application. This requires the correct config for system.js through the use of jspm.

All of this is actually not trivial to get right and this project helps in that matter.


###package.json dependencies vs jspm dependencies

Jspm manages all dependencies but :

- Angular2 has its typings defined inside the npm project itself and there are no typings on DefinitelyTyped for them (at least not at the time I'm writing this).
For this reason, it's listed inside the dependencies section as typescript will look into node_modules during compilation
- Same for Rxjs
- Angular2 also needs a number of peer dependencies. They are explicitely imported in the html page before system.js starts the application.
For this reason they are also in the dependencies section (this also prevents a warning from npm due to missing peer dependencies).
- Jspm is listed as a dependency and not a devDepedency because at runtime we use the actual system.js script included with it.