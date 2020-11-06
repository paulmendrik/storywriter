import Prismic from 'prismic-javascript'

export const apiEndpoint = "https://storywriter.cdn.prismic.io/api/v2";

export const Client = Prismic.client(apiEndpoint);

export const linkResolver = (doc) => {
    if (doc.type === 'post') return `/blog/${doc.uid}`;
    if (doc.type === 'home') return '/blog';
    if (doc.type === 'about') return '/about';
    return '/';
};
