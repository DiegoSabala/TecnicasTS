export function inspect(target, propertyKey, descriptor) {
    const OriginalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`---Método: ${propertyKey}\n---Parâmetros: ${JSON.stringify(args)}`);
        const retorno = OriginalMethod.apply(this, args);
        console.log(`---Retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map