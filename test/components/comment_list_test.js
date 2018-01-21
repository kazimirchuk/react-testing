import { renderComponent, expect } from './../test_helper';
import CommentList from './../../src/components/comment_list';

describe('CommentList', () => {
	let component;

	beforeEach(() => {
		const props = {
			comments: ['first comment', 'second comment', 'third comment']
		};

		component = renderComponent(CommentList, null, props);
	});

	it('shows an LI for each comment', () => {
		expect(component.find('li').length).to.equal(3);
	});

	it('shows each comment that is provided', () => {
		console.log(component.find('li'));
		expect(component).to.contain('first comment');
		expect(component).to.contain('second comment');
		expect(component).to.contain('third comment');
	});
})
