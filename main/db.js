import Collection from 'marsdb';
import LocalStorageManager from 'marsdb/lib/LocalStorageManager';

Collection.defaultStorageManager(LocalStorageManager);
Collection.defaultIdGenerator(() => {
    return {
        value: Math.random(),
        seed: 0
    };
});

const users = new Collection('users');

const posts = new Collection('posts');
posts.find({author: `Bob`})
    .sort([`createdAt`])
    .then(docs => {
        // do something with docs
    });
