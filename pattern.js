(function() {


  define('', [],
    function () {

      var pattern = {

        isValidEmail: function (email) {
          var emailPattern = new RegExp("/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/");
          return emailPattern.test(email);
        },

        /* Only tests for US Phone Numbers */
        isValidPhoneNumber: function (phoneNumber) {
          var phonePattern = new RegExp("/^(\+\d)*\s*(\(\d{3}\)\s*)*\d{3}(-{0,1}|\s{0,1})\d{2}(-{0,1}|\s{0,1})\d{2}$/");
          return phonePattern.test(phoneNumber);
        },

        /*
         Passwords will contain at least (1) upper case letter
         Passwords will contain at least (1) lower case letter
         Passwords will contain at least (1) number or special character
         Passwords will contain at least (8) characters in length
         */

        isStrongPassword: function (password) {
          var passwordPattern = new RegExp("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$");
          return passwordPattern.test(password);
        }

      }



      return pattern;
    });
})();
