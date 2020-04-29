export default (req, res) => {

    let posts = {
        data: [
            {
                title: 'My first blog post',
                paragraphs: ['Hello there', 'This is an example of a componentized blog post']
            },
            {
                title: 'My second blog post',
                paragraphs: ['Hello there', 'This is another example', 'Wa-hoo!','Hooray']
            },
            {
                title: 'The final blog post',
                paragraphs: ['C’est fin']
            }
        ]
    };

    let response = [];

    if (req.method === 'GET') {
        res.status(200).json(posts)
    }
}