const router = require("express").Router();
const apiController = require("../controllers/apiController");
const { uploadSingle } = require("../middlewares/multer");

router.get("/landing-page", apiController.landingPage);
router.get("/category-page", apiController.categoryPage);
router.get("/list-page/:id", apiController.categoriListPage);
router.get("/detail-page/:id", apiController.detailPage);
router.post("/booking-page", uploadSingle, apiController.bookingPage);
module.exports = router;
