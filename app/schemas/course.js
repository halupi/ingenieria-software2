var CourseContentSchema = new Schema({
	topic: { type: String, required: true },
	number_hours: { type: Number, required: true },
	vigency: { start: { type: Date, required: true }, end: { type: Date, required: true } },
	speakers: [{ type: String }],
	subtopics: [{ type: String }]
});

var TeachingSchema = new Schema({
	name: { type: String, required: true },
	grade: { type: String, required: true },
	charge: { type: String, required: true },
	entity: { type: String, required: true }
});

var CourseSchema = new Schema({
	logistical_info: {
		academic_activity: { type: String, required: true },
		modality: { type: String, required: true },
		vigency: { start: { type: Date, required: true }, end: { type: Date, required: true } },
		schedule: { type: String, required: true },
		place: { type: String, required: true },
		number_sessions: { type: Number, required: true },
		number_hours: { type: Number, required: true },
		max_registered: { type: Number, required: true },
		min_registered: { type: Number, required: true },
		public_cost: { type: Number, required: true },
		unam_cost: { type: Number, required: true },
		payment_teacher: { type: Number, required: true },
		class_material: [{ type: String }],
		computer_equipment: [{ type: String }],
		student_required_material: [{ type: String }],
		student_help_material: [{ type: String }],
		publicity: { type: String, required: true }
	},

	academic_info: {
		description: { type: String, required: true },
		general_purpose: { type: String, required: true },
		specific_purpose: { type: String, required: true },
		goals: { type: String, required: true },
		knowledge_field: { type: String, required: true },
		to: { type: String, required: true },
		evaluation: { type: String, required: true },
		entry_requirements: { type: String, required: true },
		graduation_requirements: { type: String, required: true },
		permanence_requirements: { type: String, required: true },
		teachers: { type: [ TeachingSchema ] },
		course_content: { type: [ CourseSchema ] },
		bibliography: [{ type: String }]
	}
});

module.exports = CourseSchema;