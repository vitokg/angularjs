export const passwordStrength = () => {
  const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return {
    require: 'ngModel',
    link: function(scope, el, attrs, ctrl) {
      ctrl.$validators.passwordStrength = (modelValue, viewValue) => {

        if(attrs.passwordPattern) {
          const regex = new RegExp(attrs.passwordPattern);

          return regex.test(viewValue);
        }

        return PASSWORD_REGEX.test(viewValue);
      }
    }
  }
}
