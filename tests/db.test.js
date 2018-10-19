const Database = require('../libs/database');
const db = new Database();

test("Should return true", ()=>{
	let sql = "INSERT INTO category (name) VALUES (?)";
	expect(db.query(sql, ['Diary'])).toBe(true);
});


test('Should return insert query', ()=>{
	let sql = db.insert('category', [
		{ name: 'Diary'}
	]);

	expect(sql.sql).toBe("INSERT INTO category (name) VALUES (?)");
})

test('Should return insert query', ()=>{
	let sql = db.insert('sub_category', [
		{ category: 1},
		{name : 'Drink'}
	]);

	expect(sql.sql).toBe("INSERT INTO sub_category (category,name) VALUES (?,?)");
})

test("Should return true", ()=> {
	let res = db.insert('categor', [{name:'Drink'}]).run();
	expect(res).toBe(true);
})

test("Should return deleted id", () => {
	let res = db.delete('category', 1).run();
	expect(res).toBe(true);
})

test('Should return all rows', ()=>{
	let rows = db.selectAll('category').get();
	expect(rows).equalTo(expect.arrayConatining([]));
})