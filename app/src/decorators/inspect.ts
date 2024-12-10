export function inspect(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const OriginalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(
      `---Método: ${propertyKey}\n---Parâmetros: ${JSON.stringify(args)}`
    );
    const retorno = OriginalMethod.apply(this, args);
    console.log(`---Retorno: ${JSON.stringify(retorno)}`);

    return retorno;
  };
  return descriptor;
}
