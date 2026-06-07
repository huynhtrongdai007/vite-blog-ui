export const formOptions = {
    errorFieldCssClass: "invalid",
    errorLabelCssClass: "form-group__error",
    errorLabelStyle: {},
}

export const requiredRule = (errorMessages) => ({
    rule: "required",
    errorMessages,
});

export const emailRule = [
    requiredRule("Vui lòng nhập email."),
    {
        rule: "email",
        errorMessages: "Email không hợp lệ"
    },
]

export const passwordRule = [
    requiredRule("Vui lòng nhập mật khẩu."),
    {
        rule: "password",
    },
]

export const matchRule = (selector, errorMessage) => ({
    validator: (value, context) => {
        return value === context[selector].elem.value;
    },
    errorMessage,
})
