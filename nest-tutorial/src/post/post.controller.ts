import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDocument } from './schemas/post.schema';
import { PostDto } from './dtos/post.dto';
import { TransformDTOInterceptor } from 'src/interceptors/transform-dto.interceptor';
import { ResponsePostDto } from './dtos/response-post.dto';

@Controller('post')
@UseInterceptors(new TransformDTOInterceptor(ResponsePostDto))
export class PostController {
    constructor(private readonly postService: PostService){}

    @Post()
    create(@Body() requestBody: PostDto ){
        return this.postService.create(requestBody);
    }

    @Get()
    getAll(){
        return this.postService.getAll();
    }
}
