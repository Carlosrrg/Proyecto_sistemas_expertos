import { AbstractControl } from '@angular/forms'

export class PasswordValidation{
    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('contrasena').value; 
        let confirmPassword = AC.get('contrasena2').value; 
         if(password != confirmPassword) {
             console.log('false');
             AC.get('contrasena2').setErrors( {MatchPassword: true} )
         } else {
             console.log('true');
             return null
         }
     }
}