
function validar(){

   var usuario, email, contraseña, contraseña2, patron_mail, patron_contraseña, patron_usuario;

   usuario=document.getElementById("username").value; 
   email=document.getElementById("email").value;                   //Obtenemos los datos del formulario
   contraseña=document.getElementById("contraseña").value; 
   contraseña2=document.getElementById("contraseña2").value; 

   patron_mail=/\w+@\w+\.+[a-z]/;  //Patron del correo.
   patron_contraseña=/\w+[0-999]/;  //Patron de la contraseña.
   patron_usuario=/\w+[0-999]/;     //Patron del nombre de usuario.

   if(usuario === "" || email === "" || contraseña === "" || contraseña2 === ""){

        alert("Todos los campos son obligatorios");
        return false;

   }else if(usuario.length>25){

         alert("El nombre de usuario tiene un limite de 10 caracteres");
         return false;

   }else if(!patron_mail.test(email)){  //Verificamos si lo introducido coincide con el patron

      alert("El correo no es válido");
         return false;

   }else if(!patron_contraseña.test(contraseña && contraseña2)){    //Verificamos si lo introducido coincide con el patron

      alert("La contraseña debe incluir caracteres tanto alfabéticos como numéricos (0-999).");
         return false;

   }else if(!patron_usuario.test(usuario)){   //Verificamos si lo introducido coincide con el patron
      
      alert("El nombre de usuario debe incluir caracteres alfabéticos y númericos")
         return false;

      
   }else if(contraseña != contraseña2){

      alert("Las contraseñas no coinciden");
         return false;

   }else if(contraseña.length>30){

      alert("La contraseña es muy larga");
         return false;


   }
}