const form = document.getElementById('form');
const Request_Number = document.getElementById('num');
const National_ID = document.getElementById('id');
const sendButton = document.getElementById('sbutton');
let c=0;
let cc=0;

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const buttonControl = sendButton.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const sendSuccess = buttonControl.querySelector('.success');
    
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
    if(c===0 || cc===0){
        sendSuccess.innerText= '';
    }
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const buttonControl = sendButton.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const sendSuccess = buttonControl.querySelector('.success');
    
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    if(c===1 && cc===1){
        sendSuccess.innerText= 'Send Successly';
    }
};


const validateInputs = () => {
    const RequestNumberValue = Request_Number.value.trim();
    const NationalIDValue = National_ID.value.trim();

    if(RequestNumberValue === '') {
        setError(Request_Number, 'Request Number is required'); c=0;
    }else if(isNaN(RequestNumberValue) ){
        setError(Request_Number, 'you should enter number');c=0;
    }else {
        c=1;
        setSuccess(Request_Number);
    }

    if(NationalIDValue === '') {
        setError(National_ID, 'National ID is required'); cc=0;
    } else if (NationalIDValue.length !== 4) {
            setError(National_ID, 'you should enter Last 4 Digits'); cc=0;
    } else {
        if(isNaN(NationalIDValue)){
            setError(National_ID, 'you should enter number'); cc=0;
        }else{
            cc=1;
            setSuccess(National_ID);
        }
    }
};