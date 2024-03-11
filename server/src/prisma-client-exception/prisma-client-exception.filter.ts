import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError) 
export class PrismaClientExceptionFilter extends BaseExceptionFilter { 
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    console.error(exception.message);  
    console.log(Object.keys(exception))
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');

    switch (exception.code) {
      case 'P2002': {
        const field = (/\(`([^']+)`\)/g).exec(message)[1];
        const status = HttpStatus.CONFLICT;
        response.status(status).json({
          statusCode: status,
          message: `Account with that ${field} already exists.`,
        });
        break;
      }
      default:
        super.catch(exception, host);
        break;
    }
  }
}