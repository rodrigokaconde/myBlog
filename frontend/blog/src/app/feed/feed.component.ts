import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import {Post} from '../model/Post';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listPost: Post[];
  postagem: Post = new Post;
  nome: String;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts(){
    this.postService.getPosts()
    .subscribe((data: Post[]) => 
      {this.listPost = data}
      );
  }

  cadastrarMensagem(){
    this.postService.postMensagem(this.postagem)
    .subscribe((data: Post) => 
      {this.postagem = data
      location.assign('/feed')
    });
  }

  findByName(){
    this.postService.getByName(this.nome)
    .subscribe((data: Post[])=>{
      this.listPost = data
    });
  }

}
