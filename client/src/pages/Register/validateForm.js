
      function isPassValid (password,confPass){
        const exp = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
        return (password!==null && password===confPass && exp.test(password))
      }
      
      function isGoodPass (password){
        const exp = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
        return exp.test(password);
      }
      function putValidPass(value,confirmPassword){
        const nPass = document.getElementById("password");
        const cPass = document.getElementById("confirmPassword");
        if(isGoodPass(value)){
          nPass.setAttribute("class","form-control is-valid");
        }else{
          nPass.setAttribute("class","form-control is-invalid");
        }
        if(confirmPassword===value && value!==''){
          cPass.setAttribute("class","form-control is-valid");
        }else{
          cPass.setAttribute("class","form-control is-invalid");
        }
      }

      function putValidConfirmPass(value,password){
        const cPass = document.getElementById("confirmPassword");
        if(isGoodPass(value) && password===value && password!==''){
          cPass.setAttribute("class","form-control is-valid");
         }else{
          cPass.setAttribute("class","form-control is-invalid");
        }
      }

      function isOlder (value) {
        const today = new Date();
        const yearT = today.getFullYear();
        const monthT = today.getMonth();
        const dayT = today.getDay();

        const birthday = new Date(value);
        const yearB =  birthday.getFullYear();
        const monthB = birthday.getMonth();
        const dayB = birthday.getDay();

        let age = (yearT+1900)-yearB;
        if(monthT<(monthB-1)){
            age--;
        }
        if(((monthB-1)===monthT)&&(dayT<dayB)){
            age--;
        }
        if(age>1900){
            age-=1900;
        }
        return age>13;
    }

export{isPassValid,putValidPass,putValidConfirmPass,isOlder}
