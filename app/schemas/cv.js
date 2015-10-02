var CVSchema = new Schema({
	name: { type: String, required: true },
	born: { type: String, required: true },
	phone: { type: String, required: true },
	email: { type: String, required: true },
	show_email: { type: Boolean, required: true, default: false },
	address: { type: String },
	rfc: { type: String, required: true },
	specialization: [{ type: String }],
	grade: {
		name: { type: String, required: true },
		specialty: { type: String, required: true },
		year: { type: Number, required: true },
		entity: { type: String , required: true}
	},
	teaching_experience: { type: String, required: true },
	charges: [{ type: String }],
	reviser: { type: String, required: true },
	publications: [{ type: String }],
	conferences: [{ type: String }],
	courses: [{ type: String }],
	human_resources: {
		thesis: { type: String, required: true },
		advices: { type: String, required: true },
		tutorials: { type: String, required: true }
	},
	academic_entity: { type: String, required: true },
	area_experience: { type: String, required: true }
});

module.exports = CVSchema;