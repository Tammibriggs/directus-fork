export default ({ action }) => {
	action('posts.items.create', () => {
		console.log('This will run');
	});
};
