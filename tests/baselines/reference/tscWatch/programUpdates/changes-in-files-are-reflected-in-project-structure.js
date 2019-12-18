/a/lib/tsc.js -w /a/b/f1.ts
//// [/a/b/f1.ts]
export * from "./f2"

//// [/a/b/f2.ts]
export let x = 1

//// [/a/c/f3.ts]
export let y = 1;

//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/a/b/f2.js]
"use strict";
exports.__esModule = true;
exports.x = 1;


//// [/a/b/f1.js]
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(require("./f2"));



Output::
>> Screen clear
12:00:19 AM - Starting compilation in watch mode...



12:00:24 AM - Found 0 errors. Watching for file changes.


Program root files: ["/a/b/f1.ts"]
Program options: {"watch":true}
Program files::
/a/lib/lib.d.ts
/a/b/f2.ts
/a/b/f1.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/f2.ts
/a/b/f1.ts

WatchedFiles::
/a/b/f1.ts:
  {"pollingInterval":250}
/a/b/f2.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined

Change:: Modify f2 to include f3

//// [/a/b/f2.ts]
export * from "../c/f3"

//// [/a/b/f2.js]
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(require("../c/f3"));


//// [/a/b/f1.js] file written with same contents
//// [/a/c/f3.js]
"use strict";
exports.__esModule = true;
exports.y = 1;



Output::
>> Screen clear
12:00:27 AM - File change detected. Starting incremental compilation...



12:00:36 AM - Found 0 errors. Watching for file changes.


Program root files: ["/a/b/f1.ts"]
Program options: {"watch":true}
Program files::
/a/lib/lib.d.ts
/a/c/f3.ts
/a/b/f2.ts
/a/b/f1.ts

Semantic diagnostics in builder refreshed for::
/a/c/f3.ts
/a/b/f2.ts
/a/b/f1.ts

WatchedFiles::
/a/b/f1.ts:
  {"pollingInterval":250}
/a/b/f2.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}
/a/c/f3.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::

exitCode:: ExitStatus.undefined
