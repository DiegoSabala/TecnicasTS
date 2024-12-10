export function escape(
  target: any, // A classe onde o método está sendo decorado
  propertyKey: string, // Nome do método decorado
  descriptor: PropertyDescriptor // Permite modificar o comportamento do método
) {
  const OriginalMethod = descriptor.value; // Guarda uma referência ao método original

  // Substitui o método original com uma nova função que adiciona lógica extra
  descriptor.value = function (...args: any[]) {
    // Chama o método original e captura o retorno
    let retorno = OriginalMethod.apply(this, args);
    if (typeof retorno == "string") {
      console.log(
        `@escape na classe ${this.constructor.name} para o método ${propertyKey}`
      );
      retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    return retorno; // Retorna o valor do método original
  };
}
