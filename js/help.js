window.onload = () => {
const contactForm = document.getElementById('contact-form');

const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#user_name");
const emailInput = document.querySelector("#user_email");
const messageInput = document.getElementById('message');

const publicKey = "Rmr_tj5NdMYEa33si";
const serviceID = "service_1h312oc";
const templateID = "template_t08tnbn";

emailjs.init(publicKey);

contactForm.addEventListener("submit",e=>{
    e.preventDefault();
    submitBtn.innerText = "Just a Moment...";

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }
    emailjs.send(serviceID,templateID,inputFields).then(()=>{
        submitBtn.innerText = "Message Sent Successfully";
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";}, 
        (error) => {
            console.log(error);
            submitBtn.innerText = "Something went wrong";
        });
});
};