import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { PostService } from './post.service';
import { PostDocument } from './schemas/post.schema';
import { PostDto } from './dtos/post.dto';

@Controller('post')
@UseInterceptors(ClassSerializerInterceptor)
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
