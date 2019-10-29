const db = require('../util/database');

module.exports = class Comment {
    constructor(id, name, q1, q2, q3, q4, q5, createdAt) {
        this.id = id;
        this.name = name;
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
        this.q4 = q4;
        this.q5 = q5;
        this.createdAt = createdAt;
    }

    save() {
        return db.execute(
            'INSERT INTO AUDIENCEACC (NAME, Q1, Q2, Q3, Q4, Q5) VALUES (?, ?, ?, ?, ?, ?)',
            [this.name, this.q1, this.q2, this.q3, this.q4, this.q5]
        );
    }

    update() {
        return db.execute('UPDATE AUDIENCEACC SET NAME = ?, Q1 = ?, Q2 = ?, Q3 = ?, Q4 = ?, Q5 = ? WHERE ID = ?',
            [this.name, this.q1, this.q2, this.q3, this.q4, this.q5, this.id]);
    }

    static deleteById(id) {
        return db.execute(
            'DELETE from AUDIENCEACC WHERE ID = ?',
            [id]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM AUDIENCEACC');
    }

    static findById(id) {
        return db.execute('SELECT * FROM AUDIENCEACC WHERE ID = ?', [id]);
    }
}