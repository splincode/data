# To become 3.0.0

-   Fix: compatibility with `@ngxs/store@3.6.2`
-   Fix: correct value freeze from `getState()`

### BREAKING CHANGES

-   Removed `@query` decorator
-   Now require minimal `@ngxs/store v3.6.2`
-   Now require minimal `TypeScript v3.7.2`

If you are using Angular 8, you can write in the `tsconfig.json`:

```json
{
    "angularCompilerOptions": {
        "disableTypeScriptVersionCheck": true
    },
    "compilerOptions": {}
}
```

-   Moved public interfaces to `@ngxs-labs/data/common`:

```ts
import { Immutable, Mutable } from '@ngxs-labs/data/common';
```

-   For a cast state to mutable type it is necessary to use package `@ngxs-labs/data/utils`:

```ts
import { NgxsDataUtilsModule } from '@ngxs-labs/data/utils';

@NgModule({
    imports: [
        // ..
        NgxsDataUtilsModule
    ]
})
export class AppModule {}

@Component({
    //..
})
class TodoComponent {
    @Input() public data: string[];
}

@Component({
    selector: 'app',
    template: '<todo [data]="todos.state$ | async | mutable"></todo>'
})
class AppComponent {
    constructor(public todos: TodosState) {}
}
```

# 2.4.1 2020-01-07

-   Fix: preserve mutate `getState()` when run angular dev mode

# 2.4.0 2020-01-07

-   Feature: add freeze state when run angular dev mode for selection stream

# 2.3.0 2020-01-07

-   Feature: expose `mutable` pipe for casting immutable stream to mutable stream

# 2.2.6 2019-12-29

-   Fix: corrected reset with children states

# 2.2.5 2019-12-26

-   Fix: corrected automatic type inference in ctx.setState

# 2.2.4 2019-12-25

-   Fix: disable automatic subscription of observables inside the action method

# 2.2.3 2019-12-24

-   Fix: remove duplicate field in DataStorageEngine
-   Fix: remove infinite loop when triggered onstorage event

# 2.2.0 2019-12-21

-   Feature: enable strict typings
-   Fix: downgrade typescript for compatibility angular build

# 2.1.0 2019-12-19

-   Feature: storage plugin `out of the box`
-   Fix: dispatch storage when first initial states

# 2.0.0 2019-12-11

-   Feature: Support TypeScript 3.7
-   Feature: Support NGXS 3.6

### BREAKING CHANGES

-   Compatible only with NGXS 3.6+
-   Now `patchState, setState` return `void`
-   No longer support options in `NgxsDataPluginModule.forRoot()`
-   No longer support `@query` decorator
