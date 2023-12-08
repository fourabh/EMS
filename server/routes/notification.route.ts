import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { getNotification, updateNotification } from "../controllers/notification.controller";
const notificationRouter = express.Router();


notificationRouter.get("/get-all-notifications",
authorizeRoles("admin"),
isAuthenticated,
getNotification
);
notificationRouter.put("/update-notification/:id",isAuthenticated,authorizeRoles("admin"),updateNotification);

export default notificationRouter;