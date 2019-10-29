const Comment = require('../models/comment');

//Home Page
exports.chooseOption = (req, res, next) => {
    res.render('select', {
        pageTitle: 'Seminar Audience Comments',
        path: 'select'
    });
};

//Show Audience Options
exports.chooseAudience = (req, res, next) => {
    res.render('customburger/customburger', {
        pageTitle: 'Audience Section',
        path: 'audience'
    });
};

//Show Create Audience
exports.getCreateAudience = (req, res, next) => {
    res.render('customburger/create', {
        pageTitle: 'Create Comments',
        path: '/customburger/create'
    });
};

//Show All Audience
exports.getAllCommentAudience = (req, res, next) => {
    Comment.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('customburger/showCustomburger', {
                audienceacc: rows,
                pageTitle: 'All Comments',
                path: 'customburger/show'
            });
        })
        .catch(err => console.log(err));
};

//Show Edit Audience Comments
exports.getEditCommentAudience = (req, res) => {
    const {
        id
    } = req.params;

    Comment.findById(id).
    then(([rows, fieldData]) => {
            res.render('customburger/edit', {
                audience: rows[0],
                pageTitle: 'Edit Comment',
                path: ''
            });
        })
        .catch(err => console.log(err));
};

//Show Audience with Comments
exports.showSpecificCommentAudience = (req, res) => {
    const {
        id
    } = req.params;

    Comment.findById(id).
    then(([rows, fieldData]) => {
            res.render('customburger/displayCustomburger', {
                audience: rows[0],
                pageTitle: 'Display Comments',
                path: ''
            });
        })
        .catch(err => console.log(err));
};

//Create Audience
exports.postCreateAudience = (req, res) => {
    const {
        name,
        q1,
        q2,
        q3,
        q4,
        q5
    } = req.body;

    const comm = new Comment(null, name, q1, q2, q3, q4, q5);
    console.log(comm);

    comm
        .save()
        .then(() => {
            res.redirect('/customburger/showCustomburger');
        })
        .catch(err => console.log(err));
};

//Update Comments
exports.postUpdateCommentAudience = (req, res) => {
    const {
        id,
        name,
        q1,
        q2,
        q3,
        q4,
        q5,
        createdAt
    } = req.body;

    const comm = new Comment(id, name, q1, q2, q3, q4, q5, createdAt);
    console.log(comm);

    comm
        .update()
        .then(() => {
            res.redirect('/customburger/showCustomburger');
        })
        .catch(err => console.log(err));
};





//Setburger Section
exports.chooseSpeaker = (req, res, next) => {
    res.render('setburger/setburger', {
        pageTitle: 'Speaker Section',
        path: 'speaker'
    });
};

//Show All Audience (Speaker Page)
exports.getAllCommentSpeaker = (req, res, next) => {
    Comment.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('setburger/showBurger', {
                audienceacc: rows,
                pageTitle: 'All Audience Comments',
                path: 'setburger/show'
            });
        })
        .catch(err => console.log(err));
};

//Delete Comment
exports.deleteCommentSpeaker = (req, res) => {
    const {
        id
    } = req.params;

    Comment.deleteById(id).then(() => {
            res.redirect('/setburger/showBurger');
        })
        .catch(err => console.log(err));
};

//View comment of Audience
exports.showSpecificCommentSpeaker = (req, res) => {
    const {
        id
    } = req.params;

    Comment.findById(id).
    then(([rows, fieldData]) => {
            res.render('setburger/displayBurger', {
                audience: rows[0],
                pageTitle: 'Display Comments',
                path: ''
            });
        })
        .catch(err => console.log(err));
};

//Show All Audience (Rename)
exports.getAllCommentRenameSpeaker = (req, res) => {
    Comment.fetchAll()
        .then(([rows, fieldData]) => {
            res.render('setburger/showBurgerRename', {
                audienceacc: rows,
                pageTitle: 'All Audience Comments',
                path: 'setburger/show'
            });
        })
        .catch(err => console.log(err));
};

//Show Rename Audience Page
exports.getRenameAudienceSpeaker = (req, res) => {
    const {
        id
    } = req.params;

    Comment.findById(id).
    then(([rows, fieldData]) => {
            res.render('setburger/rename', {
                audience: rows[0],
                pageTitle: 'Rename Audience',
                path: ''
            });
        })
        .catch(err => console.log(err));
};

//Rename Audience
exports.postRenameAudienceSpeaker = (req, res) => {
    const {
        id,
        name,
        q1,
        q2,
        q3,
        q4,
        q5,
        createdAt
    } = req.body;

    const comm = new Comment(id, name, q1, q2, q3, q4, q5, createdAt);
    console.log(comm);

    comm
        .update()
        .then(() => {
            res.redirect('/setburger/showBurgerRename');
        })
        .catch(err => console.log(err));
};