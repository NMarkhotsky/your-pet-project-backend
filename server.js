const { default: mongoose } = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;

mongoose
	.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('MongoDB successfully connected');

		app.listen(PORT, () => {
			console.log(`Server running. Use our API on port: ${PORT}`);
		});
	})
	.catch((err) => {
		console.error('Error connecting to MongoDB:', err);

		process.exit(1);
	});
