const todoService = require("../services/todo.service.js")

class TodoController {

    async getAll(req, res) {
        try {
            const todos = await todoService.findAll()
            res.status(200).json({ todos: todos })
        } catch (error) {
            console.log(error);
            res.status(500).json("Error message")


        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params
            const todo = await todoService.findOne(id)
            res.status(200).json({ todo: todo })

        } catch (error) {
            console.log(error);
            res.status(500).json("Error message")

        }
    }
    async update(req, res) {
        try {
            const { body } = req

            const { id } = req.params
            const todo = await todoService.update(id, {
                title: body.title,
                status: body.status
            })
            res.status(200).json({ todo: todo })

        } catch (error) {
            console.log(error);
            res.status(500).json("Error message")

        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params
            const todo = await todoService.delete(id)
            res.status(200).json({ todo: todo })

        } catch (error) {
            console.log(error);
            res.status(500).json("Error message")

        }
    }
    async create(req, res) {
        try {
            const { body } = req
            console.log(body)
            const todo = await todoService.create(body)
            res.status(200).json({ todo: todo })
        } catch (error) {
            console.log(error);
            res.status(500).json("Error message")

        }
    }
}
module.exports = new TodoController()