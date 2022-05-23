const pool = require("../db")

class TodoService {
    async findAll() {
        const todos = await pool.query(`SELECT * FROM todo ORDER BY id`)
        return todos.rows
    }

    async findOne(id) {
        const todo = await pool.query(`SELECT * FROM todo WHERE id = ${id}`)
        return todo.rows[0]
    }

    async update(id, body) {
        const todo = await pool.query(`UPDATE todo SET (title, status) = ('${body.title}', ${body.status || false}) WHERE id = ${id} RETURNING id,title,status`)
        return todo.rows[0]
    }

    async delete(id) {
        const todo = await pool.query(`DELETE FROM todo WHERE id = ${id} RETURNING id,title,false`)
        return todo.rows[0]
    }

    async create(body) {
        const todo = await pool.query(`INSERT INTO todo (title,status) VALUES('${body.title}', false) RETURNING id,title,status`)
        return todo.rows[0]
    }
}

module.exports = new TodoService()