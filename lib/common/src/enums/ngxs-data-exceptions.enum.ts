/**
 * @privateApi
 */
export enum NGXS_DATA_EXCEPTIONS {
    NGXS_PERSISTENCE_STATE = '@Persistence should be add before decorator @State and @StateRepository',
    NGXS_DATA_STATE = '@StateRepository should be add before decorator @State',
    NGXS_DATA_STATE_NAME_NOT_FOUND = 'State name not provided in class',
    NGXS_DATA_MODULE_EXCEPTION = 'Metadata not created \n Maybe you forgot to import the NgxsDataPluginModule' +
        '\n Also, you cannot use this.ctx.* until the application is fully rendered ' +
        '\n (use by default ngxsOnInit(ctx: StateContext), or ngxsAfterBootstrap(ctx: StateContext) !!!',
    NGXS_DATA_STATE_DECORATOR = 'You forgot add decorator @StateRepository or initialize state!' +
        '\n Example: NgxsModule.forRoot([ .. ]), or NgxsModule.forFeature([ .. ])',
    NGXS_DATA_STATIC_ACTION = 'Cannot support static methods with @action',
    NGXS_DATA_ACTION = '@action can only decorate a method implementation',
    NGXS_DATA_ACTION_RETURN_TYPE = 'RECOMMENDATION: If you use asynchronous actions' +
        ' `@action({ async: true })`, ' +
        'the return result type should only be Observable or void instead',
    NGXS_PERSISTENCE_ENGINE = 'Not declare storage engine in `existingEngine` or not found after injecting by `useClass`',
    NGXS_PERSISTENCE_SERIALIZE = 'Error occurred while serializing the store value, value not updated.',
    NGXS_PERSISTENCE_DESERIALIZE = 'Error occurred while deserializing the store value, falling back to empty object.',
    NGXS_DATA_CHILDREN_CONVERT = 'Child states can only be added to an object'
}
