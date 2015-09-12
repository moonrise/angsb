For all TypeScript runtime/debug, launch corresponding *.js files (not *.ts files).
This is because *.ts is not runnable, just a source to *.js targets.


TypeScript files with no dependency (Node launcher works fine for *.ts/js files)
* test.ts
* test.html
* tsfund/overview.ts
* tsfund/module.ts  (this is actually TypeScript Internal Module, but with no dependency)


Typescript Internal Modules (needs html script tag loader)
* module1.ts and module2.ts ==> internal.html loads them



