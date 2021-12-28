let userInput: unknown;

userInput = 5;
userInput = 'Adam';

//never type
function generateError(message: string, code: number): never {
    throw {message, code};
}

generateError('An error occurred', 500);