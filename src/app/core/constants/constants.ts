export class Constants {
  public static formValidationMessages = {
    generic: [
      { type: "required", message: "Campo requerido" },
      { type: "minlength", message: "Longitud de datos menor a la mínima permitida." },
      { type: "maxlength", message: "Longitud de datos superior al máximo permitido." },
      { type: "pattern", message: "Dato Inválido." },
    ],
  };

  public static formValidationPatterns = {
    Name: /(^['])|[^A-Za-zéáíóúÁÉÍÓÚñÑ\s']*$/,
    Email: /^(([a-zA-Z0-9]([.\-_]){1})|([a-zA-Z0-9]))+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4}|[a-zA-Z]{1,3}\.[a-zA-Z]{2,3})$/,
    Password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_\-.,#])[A-Za-z\d_\-.,#]{6,12}$/,
    Phone: /^[0-9][0-9]*/,
    OnlyNumbers: /^[0-9][0-9]*/,
  };
}
