const express = require('express');
const router = express.Router();

const selectController = require('../controller/select');

router.get('/', selectController.chooseOption);

router.get('/customburger', selectController.chooseAudience);
router.get('/customburger/create', selectController.getCreateAudience)
router.get('/customburger/showCustomburger', selectController.getAllCommentAudience)
router.get('/customburger/:id/edit', selectController.getEditCommentAudience)
router.get('/customburger/:id/show', selectController.showSpecificCommentAudience)

router.post('/customburger', selectController.postCreateAudience);
router.post('/customburger/:id', selectController.postUpdateCommentAudience);

router.get('/setburger', selectController.chooseSpeaker);
router.get('/setburger/showBurger', selectController.getAllCommentSpeaker)
router.get('/setburger/:id/delete', selectController.deleteCommentSpeaker);
router.get('/setburger/:id/show', selectController.showSpecificCommentSpeaker)
router.get('/setburger/showBurgerRename', selectController.getAllCommentRenameSpeaker)
router.get('/setburger/:id/rename', selectController.getRenameAudienceSpeaker)

router.post('/setburger/:id', selectController.postRenameAudienceSpeaker);

module.exports = router;