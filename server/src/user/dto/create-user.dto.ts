import { IsStrongPassword, IsEmail, IsString, MinLength, MaxLength, IsMobilePhone, Matches } from 'class-validator'

export class CreateUserDto {
    @MaxLength(30, { message: 'Please enter your valid name under 30 characters.' })
    full_name: string;

    @MinLength(3)
    @MaxLength(30)
    @Matches(/^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/, { message: 'The accepted characters are a-z A-Z 0-9 dot(.) underline(_).' })
    username: string;

    @IsEmail({}, { message: 'Please enter valid email address.' })
    email: string;

    @MaxLength(20, { message: 'Please enter valid phone number.' })
    phone: string;

    @IsStrongPassword({ minLength: 8, minNumbers: 4, minUppercase: 1, minSymbols: 1 }, { message: 'Password must be at least 8 characters long, contain 4 digits, 1 symbol, 1 uppercase.' })
    password: string;
}