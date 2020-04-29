import React from 'react';
import {mount, shallow} from 'enzyme';
import BlogPosts from "../BlogPosts";
import {IPost} from "../../../types/IPost";
import Post from "../Post";
import P from "../Paragraph";

const setup = (data?) => {
    const posts = data ? data : [
        {
            title: 'My first blog post',
            paragraphs: ['Hello there', 'This is an example of a componentized blog post']
        },
        {
            title: 'My second blog post',
            paragraphs: ['Hello there', 'This is another example', 'Wa-hoo!', 'Hooray']
        },
        {
            title: 'The final blog post',
            paragraphs: ['C’est fin']
        }
    ];

    const totalPCnt = posts.reduce((acc, currentVal) => acc + currentVal.paragraphs.length, 0);
    const wrapper = shallow(<BlogPosts data={posts} />);
    return {wrapper, totalPCnt, posts};
};


describe('BlogPosts', () => {

    it('Should render without errors', () => {
        const {wrapper} = setup();
        expect(wrapper.length).toBe(1);
    });

    it('Should render all posts', () => {
        const {wrapper, posts} = setup();
        expect(wrapper.find(Post)).toHaveLength(posts.length);
    });


    it('Should render all paragraphs', () => {
        const {wrapper, totalPCnt} = setup();
        expect(wrapper.find(P)).toHaveLength(totalPCnt);
    });

    it('Should not render last horizontal divider' , () => {
        const {wrapper, posts} = setup();
        const lastPostProps = wrapper.find('.main').childAt(posts.length - 1).props();
        expect(lastPostProps.isLast).toBeTruthy();
    });


});
