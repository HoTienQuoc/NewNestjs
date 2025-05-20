
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponsePostDto } from 'src/post/dtos/response-post.dto';

function TransformDTO(dto){
    
}

@Injectable()
export class TransformDTOInterceptor implements NestInterceptor {
    constructor(private readonly dtoClass){}

    intercept(
        context: ExecutionContext, next: CallHandler): Observable<any> {
            return next
            .handle()
            .pipe(
                map((data)=>{
                    // console.log(data);
                    return plainToInstance(this.dtoClass,data,{
                        excludeExtraneousValues:true
                    });
                }),
            );
    }
}
