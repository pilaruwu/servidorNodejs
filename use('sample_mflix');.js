use('sample_mflix');

db.movies.aggregate([
    {
    $lookup:{
        from: "comments",
        localField: "_id",
        foreignField: "movie_id",
        as: "comments"
    }},{
        $project:{"title":true,"comments":true}
    },{
        $skip:2000  
    },{
        $limit:2
    }

])