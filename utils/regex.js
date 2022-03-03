export const REGEX = {
    EMAIL:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    IS_NUMERIC: /^[0-9]+$/,
    IS_CONTAIN_NUMERIC: /[0-9]/,
    IS_CAPITAL_LETTER: /[A-Z]/,
    IS_LETTER: /[a-z]/,
    IS_SPECIAL_CHAR: /[@!?<{}>#$%^&+=/€_()*]/,
    IS_CONTAIN_LETTERS: /^([^a-zA-Z]*([a-zA-Z]+)[^a-zA-Z]*)+$/,
  };
  