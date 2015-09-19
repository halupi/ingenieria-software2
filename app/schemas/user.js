var UserSchema = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	name: { type: String, required: true }, 
	type: { type: Schema.Types.ObjectId, ref: "userType" }
});

module.exports = UserSchema;