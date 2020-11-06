<script>
    export let posts;
</script>
<script context="module">
    import Prismic from 'prismic-javascript';
    import { Client, linkResolver } from '../../prismic-config.js';
    import List from '../components/List.svelte';

    let posts;

    export async function preload({ params, query }) {
        const postResponse = await Client.query(
                Prismic.Predicates.at('document.type', 'blog'),
                { orderings: '[my.blog.publication_date desc]' }
        )

        posts = postResponse.results

        if (intro && posts) {
            return {posts};
        } else {
            this.error(res.status, data.message);
        }
    }

    export function formatDate(date) {
        return new Date(date).toLocaleDateString()
    }

</script>

<svelte:head>
<title>Amanda Graham Psychology Blog</title>
</svelte:head>

<List  posts= {posts} />


















