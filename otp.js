function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementById('otpVerify')[0];

    let otp_val = Math.floor(Math.random()* 10000);

    let emailbody = `<h2>Your OTP is </h2>${otp_val}`;

    Email.send({
        SecureToken : "5e45c602-f882-4ba9-bf4a-d20d707620b4",
        To : email.value,
        From : "maheshkothawade47@gmail.com",
        Subject : "This is the subject",
        Body : emailbody,
}).then(
      message => {
        if(message == 'OK'){
            alert('OTP sent ' + email.value);

            otpverify.style.display = "flex";
            const otp_inp = document.getElementById('otp-inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click', () =>{
                if(otp_inp.value == otp_val){
                    alert('Email address verified');
                }
                else{
                    alert('Invalid OTP');
                }
            })
        }
      }
    );

}