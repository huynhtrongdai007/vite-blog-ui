import JustValidate from 'just-validate';

export const initLogin = () => {
    const validate = new JustValidate('#login-form',{
        errorFieldCssClass:"invalid",
        errorLabelCssClass:"form-group__error",
        errorLabelStyle:{},
    });
    validate
    .addField("#email",[
        {
            rule:'required'
        },
        {
            rule:"email",
            errorMessage:"Email không hợp lệ"
        },
    ])
    .addField("#password",[
        {
            rule:'required'
        },
        {
            rule:"password",
        },
    ])
    .onSuccess(() => {
        console.log("Send API...");
    })
    
};