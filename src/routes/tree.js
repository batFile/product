import {
	Main,
} from './../pages';

const routes = {
	'main': {
		path: '/',
		page: Main,
		name: 'Main',
		link () {
			return this.path;
		},
	},
};

// main page
const anchors = {
	'about' : {
		path: '#about',
		name: 'About',
		link () {
			return this.path;
		}
	},
	'product' : {
		path: '#product',
		name: 'Product',
		link () {
			return this.path;
		}
	},
	'FAQ' : {
		path: '#FAQ',
		name: 'FAQ',
		link () {
			return this.path;
		}
	},
	'contact' : {
		path: '#contact',
		name: 'Contact',
		link () {
			return this.path;
		}
	}
}

const __ROOT_ROUTE__ = routes.main.link();

export { routes, anchors, __ROOT_ROUTE__ };