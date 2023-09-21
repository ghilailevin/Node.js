import { Router } from "express"
const router = Router()


router.get("/", (req, res) => res.render("Index", { title: "First Web With Node"}))


router.get("/about", (req, res) => res.render("about", { title: "About Me"}))


router.get("/contact", (req, res) => res.render("contact", { title: "Contanct Page"}))


export default router