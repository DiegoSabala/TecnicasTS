export function escape(target, propertyKey, descriptor) {
    const OriginalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = OriginalMethod.apply(this, args);
        if (typeof retorno == "string") {
            console.log(`@escape na classe ${this.constructor.name} para o método ${propertyKey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        return retorno;
    };
}
//# sourceMappingURL=escape.js.map