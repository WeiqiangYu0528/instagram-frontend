import React from 'react'
import { MongoClient} from 'mongodb'

export async function getPosts() {
    const mongoClient = new MongoClient("mongodb+srv://yuweiqiang:<Maple393!>@cluster0.aqmf8yb.mongodb.net/instagram?retryWrites=true&w=majority");
    const data = await mongoClient
        .db()
        .collection("posts")
        .find({})
        .toArray();
    return data;
}
    // [5,4,2] => following
    // const result = await firebase
    //   .firestore()
    //   .collection('photos')
    //   .where('userId', 'in', following)
    //   .get();
  
    // const userFollowedPhotos = result.docs.map((photo) => ({
    //   ...photo.data(),
    //   docId: photo.id
    // }));