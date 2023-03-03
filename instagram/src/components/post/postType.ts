export type postComment = {
    _id:string,
    username:string,
    comment:string,
    avatar:string,
}

export type postType = {
    _id:string,
    username:string,
    likes:number,
    comments: postComment[],
    caption:string,
    onCreateComment?:any;
    avatar:string,
    imgUrls:string[],
    postDate:string,
  }

export type postHeader = {
    username:string,
    avatar:string,
    postDate:string,
  }


export type postActions = {
  likes:number,
  onComment?: () => void,
}

export type postComments = {
  comments: postComment[]
}

export type postFooter = {
  username:string,
  caption:string
}

export type postAddComment = {
  _id:string,
  username:string,
  comment?:string,
  onCreateComment?:any,
  avatar:string,
}

export type postImage = {
  imgUrls:string[],
  caption?:string,
}

export type postModal = {
  _id:string,
  username:string,
  avatar:string,
  postDate:string,
  open:boolean,
  onClose: () => void,
  imgUrls:string[],
  comments:postComment[],
  caption: string,
  likes: number,
  onCreateComment: () => void,
}

export type postModalComment = {
  username:string,
  avatar:string,
  caption: string,
  postDate: string,
  comments: postComment[],
}