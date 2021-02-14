{
    type Video = {
        id:string;
        title:string;
        url:string;
        data:string;
    }

    type VideoMetaData = Pick<Video,'id'|'title'>

    function getVideo2(id:string):Video{
        return{
            id,
            title:'video',
            url:'https://..',
            data:'byte-data..',
        }
    }

    function getVideoMetadata2(id:string):VideoMetaData{
        return{
            id,
            title:'video',
        }
    }
}