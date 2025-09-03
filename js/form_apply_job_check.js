const params = new URLSearchParams(window.location.search);
const receivedId = params.get("id");

const job = ["Data Scientist Intern", "Game Operations Specialist - Fresh Grad", "Combat Designer - Fresh Grad"]
const job_position = document.getElementById("job_position");
job_position.innerText = job[receivedId - 1]

const back_position = document.getElementById("back_position");
back_position.innerText = `${job[receivedId - 1]} Description`;

function backToDescription(){
    window.location.href = `../page/career_description.html?id=${receivedId}`;
}

// เช็ค form
document.getElementById("submitForm").addEventListener("submit", function(e) {
            
    const fullname = document.getElementById("fullname").value
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value
    const country = document.getElementById("country").value
    const city = document.getElementById("city").value
    const zip = document.getElementById("zip").value.trim();
    const education_level = document.getElementById("education_level").value
    const portfolio = document.getElementById("portfolio").value
    const privacy = document.getElementById("privacy")
            
    // เช็คชื่อ นามสกุล      
    if(fullname.length < 1 || fullname.length > 50){
        if(fullname.length < 1){
            document.getElementById("fullname_error").innerText = "A full name is required";
        }
        if(fullname.length > 50){
            document.getElementById("fullname_error").innerText = "To much charecter";
        }
        e.preventDefault();
    }
    else
    {
        document.getElementById("fullname_error").innerText = "";
    }

    // เช็ค email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
    if (!emailPattern.test(email)) {
        document.getElementById("email_error").innerText = "An email is required";
        e.preventDefault();
    }else{
        document.getElementById("email_error").innerText = "";
    }

    // เช็ค phone
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        document.getElementById("phone_error").innerText = "A phone is required";
        e.preventDefault();
    }
    else
    {
        document.getElementById("phone_error").innerText = "";
    }

    // เช็ค country
    if(!country){
        document.getElementById("country_error").innerText = "Please Select Country";
        e.preventDefault();
    }
    else
    {
        document.getElementById("country_error").innerText = "";
    }

    //เช็ค city
    if(city.length < 1 || city.length > 50){
        if(city.length < 1){
            document.getElementById("city_error").innerText = "A city is required";
        }
        if(city.length > 50){
            document.getElementById("city_error").innerText = "To much charecter";
        }
        e.preventDefault();
    }
    else
    {
        document.getElementById("city_error").innerText = "";
    }

    //เช็ค zip
    const zipPattern = /^[A-Za-z0-9\s\-]{3,10}$/;
    if (!zipPattern.test(zip)) {
        document.getElementById("zip_error").innerText = "A zip is required";
        e.preventDefault();
    }
    else
    {
        document.getElementById("zip_error").innerText = "";
    }

    // เช็ค education_level
    if(!education_level){
        document.getElementById("education_error").innerText = "Please Select Education Level";
        e.preventDefault();
    }
    else
    {
        document.getElementById("education_error").innerText = "";
    }

    // เช็ค portfolio    
    if(portfolio.length < 1 || portfolio.length > 50){
        if(portfolio.length < 1){
            document.getElementById("portfolio_error").innerText = "A portfolio is required";
        }
        if(portfolio.length > 100){
            document.getElementById("portfolio_error").innerText = "To much charecter";
        }
        e.preventDefault();
    }
    else
    {
        document.getElementById("portfolio_error").innerText = "";
    }

    //เช็ค privacy
    if (!privacy.checked) {
        document.getElementById("privacy_error").innerText = "Consent is required to apply";
        e.preventDefault();
    }
    else
    {
        document.getElementById("privacy_error").innerText = "";
    }
});