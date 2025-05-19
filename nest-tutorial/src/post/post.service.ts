import { Injectable, Res } from '@nestjs/common';
import { Post, PostDocument } from './schemas/post.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDto } from './dtos/post.dto';
import { CreatePostDto } from './dtos/create-post.dto';
import { ResponsePostDto } from './dtos/response-post.dto';


@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

    async create(data: CreatePostDto) : Promise<ResponsePostDto>{
        const createdPost = new this.postModel(data);
        const post = await createdPost.save();
        const postDto = new ResponsePostDto();

        postDto._id = post._id.toString();
        postDto.title = post.title;
        postDto.description = post.description;

        return postDto;
    }

    async getAll() : Promise<ResponsePostDto[]>{
        const posts = await this.postModel.find();
        return posts.map(post => {
            return{
                _id: post._id.toString(),
                title: post.title,
                description: post.description
            } as ResponsePostDto;
        });
    }

}
