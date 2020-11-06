<script context="module">
    import PrismicDOM from 'prismic-dom';
    import { Client } from '../../prismic-config.js';

    let about;

    export async function preload({ params, query }) {
        about = await Client.getSingle('about');

        if (about) {
            return {about};
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<script>
    export let about;
</script>

<svelte:head>
    <title>{PrismicDOM.RichText.asText(about.data.title)}</title>
</svelte:head>

<section class="uk-section uk-section-small uk-padding-remove-bottom">
<div class="uk-container">
<div class="uk-height-large uk-cover-container">
<img src="{about.data.banner.url}" alt="{PrismicDOM.RichText.asText(about.data.title)}" data-uk-cover>
</div>
</div>
</section>


<section class="uk-section-small uk-article">
    <div class="uk-container uk-container-small">
        <h2 class="uk-heading-medium title">{PrismicDOM.RichText.asText(about.data.title)}</h2>
        <p>{PrismicDOM.RichText.asText(about.data.content)}</p>
    </div>
</section>

<style>

    h2.title {
        font-family: mostra-nuova, sans-serif;
        font-weight: 400;
        font-size: clamp(4rem, 3.5vw, 4rem);
        text-transform: uppercase;
        color: black;
    }


    .uk-article p {
        font-family: adobe-caslon-pro, serif;
        font-weight: 400 !important;
        font-size: 1.25rem !important;
        line-height: 1.5;
        color: black !important;
    }

</style>
