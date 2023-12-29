import express from "express"
import { isAuthenticated } from "../middleware/auth"
import { createOrder } from "../controllers/order.controller"
import { updateAccessToken } from "../controllers/user.controller"

const orderRouter = express.Router()

orderRouter.post('/create-order',updateAccessToken,isAuthenticated,createOrder)

export default orderRouter