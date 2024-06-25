export default ({ filter, action }) => {
	filter('posts.items.create', () => {
		console.log('Creating Item!');
	});

	action('posts.items.update', () => {
		console.log('Item updated!');
	});
};
