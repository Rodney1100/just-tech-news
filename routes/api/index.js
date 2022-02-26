const router = require("express").Router();
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
// const voteRoutes = require("./vote-routes");
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
// router.use("/vote", voteRoutes);
module.exports = router;
