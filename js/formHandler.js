
export default function formControl() {
    const contactsForm = document.querySelector('.sct-contacts-form');
    const submitButton = document.querySelector('[data-submit]');
    const inputs = contactsForm.querySelectorAll('[name]');
    // const errors = contactsForm.querySelectorAll('[name] ~ .error-message');

    const validationMap = {
        phone: function(target, error) {
            if (!/^\d*$/.test(target.value)) {
                this.errors[target.name] = 'Incorrect phone number';
            } else
            if (target.value.replace(/[-()+]/g, '').length < 10) {
                this.errors[target.name] = 'at least 10 digits';
            }else {
                delete this.errors[target.name];
            }
            error.textContent = this.errors[target.name];
        },
        email: function(target, error) {
            if (!/^([a-zA-Z_\-0-9]{2,}\.)*[a-zA-Z_\-0-9]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/.test(target.value)) {
                this.errors[target.name] = 'Incorrect email';
            } else {
                delete this.errors[target.name];
            }
            error.textContent = this.errors[target.name];
        },
        message: function(target, error) {
            if (target.value.length < 10) {
                this.errors[target.name] = 'at least 10 chars';
            } else {
                delete this.errors[target.name];
            }
            error.textContent = this.errors[target.name];
        },
        errors: {}
    }

    const inputHandler = (e) => {
        if (e.target.value.length < 1) {
            contactsForm.querySelector(`[name="${e.target.name}"] ~ label`).classList.remove('hide');
        } else {
            contactsForm.querySelector(`[name="${e.target.name}"] ~ label`).classList.add('hide');
        }


        if (!e.target.required) return;

        if (e.target.name === 'phone') {
            e.target.value = e.target.value.replace(/[^\d-]/g, '');
        }

        const localMessage = contactsForm.querySelector(`[name="${e.target.name}"] ~ .error-message`);

        validationMap[e.target.name](e.target, localMessage);

        let isInputsEmpty = false
        let isErrors = Object.values(validationMap.errors).length !== 0;



        inputs.forEach(input => {
            if (!input.required) return;

            if (input.value.length < 1) {
                isInputsEmpty = true;
            }
        })
        submitButton.disabled = isInputsEmpty || isErrors;
    }
    inputs.forEach(input => {
        if (!input.required) contactsForm.querySelector(`[name="${input.name}"] ~ label > span`).classList.add('hide')
        input.addEventListener('input', inputHandler)
    })


    submitButton.addEventListener('click', buttonSubmitHandler)
    function buttonSubmitHandler(e) {
        const data = {

        }
        inputs.forEach(input => {
            if (input.value.length > 0) {
                data[input.name] = input.value;
            }
        })

        console.log(JSON.stringify(data));
        contactsForm.reset();

        contactsForm.querySelectorAll(`[name] ~ label`).forEach(label => {
            label.classList.remove('hide');
        })
        e.target.disabled = true;

    }
}



