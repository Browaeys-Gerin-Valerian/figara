import { REGEX } from "./regex.js"

export const checkPassword = (password) => {
    const checker = {
        isCorrect: false,
        message: ""
    }
    const passwordContainUpper = password?.match(
        REGEX.IS_CAPITAL_LETTER
    );
    const passwordContainLower = password?.match(REGEX.IS_LETTER);
    const passwordContainNumber = password?.match(
        REGEX.IS_CONTAIN_NUMERIC
    );
    const passwordContainSpe = password?.match(REGEX.IS_SPECIAL_CHAR);
    const passwordLength = password?.length > 6;

    if (passwordContainUpper && passwordContainLower && passwordContainNumber && passwordContainSpe && passwordLength) {
        checker.isCorrect = true;
    } else {
        checker.isCorrect = false
        checker.message = "Le mot de passe n'est pas conforme"
    }

    return checker
}

export const checkEmail = (email) => {
    const checker = {
        isCorrect: false,
        message: ""
    }

    const emailValid = email.match(REGEX.EMAIL)

    if (emailValid) {
        checker.isCorrect = true;

    } else {
        checker.isCorrect = false
        checker.message = "Format d'email invalide"
    }

    return checker


}

