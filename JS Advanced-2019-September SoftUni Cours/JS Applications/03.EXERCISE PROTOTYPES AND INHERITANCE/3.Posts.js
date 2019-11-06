function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        toString() {
            let arr = [];
            arr.push(`Post: ${this.title}`);
            arr.push(`Content: ${this.content}`);
            return arr.join('\n')
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];

        }
        addComment(comment) {
            this.comments.push(comment);
        }
        toString() {
            let arr = [];
            arr.push(`Post: ${this.title}`);
            arr.push(`Content: ${this.content}`);
            arr.push(`Rating: ${this.likes - this.dislikes}`);
            if (this.comments.length > 0) {
                arr.push(`Comments:\n * ${this.comments.join('\n * ')}`)
            }
            
            return arr.join('\n')
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
        view(){
            this.views++;
            return this;
        }
        toString() {
            let arr = [];
            arr.push(`Post: ${this.title}`);
            arr.push(`Content: ${this.content}`);
            arr.push(`Views: ${this.views}`)
            return arr.join('\n')
        }
    }

//     let post = new Post("Post", "Content");
//     // console.log(post)
//     console.log(post.toString());
//     let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");

// console.log(scm.toString());
 return {Post, SocialMediaPost, BlogPost}
}
solve()


